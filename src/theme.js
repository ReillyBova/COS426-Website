import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

// Princeton Theme
const theme = responsiveFontSizes(
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
            },
            contrastThreshold: 2,
        },
        typography: {
            fontFamily: 'Open Sans, Roboto, Helvetica, Arial, sans-serif',
            fontWeightLight: 400,
            fontWeightRegular: 600,
            fontWeightMedium: 700,
            body1: {
                fontWeight: 400,
            },
        },
    })
);

export default theme;
