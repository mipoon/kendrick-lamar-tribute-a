import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';


const albums = [
  { title: 'Section.80', year: 2011, cover: 'https://via.placeholder.com/300?text=Section.80' },
  { title: 'good kid, m.A.A.d city', year: 2012, cover: 'https://via.placeholder.com/300?text=GKMC' },
  { title: 'To Pimp a Butterfly', year: 2015, cover: 'https://via.placeholder.com/300?text=TPAB' },
  { title: 'DAMN.', year: 2017, cover: 'https://via.placeholder.com/300?text=DAMN' },
  { title: 'Mr. Morale & the Big Steppers', year: 2022, cover: 'https://via.placeholder.com/300?text=MMBS' },
];


const Discography = () => {
  return (
    <Box sx={{ backgroundColor: '#1a1a1a', padding: '60px 0', color: 'white' }}>
      <Container>
        <Typography variant="h2" gutterBottom align="center">
          Discography
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {albums.map((album, index) => (
            <Grid item xs={12} sm={6} md={2.4} key={album.title}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center' }}
              >
                <Box
                  component="img"
                  src={album.cover}
                  alt={album.title}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                    marginBottom: '16px',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                />
                <Typography variant="h6">{album.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {album.year}
                </Typography>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};


export default Discography;