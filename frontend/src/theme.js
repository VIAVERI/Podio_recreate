// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#40E0D0', // Turquoise
        },
        secondary: {
            main: '#800080', // Purple
        },
        background: {
            default: '#f5f5f5', // Light gray for sidebar background
        },
        text: {
            primary: '#0000FF', // Blue for links
            secondary: '#800080', // Purple for active links
        },
    },
    components: {
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: '#f5f5f5', // Light gray background
                },
            },
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    borderLeft: '4px solid transparent',
                    '&.Mui-selected': {
                        borderLeft: '4px solid #800080', // Purple left border when selected
                        backgroundColor: 'rgba(128, 0, 128, 0.15)', // Light purple background
                        color: '#800080', // Purple text
                        '&:hover': {
                            backgroundColor: 'rgba(128, 0, 128, 0.25)', // Darker purple on hover when selected
                        },
                    },
                    '&:hover': {
                        backgroundColor: 'rgba(0, 0, 255, 0.1)', // Light blue hover
                        color: '#800080', // Purple text on hover
                    },
                },
            },
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: 'inherit', // Inherit color from ListItemButton
                },
            },
        },
    },
    typography: {
        // Customize typography as needed
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
});

export default theme;
