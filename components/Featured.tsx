'use client'

import React from 'react';
import { Typography, Box, Paper, Stack } from '@mui/material';
import Link from 'next/link';

interface Product {
  title: string;
  imageUrl: string | null;
  slug: string;
}

interface FeaturedProps {
  products: Product[];
}

export default function Featured({ products }: FeaturedProps) {
  return (
    <>
      <Box sx={{ textAlign: 'center', py: 2, backgroundColor: 'white' }}>
        <Typography
          variant="h6"
          fontWeight="bold"
          letterSpacing="0.05em"
          color="black"
          textTransform="uppercase"
        >
          Featured
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', overflowX: 'auto', gap: 2, px: 2, py: 2, backgroundColor: 'white' }}>
        {products.slice(0, 5).map((product, index) => (
          <Link key={index} href={`/product/${product.title}`} style={{ textDecoration: 'none' }}>
            <Paper
              sx={{
                minWidth: 140,
                flexShrink: 0,
                p: 1,
                textAlign: 'center',
                backgroundColor: '#fafafa',
                borderRadius: 2,
                boxShadow: 2,
                cursor: 'pointer',
                transition: 'transform 0.15s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.03)',
                },
              }}
            >
              {product.imageUrl ? (
                <Box
                  component="img"
                  src={product.imageUrl}
                  alt={product.title}
                  sx={{
                    width: '100%',
                    height: 120,
                    objectFit: 'cover',
                    borderRadius: 1,
                    mb: 1,
                  }}
                />
              ) : (
                <Box
                  sx={{
                    width: '100%',
                    height: 120,
                    backgroundColor: '#ddd',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 1,
                    mb: 1,
                    fontSize: '0.9rem',
                    color: '#666',
                  }}
                >
                  No Image
                </Box>
              )}

              <Typography variant="body2" fontWeight={500} color="black">
                {product.title}
              </Typography>
            </Paper>
          </Link>
        ))}
      </Box>

      <Box sx={{ textAlign: 'center', py: 4, backgroundColor: 'white' }}>
        <Typography variant="h6" fontWeight="bold" color="black" mb={2}>
            Why Shop With Us?
        </Typography>

            <Box
                sx={{
                display: 'flex',
                overflowX: 'auto',
                pl: 2,
                pr: 2,
                gap: 2,
                }}
            >
                {[
                '🌱 Sustainable',
                '🛒 Unique Finds',
                '🔒 Secure Checkout',
                '🔍 Quality Inspected',
                '🚚 Fast Shipping',
                '💬 Friendly Support',
                ].map((text, index) => (
                <Typography
                    key={index}
                    variant="body1"
                    color="black"
                    sx={{
                    flexShrink: 0,
                    scrollSnapAlign: 'start',
                    whiteSpace: 'nowrap',
                    border: '1px solid #ddd',
                    borderRadius: 20,
                    px: 2,
                    py: 1,
                    backgroundColor: '#f5f5f5',
                    fontWeight: 500,
                    //   marginLeft: index === 0 ? '160px' : undefined,  // 👈 Adds left margin to the first badge
                    }}
                >
                    {text}
                </Typography>
                ))}

            </Box>
        </Box>

    </>
  );
}
