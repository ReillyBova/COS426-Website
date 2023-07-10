// Library imports
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import clsx from 'clsx';
// Project imports
import { isActive } from 'utils';
// UI imports
import Button from '@material-ui/core/Button';

// Button along the desktop navbar
function NavbarButton(props) {
    const { classes, to, exact, children } = props;
    const active = isActive(to || '/', exact);
    return (
        <Button
            component={Link}
            to={to || '/'}
            className={clsx(classes.navbarButton, active && 'active')}
            color={active ? 'primary' : 'inherit'}
        >
            {children}
        </Button>
    );
}

NavbarButton.propTypes = {
    classes: PropTypes.object, // CSS classes for styling
    exact: PropTypes.bool, // Should URL match exactly?
    to: PropTypes.string, // Target URL
};

export default NavbarButton;
