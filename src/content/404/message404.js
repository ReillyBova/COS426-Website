import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
    alignment: {
        position: 'absolute',
        color: 'white',
        height: 'inherit',
        minHeight: 'inherit',
        width: '100%',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing.unit * 3,
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing.unit * 4,
        },
    },
    header: {
        textShadow: '3px 4px 4px rgba(0,0,0,0.1)',
        fontWeight: 700,
        marginBottom: '1rem',
        [theme.breakpoints.only('xl')]: {
            fontSize: '24rem',
        },
        [theme.breakpoints.only('lg')]: {
            fontSize: '20rem',
        },
        [theme.breakpoints.only('md')]: {
            fontSize: '16rem',
        },
        [theme.breakpoints.only('sm')]: {
            fontSize: '12rem',
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: '8rem',
        },
    },
    term: {
        textShadow: '3px 4px 4px rgba(0,0,0,0.1)',
        [theme.breakpoints.only('xl')]: {
            fontSize: '2.7rem',
        },
        [theme.breakpoints.only('lg')]: {
            fontSize: '2.25rem',
        },
        [theme.breakpoints.only('md')]: {
            fontSize: '1.8rem',
        },
        [theme.breakpoints.only('sm')]: {
            fontSize: '1.35rem',
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: '0.9rem',
        },
    },
});

function Message404(props) {
    const { classes } = props;
    return (
        <title className={classes.alignment}>
            <Typography
                variant="h1"
                color="inherit"
                className={classes.header}
            >
                {'404'}
            </Typography>
            <Typography variant="body1" color="inherit" className={classes.term}>
                {'The page you are looking for lies outside of the view '}
                <span style={{whiteSpace: 'nowrap'}}> {'frustrum :('} </span>
            </Typography>
        </title>
    );
}

export default withStyles(styles)(Message404);
