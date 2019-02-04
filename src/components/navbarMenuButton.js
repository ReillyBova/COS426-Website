import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';

import { isActive } from 'utils';

const styles = (theme) => ({
    root: {
        '&:focus:not(:hover)': {
            // Override strange focus highlight
            backgroundColor: '#ffffff',
        },
        '&.active': {
            color: theme.palette.primary.main,
        },
    },
});

function NavbarMenuButton(props) {
    const { classes, onClick, to, exact, children } = props;
    const active = isActive(to || '/', exact);
    return (
        <MenuItem
            component={Link}
            to={to || '/'}
            onClick={onClick}
            className={active ? 'active' : ''}
            classes={{ root: classes.root }}
        >
            {children}
        </MenuItem>
    );
}

NavbarMenuButton.propTypes = {
    classes: PropTypes.object.isRequired,
    to: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(NavbarMenuButton);
