// Libray imports
import React from 'react';
import PropTypes from 'prop-types';
// UI imports
import { makeStyles } from '@material-ui/core/styles';

// Custom styling for component
const contentStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1200,
        margin: 'auto',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(3),
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
        },
    },
}));

// Wraps the main content on the page
const Content = ({ children }) => {
    const classes = contentStyles();

    return <div className={classes.root}>{children}</div>;
};

Content.propTypes = {
    children: PropTypes.node,
};

export default Content;
