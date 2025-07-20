import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2025-06-30.basil',
});

export async function POST(request: Request) {
    console.log("Product")

    try {

        const { products } = await request.json();

        if (!products || !Array.isArray(products) || products.length === 0) {
            return NextResponse.json({ error: 'Missing product data' }, { status: 400 });
        }

        const lineItems = products.map((product: any) => ({
            price_data: {
                currency: 'usd',
                product_data: {
                    name: product.title,
                    images: product.images || [],
                },
                unit_amount: Math.round(product.price * 100),
            },
            quantity: 1,
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: lineItems,
            success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/cancel`,
        });

        return NextResponse.json({ url: session.url });

    } catch (error: any) {
        console.error('Stripe error:', error.message);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
