import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

// Princeton Theme
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

// Princeton Theme
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
                default: '#2d292b',
                paper: '#434041',
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
