'use client'

import { useState, useRef } from 'react'
import { Box, Button, Container, Typography, Slide, Paper } from '@mui/material'
import { useCart } from '@/components/CartContent'
import { useRouter } from 'next/navigation'
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

interface Product {
  title: string
  imageUrl: string | null
  description: string
  price: number
}

export default function ProductsList({ products }: { products: Product[] }) {
  const { addToCart, cartItems } = useCart()
  const router = useRouter()

  const [showMiniCart, setShowMiniCart] = useState(false)
  const [lastAdded, setLastAdded] = useState<Product | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleAddToCart = (product: Product) => {
    addToCart(product)
    setLastAdded(product)
    setShowMiniCart(true)
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      setShowMiniCart(false)
      timeoutRef.current = null
    }, 2500)

  }

  return (
    <Container id="products" maxWidth="lg" sx={{ backgroundColor: 'white', py: 4 }}>
      <Typography
        variant="h6"
        fontWeight="bold"
        letterSpacing="0.05em"
        color="black"
        textTransform="uppercase"
        mb={2}
      >
        Curated Finds
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: 3,
        }}
      >
        {products.map((product, index) => {
          const isAdded = cartItems.some(item => item.title === product.title)

          return (
            <Box
              key={index}
              onClick={() => router.push(`/product/${encodeURIComponent(product.title)}`)}
              sx={{
                backgroundColor: '#f5f5f5',
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'left',
                fontSize: 14,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                borderRadius: 2,
                cursor: 'pointer',
              }}
            >
              {product.imageUrl && (
                <Box
                  component="img"
                  src={product.imageUrl}
                  alt={product.title}
                  sx={{
                    width: '100%',
                    maxWidth: '250px',
                    height: 'auto',
                    mb: 2,
                    borderRadius: 1,
                  }}
                />
              )}

              <Typography
                variant="subtitle1"
                fontWeight="bold"
                alignSelf="flex-start"
                color="black"
                gutterBottom
              >
                {product.title}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                alignSelf="flex-start"
                gutterBottom
              >
                {product.description}
              </Typography>

              <Typography
                variant="body1"
                fontWeight="bold"
                alignSelf="flex-start"
                color="black"
                mb={2}
              >
                ${product.price}
              </Typography>

              <Button
                variant="contained"
                fullWidth
                sx={{
                  mt: 'auto',
                  backgroundColor: 'black',
                  color: 'white',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#222',
                  },
                  '&:disabled': {
                    backgroundColor: '#555',
                    color: 'white',
                  },
                }}
                disabled={isAdded}
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart(product);
                }}
              >
                {isAdded ? 'Added to Cart' : 'Add to Cart'}
              </Button>

            </Box>

          )
        })}
      </Box>

      {/* Mini Cart Popup */}
      <Slide direction="up" in={showMiniCart} mountOnEnter unmountOnExit>
        <Paper
          elevation={4}
          sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            p: 2,
            pt: 4, // extra padding top to accommodate the close button
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            backgroundColor: 'white',
            zIndex: 1500,
            maxWidth: '100vw',
            boxShadow: '0 -4px 16px rgba(0,0,0,0.2)',
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={() => setShowMiniCart(false)}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              color: 'black',
            }}
            aria-label="Close mini cart"
          >
            <CloseIcon />
          </IconButton>

          {lastAdded && (
            <>
              <Typography variant="subtitle2" color="success.main" fontWeight="bold" gutterBottom>
                ✔ Added to Bag
              </Typography>

              <Box sx={{ display: 'flex', mb: 2 }}>
                {lastAdded.imageUrl && (
                  <Box
                    component="img"
                    src={lastAdded.imageUrl}
                    alt={lastAdded.title}
                    sx={{ width: 64, height: 64, borderRadius: 1, mr: 2 }}
                  />
                )}
                <Box>
                  <Typography fontWeight="bold">{lastAdded.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    ${lastAdded.price}
                  </Typography>
                </Box>
              </Box>

              <Button
                variant="outlined"
                fullWidth
                sx={{
                  color: 'black',
                  borderColor: 'black',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#f5f5f5',
                    borderColor: 'black',
                  },
                  marginBottom: 1,
                }}
                onClick={() => router.push('/checkout')}
              >
                View Bag ({cartItems.length})
              </Button>

              <Box
                sx={{
                  pb: {
                    xs: 'calc(env(safe-area-inset-bottom, 0px) + 12px)',
                    sm: 2,
                  },
                }}
              >
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: 'black',
                    color: 'white',
                    fontWeight: 'bold',
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: '#222',
                    },
                  }}
                  onClick={() => router.push('/checkout/confirm')}
                >
                  Checkout
                </Button>
              </Box>
            </>
          )}

        </Paper>
      </Slide>
    </Container>
  )
}
