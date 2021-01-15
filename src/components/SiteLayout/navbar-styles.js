// UI imports
import { makeStyles } from '@material-ui/core/styles';

// Styling for navbar elements
const navbarStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    appBar: {
        // Orange border
        borderStyle: 'solid',
        borderWidth: '0px 0px 4px 0px',
        borderColor: theme.palette.primary.main,
    },
    scrolling: {
        overflowX: 'overlay',
        fallbacks: {
            overflowX: 'auto',
        },
    },
    brandLogo: {
        margin: 3,
        height: 42,
    },
    brandLink: {
        color: 'white',
        textDecoration: 'none',
        maxHeight: 48,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        fontSize: 34,
    },
    navbarDropdownButton: {
        fontWeight: 600,
        '&:focus:not(:hover)': {
            // Override strange focus highlight
            backgroundColor: '#ffffff',
        },
        '&.active': {
            color: theme.palette.primary.main,
        },
    },
    navbarButton: {
        padding: '8px 24px',
        borderRadius: 0,
        fontSize: 16,
        height: 64,
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
        '&:hover:not(.active)': {
            backgroundColor: '#282828',
        },
    },
    menuButton: {
        [theme.breakpoints.up('md')]: {
            // Toggle display of mobile dropdown
            display: 'none',
        },
        '&:hover': {
            // Brighten the hover color
            backgroundColor: '#282828',
        },
    },
}));

export default navbarStyles;
