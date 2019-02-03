import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { isActive } from 'utils';

const styles = theme => ({
    root: {
        borderRadius: 0,
        fontSize: 16,
        [theme.breakpoints.down('xs')]: {
            '@media (orientation: landscape)': {
                height: 48
            },
            '@media (orientation: portrait)': {
                height: 56
            }
        },
        [theme.breakpoints.up('sm')]: {
            height: 64
        },
        [theme.breakpoints.down('sm')]: {
            display: "none"
        },
        '&:hover:not(.active)': {
            backgroundColor: '#282828'
        }
    }
});

function NavbarButton(props) {
    const { classes, to, exact, children } = props;
    const active = isActive(to || "/", exact);
    return (
        <Button
            size="large"
            component={Link}
            to={to || "/"}
            className={(active) ? "active" : ""}
            classes={{ root: classes.root }}
            color={(active) ? "primary" : "inherit"}
        >
            { children }
        </Button>
    );
}

NavbarButton.propTypes = {
    classes: PropTypes.object.isRequired,
    to: PropTypes.string.isRequired
};

export default withStyles(styles)(NavbarButton);
