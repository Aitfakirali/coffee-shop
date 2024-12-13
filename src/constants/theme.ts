import { createTheme } from '@mui/material/styles';

// A custom theme for this app
export const theme = createTheme({
    cssVariables: true,
    palette: {
        primary: {
            main: '#2E8B57',
        },
        secondary: {
            main: '#FFF5E1',
        },
        error: {
            main: '#FF5151',
            dark: '#8B0000',
        },
        warning: {
            main: '#FFD700',
        },
        success: {
            main: '#90EE90',
            dark: '#AFF4C9',
        },
    },
    typography: {
        fontFamily: 'Arial, sans-serif',
    },
});
