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

            <Box sx={{ flexGrow: 1, py: 4, px: 2, height: '80vh' }}>
                <AboutUs />
            </Box>

            <Footer />
        </Box>
    );
}
