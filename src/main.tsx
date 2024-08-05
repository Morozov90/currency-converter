// base
import React from 'react';
import ReactDOM from 'react-dom/client';

// components
import App from './App';
// mui
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
// query
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './api';

const theme = createTheme();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </QueryClientProvider>
    </React.StrictMode>,
)
