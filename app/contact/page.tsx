'use client';

import {
    Box,
    Typography,
    TextField,
    Button,
    Container
} from '@mui/material';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutUs from '@/components/AboutUs';

export default function ContactPage() {
    return (
        <Box sx={{ backgroundColor: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />

            <Box sx={{ flexGrow: 1, py: 4, px: 2 }}>
                <Container maxWidth="sm" disableGutters>
                    <Typography
                        variant="h6"
                        fontWeight="bold"
                        letterSpacing="0.05em"
                        color="black"
                        textTransform="uppercase"
                        mb={2}
                    >
                        Contact Us
                    </Typography>

                    <Typography variant="body2" align="center" color="text.secondary" mb={3}>
                        Have a question, suggestion, or just want to say hi? Drop us a message.
                    </Typography>

                    <Box component="form" noValidate autoComplete="off">
                        <TextField
                            fullWidth
                            label="Name"
                            variant="outlined"
                            sx={{ mb: 3 }}
                        />
                        <TextField
                            fullWidth
                            label="Email"
                            type="email"
                            variant="outlined"
                            sx={{ mb: 3 }}
                        />
                        <TextField
                            fullWidth
                            label="Message"
                            multiline
                            rows={4}
                            variant="outlined"
                            sx={{ mb: 3 }}
                        />

                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: 'black',
                                color: 'white',
                                fontWeight: 'bold',
                                borderRadius: 8,
                                py: 1.5,
                                fontSize: '16px',
                                textTransform: 'none',
                                mt: 2,
                            }}
                            fullWidth
                            onClick={() => alert('Thanks for reaching out!')}
                        >
                            Send Message
                        </Button>
                    </Box>
                </Container>
            </Box>

            <Footer />
        </Box>
    );
}
