'use client'

import { useEffect } from 'react'
import { Typography, Button, Container } from '@mui/material'
import Lottie from 'lottie-react'
import ufoAnimation from '@/lottie_files/Ufo lottie animation.json'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function FailurePage() {
    const router = useRouter()

    useEffect(() => {
        window.scrollTo(0, 0)
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
                    animationData={ufoAnimation}
                    loop={true}
                    style={{
                        position: 'fixed',
                        top: '10px',
                        width: '400px',
                        zIndex: 9999,
                        animation: 'flyAcross 5s linear infinite',
                        pointerEvents: 'none',
                    }}
                />


                <Typography variant="h4" fontWeight="bold" color="error" gutterBottom>
                    Payment Abducted! 👽
                </Typography>

                <Typography variant="body1" color="text.secondary" mb={4}>
                    Something strange happened. Looks like aliens intercepted your payment attempt.
                    Don’t worry—your cart is safe, and you can try again anytime.
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
