import { NextResponse } from 'next/server';
import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY || !process.env.NEXT_PUBLIC_SITE_URL) {
    throw new Error('Missing Stripe env variables');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2025-06-30.basil',
});

export async function POST(request: Request) {
    try {
        const { products }: { products: { title: string; price: number; images?: string[] }[] } = await request.json();

        if (!Array.isArray(products) || products.length === 0) {
            return NextResponse.json({ error: 'Missing or invalid product data' }, { status: 400 });
        }

        const lineItems = products.map(product => ({
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
            metadata: {
                source: 'thrifthaus',
                itemCount: products.length.toString(),
            },
            success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/cancel`,
        });

        return NextResponse.json({ url: session.url, sessionId: session.id });

    } catch (error: any) {
        console.error('Stripe checkout error:', error.message);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
