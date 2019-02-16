import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    root: {
        padding: theme.spacing.unit * 3,
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing.unit * 4,
        },
    },
});

const Page = ({ children, classes }) => (
    <main className={classes.root}>{children}</main>
);

Page.propTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Page);
