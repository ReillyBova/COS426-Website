import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
        '&:hover:not([aria-current="page"])': {
            backgroundColor: '#282828'
        }
    }
});

const isActive = (to, exact) => {
    if (exact && window.location.pathname === to) {
        return true;
    } else if (!exact && window.location.pathname.match(to)) {
        return true;
    }
    return false;
};

function NavbarButton(props) {
    const { classes, to, exact, children } = props;
    return (
        <Button
            size="large"
            component={Link}
            to={to || "/"}
            classes={{ root: classes.root }}
            color={isActive(to || "/", exact) ? "primary" : "inherit"}
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
