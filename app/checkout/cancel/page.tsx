'use client'

import { useEffect } from 'react'
import { Typography, Button, Container, Box } from '@mui/material'
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
                        left: "-40px",
                        top: '10px',
                        width: '500px',
                        zIndex: 9999,
                        animation: 'flyAcross 5s linear infinite',
                        pointerEvents: 'none',
                    }}
                />
                <Box sx={{
                    mt: '50%'
                }}>
                    <Typography
                        variant="body1"
                        sx={{
                            color: 'black',
                            fontSize: '18px',
                            fontWeight: 500,
                            lineHeight: 1.6,
                            mb: 4,
                            textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                        }}
                    >
                        Something strange happened.{' '}
                        <Box component="span" sx={{ fontWeight: 'bold', color: 'error.main' }}>
                            It looks like aliens intercepted your payment attempt.
                        </Box>
                        <br />
                        Or maybe... you just changed your mind.
                        <br />
                        Either way, your cart is safe and sound —
                        <Box component="span" sx={{ fontWeight: 600 }}>try again when you're ready.</Box>
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
                </Box>

            </Container>
            <Footer />
        </>
    )
}
