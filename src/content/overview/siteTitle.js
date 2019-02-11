import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
    alignment: {
        position: "absolute",
        color: "white",
        height: "inherit",
        minHeight: "inherit",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        padding: theme.spacing.unit * 3,
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing.unit * 4
        },
    },
    header: {
        textShadow: "3px 4px 4px rgba(0,0,0,0.1)",
        fontWeight: 600,
        [theme.breakpoints.only('lg')]: {
            fontSize: "5rem"
        },
        [theme.breakpoints.only('md')]: {
            fontSize: "4rem"
        },
        [theme.breakpoints.only('sm')]: {
            fontSize: "3rem"
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "2rem"
        }
    },
    term: {
        textShadow: "3px 4px 4px rgba(0,0,0,0.1)",
        fontSize: "4.5rem",
        [theme.breakpoints.only('lg')]: {
            fontSize: "3.75rem"
        },
        [theme.breakpoints.only('md')]: {
            fontSize: "3rem"
        },
        [theme.breakpoints.only('sm')]: {
            fontSize: "2.25rem"
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "1.5rem"
        }
    }
});

function SiteTitle(props) {
    const { classes } = props;
    return (
    <div className={classes.alignment}>
        <Typography variant="h1" color="inherit" className={classes.header} gutterBottom>
            {"COS 426: Computer Graphics"}
        </Typography>
        <Typography variant="h2" color="inherit" className={classes.term}>
            {"Spring 2019"}
        </Typography>
    </div>
);
}

export default withStyles(styles)(SiteTitle);
