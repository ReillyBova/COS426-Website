import { createContext } from 'react';

import { createTheme, responsiveFontSizes } from '@mui/material';

export const InvertThemeCallbackContext = createContext(() => {});

export const enum ThemeMode {
    Light = 'Light',
    Dark = 'Dark',
}

const TYPOGRAPHY = {
    fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
    fontWeightLight: 400,
    fontWeightRegular: 600,
    fontWeightMedium: 700,
    fontWeightBold: 800,
    body1: {
        fontWeight: 400,
    },
};

/** Princeton Light Theme */
export const LIGHT = responsiveFontSizes(
    createTheme({
        palette: {
            primary: {
                main: '#f58025',
            },
            secondary: {
                main: '#221e20',
            },
            background: {
                default: '#f2f2f2',
                paper: '#fff',
            },
            contrastThreshold: 2,
        },
        typography: TYPOGRAPHY,
    })
);

/** Princeton Dark Theme */
export const DARK = responsiveFontSizes(
    createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#f58025',
            },
            secondary: {
                main: '#221e20',
            },
            background: {
                default: '#292527',
                paper: '#312f31',
            },
            contrastThreshold: 2,
        },
        typography: TYPOGRAPHY,
    })
);

/** Harvard Crimson Theme (April Fools) */
export const HARVARD = responsiveFontSizes(
    createTheme({
        palette: {
            primary: {
                main: '#A51C30',
            },
            secondary: {
                main: '#293352',
            },
            background: {
                default: '#f2f2f2',
                paper: '#fff',
            },
            contrastThreshold: 2,
        },
        typography: TYPOGRAPHY,
    })
);

/** House of Nassau-Orange Based Theme (April Fools) */
const NASSAU = responsiveFontSizes(
    createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#f58025',
            },
            secondary: {
                main: '#1038b6',
            },
            background: {
                default: '#2b4b4d',
                paper: '#3da5a6',
            },
            contrastThreshold: 2,
        },
        typography: TYPOGRAPHY,
    })
);

export const THEMES = {
    LIGHT,
    DARK,
    HARVARD,
    NASSAU,
};
