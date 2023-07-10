import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

// Princeton Light Theme
export const light_theme = responsiveFontSizes(
    createMuiTheme({
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
        typography: {
            fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
            fontWeightLight: 400,
            fontWeightRegular: 600,
            fontWeightMedium: 700,
            body1: {
                fontWeight: 400,
            },
        },
    })
);

// Princeton Dark Theme
export const dark_theme = responsiveFontSizes(
    createMuiTheme({
        palette: {
            type: 'dark',
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
        typography: {
            fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
            fontWeightLight: 400,
            fontWeightRegular: 600,
            fontWeightMedium: 700,
            body1: {
                fontWeight: 400,
            },
        },
    })
);

// Harvard Theme (April Fools)
export const harvard_theme = responsiveFontSizes(
    createMuiTheme({
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
        typography: {
            fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
            fontWeightLight: 400,
            fontWeightRegular: 600,
            fontWeightMedium: 700,
            body1: {
                fontWeight: 400,
            },
        },
    })
);

// Hause of Nassau-Orange Based Theme
export const nassauOrange_theme = responsiveFontSizes(
    createMuiTheme({
        palette: {
            type: 'dark',
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
        typography: {
            fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
            fontWeightLight: 400,
            fontWeightRegular: 600,
            fontWeightMedium: 700,
            body1: {
                fontWeight: 400,
            },
        },
    })
);
