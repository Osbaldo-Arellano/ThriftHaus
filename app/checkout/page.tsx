'use client'

import { useCart } from '@/components/CartContent'
import {
  Box,
  Typography,
  Divider,
  Button,
  IconButton
} from '@mui/material'

import DeleteIcon from '@mui/icons-material/Delete'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useRouter } from 'next/navigation'

export default function MiniCart() {
  const router = useRouter()
  const { cartItems, removeFromCart } = useCart()
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <>
      <Navbar />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundColor: 'white',
        }}
      >
        {/* Scrollable Cart Content */}
        <Box
          sx={{
            flexGrow: 1,
            overflowY: 'auto',
            py: 4,
            px: 2,
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            letterSpacing="0.05em"
            color="black"
            textTransform="uppercase"
            mb={2}
          >
            Cart
          </Typography>

          <Typography variant="body2" align="center" color="text.secondary" mb={2}>
            {cartItems.length} {cartItems.length === 1 ? 'Item' : 'Items'} | ${totalPrice.toFixed(2)}
          </Typography>

          <Divider sx={{ mb: 2 }} />

          {cartItems.map((item, index) => (
            <Box key={index} sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', gap: 2 }}>
                {item.imageUrl && (
                  <Box
                    component="img"
                    src={item.imageUrl}
                    alt={item.title}
                    sx={{
                      width: 100,
                      height: 100,
                      objectFit: 'cover',
                      backgroundColor: '#f5f5f5',
                      borderRadius: 1
                    }}
                  />
                )}

                <Box sx={{ flexGrow: 1 }}>
                  <Typography fontWeight="bold" color="text.primary">
                    ${item.price.toFixed(2)}
                  </Typography>
                  <Typography fontWeight="bold" color="text.secondary">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <IconButton size="small" onClick={() => removeFromCart(item)}>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Sticky Checkout Button */}
        <Box
          sx={{
            p: 2,
            borderTop: '1px solid #eee',
            backgroundColor: 'white',
            boxShadow: '0 -2px 8px rgba(0,0,0,0.05)',
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
            onClick={() => router.push('/checkout/confirm')}
          >
            Go to Checkout
          </Button>
        </Box>

        <Footer />
      </Box>
    </>
  )
}
