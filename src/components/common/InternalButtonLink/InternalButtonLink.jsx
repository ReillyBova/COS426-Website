// Library imports
import React, { forwardRef } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import MuiButton from '@material-ui/core/Button';

// Gatsby Link wrapped in a material UI Button
const InternalButtonLink = forwardRef(function Link({ ...props }, ref) {
    return <MuiButton component={GatsbyLink} ref={ref} {...props} />;
});

export default InternalButtonLink;
