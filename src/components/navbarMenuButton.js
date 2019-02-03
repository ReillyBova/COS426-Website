import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
    root: {
        '&:focus:not(:hover)': {
            // Override strange focus highlight
            backgroundColor: '#ffffff'
        },
        '&[aria-current="page"]': {
            color: theme.palette.primary.main
        }
    }
});

// Check if the link points to the current page
const isActive = (to, exact) => {
    if (exact && window.location.pathname === to) {
        return true;
    } else if (!exact && window.location.pathname.match(to)) {
        return true;
    }
    return false;
};

function NavbarMenuButton(props) {
    const { classes, onClick, to, exact, children } = props;
    const active = isActive(to || "/", exact);
    return (
        <MenuItem
            component={Link}
            to={to || "/"}
            onClick={onClick}
            classes={{ root: classes.root }}
        >
            { children }
        </MenuItem>
    );
}

NavbarMenuButton.propTypes = {
    classes: PropTypes.object.isRequired,
    to: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(NavbarMenuButton);
