// Library imports
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import clsx from 'clsx';
// Project imports
import { isActive } from 'utils';
// UI imports
import MenuItem from '@material-ui/core/MenuItem';

// Dropdown menu button for mobile navbar
const NavbarDropdownButton = forwardRef((props, ref) => {
    const { classes, onClick, to, exact, children } = props;
    const active = isActive(to || '/', exact);
    return (
        <MenuItem
            ref={ref}
            component={Link}
            to={to || '/'}
            onClick={onClick}
            className={clsx(classes.navbarDropdownButton, active && 'active')}
        >
            {children}
        </MenuItem>
    );
});

NavbarDropdownButton.propTypes = {
    classes: PropTypes.object, // CSS classes for styling
    exact: PropTypes.bool, // Should URL match exactly?
    to: PropTypes.string, // Target URL
    onClick: PropTypes.func, // Call back for click behavior
};

export default NavbarDropdownButton;
