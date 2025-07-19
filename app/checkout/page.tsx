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

export default function MiniCart() {
  const { cartItems, removeFromCart } = useCart()
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0)


  return (
    <>
      <Navbar />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '94vh',            // Full screen height
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
                  <Typography fontWeight="bold">${item.price.toFixed(2)}</Typography>
                  <Typography fontWeight="bold">{item.title}</Typography>
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

          <Divider sx={{ my: 2 }} />
        </Box>

        {/* Fixed Bottom Checkout Button */}
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
              textTransform: 'none'
            }}
            fullWidth
          >
            Go to Checkout
          </Button>
        </Box>
      </Box>

      <Footer />
    </>
  )
}
