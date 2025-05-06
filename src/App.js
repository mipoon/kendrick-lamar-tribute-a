import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Hero from './components/Hero';
import Biography from './components/Biography';
import Discography from './components/Discography';
import Tribute from './components/Tribute';


// Create a dark theme for the app
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#fff',
    },
    background: {
      default: '#0a0a0a',
      paper: '#121212',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      letterSpacing: '2px',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ backgroundColor: theme.palette.background.default, minHeight: '100vh' }}>
        <Hero />
        <Biography />
        <Discography />
        <Tribute />
      </div>
    </ThemeProvider>
  );
}


export default App;