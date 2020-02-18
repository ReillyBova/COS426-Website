// Library imports
import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import clsx from 'clsx';
// UI imports
import { makeStyles } from '@material-ui/core/styles';
import MuiButton from '@material-ui/core/Button';

// Styling to override font
const buttonStyles = makeStyles(() => ({
    button: {
        fontFamily: 'Roboto, Open Sans, Roboto, Helvetica, Arial, sans-serif',
    },
}));

// Gatsby Link wrapped in a material UI Button
const InternalButtonLink = React.forwardRef(function Link({className, ...props}, ref) {
    // CSS classes
    const { button } = buttonStyles();

    return (
        <MuiButton
            className={clsx(button, className)}
            component={GatsbyLink}
            ref={ref}
            {...props}
        />
    );
});

export default InternalButtonLink;
