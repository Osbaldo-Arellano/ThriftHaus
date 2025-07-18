'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

interface Product {
  title: string
  imageUrl: string | null
  description: string
  price: number
}

interface CartContextType {
  cartItems: Product[]
  addToCart: (product: Product) => void
  clearCart: () => void
  removeFromCart: (productToRemove: Product) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<Product[]>([])
  const [hydrated, setHydrated] = useState(false)  // 🔥 Add this

  useEffect(() => {
    const storedCart = localStorage.getItem('cart')
    if (storedCart) {
      setCartItems(JSON.parse(storedCart))
    }
    setHydrated(true)  // 🔥 Mark as loaded
  }, [])

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem('cart', JSON.stringify(cartItems))
    }
  }, [cartItems, hydrated])

  const addToCart = (product: Product) => {
    setCartItems(prev => [...prev, product])
  }

  const clearCart = () => {
    setCartItems([])
    localStorage.removeItem('cart')
  }

  const removeFromCart = (productToRemove: Product) => {
    setCartItems(prev => prev.filter(item => item.title !== productToRemove.title))
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, clearCart, removeFromCart }}>
        {hydrated ? children : null}
    </CartContext.Provider>

  )
}
