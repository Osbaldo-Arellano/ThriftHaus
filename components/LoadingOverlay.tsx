'use client';

import { Box } from '@mui/material';
import Lottie from 'lottie-react';
import loadingAnimation from '@/lottie_files/loading_gray.json';

export default function LoadingOverlay() {
    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                bgcolor: 'rgba(255, 255, 255, 0.6)', // semi-transparent white
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                zIndex: 1300,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Lottie
                animationData={loadingAnimation}
                loop
                style={{ width: 150, height: 150 }}
            />
        </Box>
    );
}
