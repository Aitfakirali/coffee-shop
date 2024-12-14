import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: false; // removes the `xs` breakpoint
        sm: false;
        md: false;
        lg: false;
        xl: false;
        mobile: true; // adds the `mobile` breakpoint
        tablet: true;
        laptop: true;
        desktop: true;
    }
}

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
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 640,
            laptop: 1024,
            desktop: 1200,
        },
    },
    typography: {
        fontFamily: 'Arial, sans-serif',
    },
});
