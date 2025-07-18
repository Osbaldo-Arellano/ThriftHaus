'use client'

import { useState } from 'react'
import {
  AppBar,
  Typography,
  Box,
  IconButton,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Badge,
  ListItemButton,
  Button
} from '@mui/material'

import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import MenuIcon from '@mui/icons-material/Menu'
import { useCart } from '@/components/CartContent'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const { cartItems, clearCart } = useCart() 
  const router = useRouter()

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open)
  }

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 'none', borderBottom: '1px solid #eee' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>

          {/* Left: Brand Name */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 'bold',
                letterSpacing: '0.05em',
                color: 'black',
                textTransform: 'uppercase',
              }}
            >
              Thrift Haus
            </Typography>
          </Box>

          {/* Right: Icons */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <IconButton onClick={() => router.push('/checkout')}>
              <Badge badgeContent={cartItems.length} color="error">
                <ShoppingBagOutlinedIcon sx={{ color: 'black' }} />
              </Badge>
            </IconButton>

            <IconButton onClick={toggleDrawer(true)}>
              <MenuIcon sx={{ color: 'black' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer Menu */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Menu
          </Typography>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Shop" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="About Us" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Contact" />
              </ListItemButton>
            </ListItem>
          </List>

          {/* Dev Reset Button */}
          {process.env.NODE_ENV === 'development' && (
            <Button
              variant="outlined"
              color="error"
              onClick={() => {
                clearCart()              // Clears cart context
                localStorage.removeItem('cart')  // Clears persistence
              }}
              fullWidth
              sx={{ mt: 2 }}
            >
              Reset Cart (Dev)
            </Button>
          )}
        </Box>
      </Drawer>
    </>
  )
}
