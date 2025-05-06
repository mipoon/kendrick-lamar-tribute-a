import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';


const Hero = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: 'url(https://via.placeholder.com/1200x600?text=Kendrick+Lamar)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.6)',
        },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <Typography variant="h1" gutterBottom>
          Kendrick Lamar
        </Typography>
        <Typography variant="h4" gutterBottom>
          1987 - 2025
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: '600px', padding: '0 20px' }}>
          A visionary artist, a voice of a generation, and a cultural icon. Forever in our hearts.
        </Typography>
      </motion.div>
    </Box>
  );
};


export default Hero;