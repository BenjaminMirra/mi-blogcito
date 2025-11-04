'use client';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';

import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2C3E50',
    },
    secondary: {
      main: '#FF9800'
    },
    background: {
      default: '#F7F9FC',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif', 
  },
});

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}

