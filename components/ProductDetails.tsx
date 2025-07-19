'use client'

import { Box, Typography, Button } from '@mui/material'
import { useCart } from '@/components/CartContent'
import SuggestedGallery from './SuggestedGallery'

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
  product: Product,
  suggestions: Product[]
}) {
  const { addToCart, cartItems } = useCart()

  const isAdded = cartItems.some(item => item.title === product.title)

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '94vh',
        backgroundColor: 'white',
      }}
    >
        
      {/* Scrollable Content */}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: 'auto',
          py: 4,
          px: 2,
        }}
      >
        {product.imageUrl && (
          <Box
            component="img"
            src={product.imageUrl}
            alt={product.title}
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 2,
              mb: 3,
              backgroundColor: '#f5f5f5',
            }}
          />
        )}

        <Typography variant="h5" fontWeight="bold"
            letterSpacing="0.05em"
            color="black">
          {product.title}
        </Typography>

        <Typography variant="body2" color="text.secondary" mb={2}>
          {product.description}
        </Typography>

        <Typography variant="h6" fontWeight="bold" mb={3} color='black'>
          ${product.price.toFixed(2)}
        </Typography>

        <Box>
        {/* Suggested Products */}
        <SuggestedGallery suggestions={suggestions} />
      </Box>
    
    </Box>



      {/* Fixed Bottom Button */}
      <Box
        sx={{
          p: 2,
          borderTop: '1px solid #eee',
          backgroundColor: 'white',
          boxShadow: '0 -2px 8px rgba(0,0,0,0.1)',
        }}
      >
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
            '&:hover': {
              backgroundColor: '#222',   // darker black on hover
            },
            '&:disabled': {
              backgroundColor: '#555',   // gray for disabled state
              color: 'white',
            },
          }}
          disabled={isAdded}
          onClick={() => addToCart(product)}
          fullWidth
        >
          {isAdded ? 'Added to Cart' : 'Add to Cart'}
        </Button>

      </Box>
    </Box>
  )
}
