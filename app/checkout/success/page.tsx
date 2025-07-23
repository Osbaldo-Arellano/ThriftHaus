'use client'

import { useEffect } from 'react'
import { Typography, Button, Container } from '@mui/material'
import Lottie from 'lottie-react'
import animationData from '@/lottie_files/Character Animation.json'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useCart } from '@/components/CartContent'

export default function SuccessPage() {
    const router = useRouter()
    const { clearCart } = useCart()

    useEffect(() => {
        window.scrollTo(0, 0)
        clearCart()  // Clear the cart once when page loads

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Navbar />
            <Container
                maxWidth="sm"
                sx={{
                    textAlign: 'center',
                    py: 6,
                    minHeight: '80vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                }}
            >
                <Lottie
                    animationData={animationData}
                    loop={true}
                    style={{
                        width: '280px',
                        margin: '0 auto 32px auto',
                    }}
                />

                <Typography variant="h4" fontWeight="bold" color='black' gutterBottom>
                    Payment Successful!
                </Typography>

                <Typography variant="body1" color="text.secondary" mb={4}>
                    Thank you for your purchase. Your order is being processed.
                </Typography>

                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: 'black',
                        color: 'white',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        px: 4,
                        py: 1.5,
                        fontSize: '16px',
                        borderRadius: 2,
                        '&:hover': {
                            backgroundColor: '#222',
                        },
                    }}
                    onClick={() => router.push('/')}
                >
                    Continue Shopping
                </Button>
            </Container>
            <Footer />
        </>
    )
}
