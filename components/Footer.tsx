'use client'

import React from 'react'
import { Box, Typography, Link, Stack, IconButton } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        backgroundColor: '#f5f5f5',
        textAlign: 'center',
        borderTop: '1px solid #eee',
      }}
    >
      <Typography variant="body2" color="text.secondary" mb={2}>
        Designed and Coded by{' '}
        <Link
          href="https://xicanoweb.carrd.co/"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
          fontWeight="bold"
          color="black"
        >
          Xicano Web Services
        </Link>
      </Typography>

      <Stack direction="row" justifyContent="center" spacing={2}>
        <IconButton
          component="a"
          href="mailto:osbaldoarellano1996@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: 'black' }}
        >
          <EmailIcon />
        </IconButton>

        <IconButton
          component="a"
          href="https://www.linkedin.com/in/osbaldoarellano"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: 'black' }}
        >
          <LinkedInIcon />
        </IconButton>
      </Stack>
    </Box>
  )
}
