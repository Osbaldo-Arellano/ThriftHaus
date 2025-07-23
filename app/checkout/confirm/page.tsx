'use client'

import { useCart } from '@/components/CartContent'
import {
    Box,
    Typography,
    Divider,
    Button,
    IconButton
} from '@mui/material'

import DeleteIcon from '@mui/icons-material/Delete'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useRouter } from 'next/navigation'

export default function ConfirmCheckoutPage() {
    const { cartItems, removeFromCart } = useCart()
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0)
    const router = useRouter()

    const handleCheckout = async () => {
        if (cartItems.length === 0) return;

        try {
            const response = await fetch('/api/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    products: cartItems.map(item => ({
                        title: item.title,
                        price: item.price,
                        images: item.imageUrl ? [item.imageUrl] : [],
                    })),
                }),
            });

            const data = await response.json();

            if (data.url) {
                window.location.href = data.url;
            } else {
                alert('Failed to create checkout session.');
            }

        } catch (error) {
            console.error('Checkout error:', error);
            alert('Something went wrong during checkout.');
        }
    }

    return (
        <>
            <Navbar />

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '94vh',
                    backgroundColor: 'white',
                }}
            >
                <Box sx={{ flexGrow: 1, overflowY: 'auto', py: 4, px: 2 }}>
                    <Typography
                        variant="h6"
                        fontWeight="bold"
                        letterSpacing="0.05em"
                        color="black"
                        textTransform="uppercase"
                        mb={2}
                    >
                        Ready to Checkout?
                    </Typography>

                    <Typography variant="body2" color="text.secondary" align="left" mb={3}>
                        You’re about to be redirected to Stripe to complete your secure payment.
                    </Typography>

                    <Typography variant="body2" align="center" color="text.secondary" mb={2}>
                        {cartItems.length} {cartItems.length === 1 ? 'Item' : 'Items'} | ${totalPrice.toFixed(2)}
                    </Typography>

                    <Divider sx={{ mb: 2 }} />

                    {cartItems.map((item, index) => (
                        <Box key={index} sx={{ mb: 3 }}>
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                {item.imageUrl && (
                                    <Box
                                        component="img"
                                        src={item.imageUrl}
                                        alt={item.title}
                                        sx={{
                                            width: 100,
                                            height: 100,
                                            objectFit: 'cover',
                                            backgroundColor: '#f5f5f5',
                                            borderRadius: 1
                                        }}
                                    />
                                )}

                                <Box sx={{ flexGrow: 1 }}>
                                    <Typography fontWeight="bold">${item.price.toFixed(2)}</Typography>
                                    <Typography fontWeight="bold">{item.title}</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.description}
                                    </Typography>

                                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                        <IconButton size="small" onClick={() => removeFromCart(item)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    ))}

                    <Divider sx={{ my: 2 }} />
                </Box>

                {/* Footer Buttons */}
                <Box
                    sx={{
                        px: 2,
                        pt: 2,
                        pb: {
                            xs: 'calc(env(safe-area-inset-bottom, 0px) + 12px)',
                            sm: 2,
                        },
                        borderTop: '1px solid #eee',
                        backgroundColor: 'white',
                        boxShadow: '0 -2px 8px rgba(0,0,0,0.1)',
                        display: 'flex',
                        gap: 2,
                    }}
                >

                    <Button
                        variant="outlined"
                        onClick={() => router.push('/')}
                        fullWidth
                        sx={{ fontWeight: 'bold', textTransform: 'none', borderRadius: 8 }}
                    >
                        Continue Shopping
                    </Button>
                    <Button
                        variant="contained"
                        onClick={handleCheckout}
                        fullWidth
                        sx={{
                            backgroundColor: 'black',
                            color: 'white',
                            fontWeight: 'bold',
                            textTransform: 'none',
                            borderRadius: 8
                        }}
                    >
                        Pay with Stripe
                    </Button>
                </Box>
            </Box>

            <Footer />
        </>
    )
}
