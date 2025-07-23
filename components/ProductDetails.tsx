'use client'

import { useState } from 'react'
import { Box, Typography, Button, Slide, Paper } from '@mui/material'
import { useCart } from '@/components/CartContent'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import Lottie from 'lottie-react'
import loadingAnimation from '@/lottie_files/loading_gray.json'
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

const SuggestedGallery = dynamic(() => import('./SuggestedGallery'), {
  loading: () => (
    <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
      <Lottie animationData={loadingAnimation} loop style={{ width: 100, height: 100 }} />
    </Box>
  ),
})

interface Product {
  title: string
  imageUrl: string | null
  description: string
  price: number
}

export default function ProductDetails({
  product,
  suggestions
}: {
  product: Product
  suggestions: Product[]
}) {
  const { addToCart, cartItems } = useCart()
  const [showMiniCart, setShowMiniCart] = useState(false)
  const [lastAdded, setLastAdded] = useState<Product | null>(null)
  const router = useRouter()

  const isAdded = cartItems.some(item => item.title === product.title)

  const handleAddToCart = () => {
    addToCart(product)
    setLastAdded(product)
    setShowMiniCart(true)
    setTimeout(() => setShowMiniCart(false), 4000)
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'white' }}>
      <Box sx={{ py: 4, px: 2 }}>
        {product.imageUrl && (
          <Box
            component="img"
            src={product.imageUrl}
            alt={product.title}
            sx={{ width: '100%', height: 'auto', borderRadius: 2, mb: 3, backgroundColor: '#f5f5f5' }}
          />
        )}

        <Typography variant="h5" fontWeight="bold" letterSpacing="0.05em" color="black">
          {product.title}
        </Typography>

        <Typography variant="body2" color="text.secondary" mb={2}>
          {product.description}
        </Typography>

        <Typography variant="h6" fontWeight="bold" mb={3} color="black">
          ${product.price.toFixed(2)}
        </Typography>

        <Box
          sx={{
            backgroundColor: 'white',
          }}
        >
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: 'black',
              color: 'white',
              fontWeight: 'bold',
              borderRadius: 8,
              mb: 1,
              textTransform: 'none',
              '&:hover': { backgroundColor: '#222' },
            }}
            disabled={isAdded}
            onClick={handleAddToCart}
          >
            {isAdded ? 'Added to Cart' : 'Add to Cart'}
          </Button>
        </Box>

        <Box>
          <SuggestedGallery suggestions={suggestions} />
        </Box>
      </Box>

      {/* Mini Cart Slide-Up */}
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
                  marginBottom: 1
                }}
                onClick={() => router.push('/checkout')}
              >
                View Bag ({cartItems.length})
              </Button>

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
                  paddingBottom: {
                    xs: 'calc(env(safe-area-inset-bottom, 0px) + 12px)',
                    sm: 2,
                  },
                }}
                onClick={() => router.push('/checkout/confirm')}
              >
                Checkout
              </Button>
            </>
          )}
        </Paper>
      </Slide>
    </Box>
  )
}
