'use client';

import { Box, Typography, IconButton, Stack } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import SvgIcon from '@mui/material/SvgIcon';
import Link from 'next/link';
import MuiLink from '@mui/material/Link';
import Reviews from '@/components/Reviews';
import { Rating } from '@mui/material';

export default function AboutUs() {
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
                About Us
            </Typography>

            <Typography variant="body2" color="text.secondary" mb={3}>
                Thanks for visiting! We're so glad you're here.
            </Typography>

            <Typography variant="body2" color="text.secondary" mb={3}>
                Thrift Haus started as a passion project between my brother and me — a way for us to build something together. We’re rooted in a shared belief: fashion should be intentional, not disposable.
            </Typography>

            <Typography variant="body2" color="text.secondary" mb={3}>
                We reject fast fashion. Every piece in our shop is chosen with care, reflecting our commitment to sustainability, creativity, and quality.
            </Typography>

            <Typography variant="body2" color="text.secondary" mb={3}>
                From hand-washing and ironing to eco-conscious packaging, we personally prepare each item before it ships. Every vintage find is cleaned, restored, and made ready for its next chapter.
            </Typography>

            <Typography variant="body2" color="text.secondary" mb={3}>
                We inspect every product for quality and clearly note any imperfections on the product page — always reflected in the price.
            </Typography>

            <Typography variant="body2" color="text.secondary" mb={3}>
                Thank you for supporting our journey.{' '}
                <MuiLink component={Link} href="/contact" underline="hover" color="black" fontWeight="medium">
                    Got a question? Contact us — we’d love to hear from you.
                </MuiLink>
            </Typography>

            <Box
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mt: 4,
                }}
            >
                <Stack direction="row" spacing={2}>
                    <IconButton
                        aria-label="Email"
                        component="a"
                        href="mailto:contact@thrifthaus.com"
                        target="_blank"
                        rel="noopener"
                    >
                        <EmailIcon />
                    </IconButton>

                    <IconButton
                        aria-label="Instagram"
                        component="a"
                        href="https://instagram.com/thrifthaus"
                        target="_blank"
                        rel="noopener"
                    >
                        <InstagramIcon />
                    </IconButton>

                    <IconButton
                        aria-label="TikTok"
                        component="a"
                        href="https://www.tiktok.com/@thrifthaus"
                        target="_blank"
                        rel="noopener"
                    >
                        <SvgIcon viewBox="0 0 256 256">
                            <path
                                fill="currentColor"
                                d="M219.8 89.3c-24.2 0-43.8-19.6-43.8-43.8V32h-34.5v122.7c0 16.6-13.4 30-30 30s-30-13.4-30-30 13.4-30 30-30c2.9 0 5.8.4 8.5 1.3V96.3a62.7 62.7 0 0 0-8.5-.6c-35.1 0-63.5 28.4-63.5 63.5S86.9 223 122 223s63.5-28.4 63.5-63.5v-43.4c11.5 7.1 25.2 11.2 39.8 11.2V89.3h-5.5z"
                            />
                        </SvgIcon>
                    </IconButton>

                </Stack>
                
                <Reviews />
            </Box>
        </Box>
    );
}
