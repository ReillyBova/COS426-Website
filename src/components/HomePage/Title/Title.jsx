// Library imports
import React from 'react';
import PropTypes from 'prop-types';
// UI imports
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// CSS styling for component
const titleStyles = makeStyles((theme) => ({
    alignment: {
        position: 'absolute',
        color: 'white',
        height: 'inherit',
        minHeight: 'inherit',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(4),
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(4),
        },
    },
    header: {
        lineHeight: 1,
        textShadow: '3px 4px 4px rgba(0,0,0,0.1)',
        fontWeight: 600,
        [theme.breakpoints.only('xl')]: {
            fontSize: '6rem',
        },
        [theme.breakpoints.only('lg')]: {
            fontSize: '5rem',
        },
        [theme.breakpoints.only('md')]: {
            fontSize: '4rem',
        },
        [theme.breakpoints.only('sm')]: {
            fontSize: '3rem',
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: '2rem',
        },
    },
    term: {
        lineHeight: 1,
        textShadow: '3px 4px 4px rgba(0,0,0,0.1)',
        [theme.breakpoints.only('xl')]: {
            fontSize: '4.5rem',
        },
        [theme.breakpoints.only('lg')]: {
            fontSize: '3.75rem',
        },
        [theme.breakpoints.only('md')]: {
            fontSize: '3rem',
        },
        [theme.breakpoints.only('sm')]: {
            fontSize: '2.25rem',
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: '1.5rem',
        },
    },
}));

function Title({ semester }) {
    const classes = titleStyles();
    return (
        <title className={classes.alignment}>
            <Typography
                variant='h1'
                color='inherit'
                className={classes.header}
                gutterBottom
            >
                {'COS 426: Computer Graphics'}
            </Typography>
            <Typography variant='h2' color='inherit' className={classes.term}>
                {`Spring ${semester}`}
            </Typography>
        </title>
    );
}

Title.propTypes = {
    semester: PropTypes.number, // Page title (prefix)
};

export default Title;
