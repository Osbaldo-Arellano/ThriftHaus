'use client';

import { Box, Typography, Avatar, Stack, Divider } from '@mui/material';
import { Rating } from '@mui/material';

const reviews = [
    {
        name: 'Jasmine T.',
        content:
            'Absolutely love this shop! The item came clean, perfectly packaged, and even more beautiful in person. Will definitely be purchasing again.',
    },
    {
        name: 'Miguel A.',
        content:
            'Great quality and customer service. A lot care went into my order.',
    },
    {
        name: 'Alina C.',
        content:
            'Fast shipping and the vintage tee I got fits like a perfectly. Exactly as described. Recommend!',
    },
];

export default function Reviews() {
    return (
        <Box>


            <Typography
                variant="h6"
                fontWeight="bold"
                letterSpacing="0.05em"
                color="black"
                textTransform="uppercase"
                mb={2}
            >
                Reviews
            </Typography>
            <Box sx={{ mt: 4, textAlign: 'center' }}>
                <Typography variant="body2" fontWeight="medium" color="black" mb={1}>
                    Rated 5 Stars by Our Customers
                </Typography>
                <Rating value={5} readOnly precision={0.5} size="medium" />
            </Box>
            <Typography variant="body2" color="text.secondary" mb={3}>
                Here’s what our customers are saying.
            </Typography>

            <Stack spacing={4}>
                {reviews.map((review, index) => (
                    <Box key={index}>
                        <Stack direction="row" spacing={2} alignItems="center" mb={1}>
                            <Avatar>{review.name[0]}</Avatar>
                            <Typography fontWeight="medium" color="black">
                                {review.name}
                            </Typography>
                        </Stack>
                        <Typography variant="body2" color="text.secondary">
                            <Rating value={5} readOnly precision={0.5} size="medium" />
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {review.content}
                        </Typography>
                        {index < reviews.length - 1 && <Divider sx={{ mt: 3 }} />}
                    </Box>
                ))}
            </Stack>
        </Box>
    );
}
