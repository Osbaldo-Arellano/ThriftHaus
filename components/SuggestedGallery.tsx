'use client'

import Link from 'next/link'
import { Typography } from '@mui/material'

interface Product {
  title: string
  description: string
  price: number
  imageUrl: string | null
}

export default function SuggestedGallery({ suggestions }: { suggestions: Product[] }) {
  return (
    <div>
      <Typography
        variant="h6"
        fontWeight="bold"
        letterSpacing="0.05em"
        color="black"
        textTransform="uppercase"
        mb={2}
      >
        You Might Like
      </Typography>

      <div style={{ display: 'flex', gap: '10px', overflowX: 'auto' }}>
        {suggestions.map(item => (
          <Link
            key={item.title}
            href={`/product/${encodeURIComponent(item.title)}`}
            style={{
              textDecoration: 'none',
              color: 'inherit',
              minWidth: '140px',
              flexShrink: 0
            }}
          >
            {item.imageUrl && (
              <img
                src={item.imageUrl}
                alt={item.title}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '250px',
                  borderRadius: '8px',
                  backgroundColor: '#f5f5f5',
                  objectFit: 'contain'
                }}
              />
            )}

            <div style={{ marginTop: '8px' }}>
              <p style={{
                fontSize: '14px',
                fontWeight: 'bold',
                color: '#000',
                marginBottom: '4px'
              }}>
                {item.title}
              </p>

              <p style={{
                fontSize: '13px',
                color: 'gray',
                marginBottom: '4px'
              }}>
                ${item.price.toFixed(2)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
