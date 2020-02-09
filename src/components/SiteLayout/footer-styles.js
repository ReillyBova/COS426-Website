// UI imports
import { makeStyles } from '@material-ui/core/styles';

// Styling for navbar elements
const footerStyles = makeStyles((theme) => ({
    // Wrapper around footer box
    footerWrapper: {
        // Allocate space in UI
        width: '100%',
        flex: 'initial',

        // Positioning
        position: 'relative',
        zIndex: 1,

        // Spacing
        paddingTop: theme.spacing(2),
        paddingRight: theme.spacing(4),
        paddingBottom: theme.spacing(2),
        paddingLeft: theme.spacing(4),
        [theme.breakpoints.down('xs')]: {
            paddingTop: theme.spacing(1),
            paddingRight: theme.spacing(2),
            paddingBottom: theme.spacing(1),
            paddingLeft: theme.spacing(2),
        },
        // Color background
        backgroundColor: theme.palette.secondary.main,
        borderTop: `4px solid ${theme.palette.primary.main}`,
    },
    // White-on-black divider
    dividerStyle: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    // Links to pages throughout site; mocks <a> styling
    footerNavLink: {
        padding: theme.spacing(0.5),
        fontSize: '18px !important',
        [theme.breakpoints.down('sm')]: {
            fontSize: '15px !important',
            [theme.breakpoints.down('xs')]: {
                fontSize: '12px !important',
            },
        },

        // Coloring
        color: `${theme.palette.primary.main} !important`,
        '&:not(.active):not(:hover)': {
            color: 'white !important',
        },

        // Additional hover behaviors
        '&:hover': {
            cursor: 'pointer',
            textDecoration: 'underline',
        },
    },
    // Brand signatures at bottom of footer
    brandSignature: {
        height: 50,
        [theme.breakpoints.down('sm')]: {
            height: 40,
        },
    },
    // Copyright and privacy info at the bottom of the footer
    legalese: {
        // Text styling
        color: 'white',
        fontSize: 12,
        textAlign: 'right',

        // Spacing
        margin: theme.spacing(1),

        // Display
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',

        // Centering in small mode
        [theme.breakpoints.down('xs')]: {
            // Sizing
            width: '100%',

            // Text styling
            textAlign: 'center',

            // Alignment
            alignItems: 'center',
        },

        // Link styling overrides
        '& a:hover': {
            textDecoration: 'underline',
        },
        '& a:not(:hover)': {
            color: 'white !important',
        },
    },
    signatures: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'center',
        },
    },
}));

export default footerStyles;
