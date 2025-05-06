import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';


const Tribute = () => {
  return (
    <Container sx={{ padding: '60px 20px', color: 'white', textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Typography variant="h2" gutterBottom>
          A Tribute to Kendrick
        </Typography>
        <Box sx={{ maxWidth: '700px', margin: '0 auto', fontStyle: 'italic', lineHeight: 1.8, fontSize: '1.2rem' }}>
          <Typography paragraph>
            "Kendrick taught us to be unapologetically ourselves, to speak truth to power, and to find beauty in the
            struggle. His music was a mirror to our pain and a beacon for our hope." – A Fan
          </Typography>
          <Typography paragraph>
            Share your memories and messages using #RememberKendrick. Let’s keep his spirit alive through the stories
            and love we share.
          </Typography>
        </Box>
      </motion.div>
    </Container>
  );
};


export default Tribute;