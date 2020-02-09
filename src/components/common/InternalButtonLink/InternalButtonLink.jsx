// Library imports
import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
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
const InternalButtonLink = React.forwardRef(function Link(props, ref) {
    // CSS classes
    const { button } = buttonStyles();

    return (
        <MuiButton
            className={button}
            component={GatsbyLink}
            ref={ref}
            {...props}
        />
    );
});

export default InternalButtonLink;
