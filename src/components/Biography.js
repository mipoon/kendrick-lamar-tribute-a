import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';


const Biography = () => {
  return (
    <Container sx={{ padding: '60px 20px', color: 'white' }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Typography variant="h2" gutterBottom align="center">
          Life & Legacy
        </Typography>
        <Box sx={{ maxWidth: '800px', margin: '0 auto', lineHeight: 1.8, fontSize: '1.1rem' }}>
          <Typography paragraph>
            Kendrick Lamar Duckworth, born June 17, 1987, in Compton, California, rose from humble beginnings to
            become one of the most influential artists of our time. His music, rooted in storytelling and social
            commentary, redefined hip-hop and inspired millions worldwide.
          </Typography>
          <Typography paragraph>
            With albums like <i>To Pimp a Butterfly</i> and <i>DAMN.</i>, Kendrick addressed issues of race, identity,
            and systemic inequality, earning him critical acclaim, multiple Grammy Awards, and a Pulitzer Prize—the
            first for a non-classical or jazz artist.
          </Typography>
          <Typography paragraph>
            On February 26, 2025, the world lost a legend, but his words and impact will live on forever. Kendrick’s
            legacy is not just in his music but in the lives he touched and the conversations he started.
          </Typography>
        </Box>
      </motion.div>
    </Container>
  );
};


export default Biography;