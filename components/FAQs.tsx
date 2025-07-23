'use client';

import {
    Box,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ() {
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
                FAQ
            </Typography>

            <Typography variant="body2" color="text.secondary" mb={3}>
                Got questions? We’ve got answers.
            </Typography>

            {faqItems.map((item, index) => (
                <Accordion
                    key={index}
                    disableGutters
                    elevation={0}
                    square
                    sx={{
                        backgroundColor: 'transparent',
                        borderBottom: '1px solid #e0e0e0',
                        boxShadow: 'none',
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        sx={{
                            px: 0,
                            '& .MuiAccordionSummary-content': {
                                my: 1,
                            },
                        }}
                    >
                        <Typography fontWeight="medium">{item.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ px: 0, pb: 2 }}>
                        <Typography variant="body2" color="text.secondary">
                            {item.answer}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
}

const faqItems = [
    {
        question: 'Where do you source your items?',
        answer:
            'We carefully curate items from estate sales, vintage wholesalers, and local thrift shops. Each piece is selected for quality, uniqueness, and style.',
    },
    {
        question: 'Do you accept returns?',
        answer:
            'All sales are final due to the nature of vintage clothing. However, if there’s an issue with your order, please contact us — we’re happy to help.',
    },
    {
        question: 'How do you clean and prepare items?',
        answer:
            'We hand-wash, iron, and inspect every item before it ships. Each garment is cleaned and restored with care to ensure it’s ready for its next chapter.',
    },
    {
        question: 'What sizes do you carry?',
        answer:
            'Our collection spans a wide range of sizes. Be sure to check each product description for measurements and fit details.',
    },
    {
        question: 'When will my order ship?',
        answer:
            'Orders typically ship within 2–3 business days. You’ll receive a tracking number as soon as your package is on its way.',
    },
];
