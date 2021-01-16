// Library imports
import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import MuiButton from '@material-ui/core/Button';

// Gatsby Link wrapped in a material UI Button
const InternalButtonLink = React.forwardRef(function Link({ ...props }, ref) {
    return <MuiButton component={GatsbyLink} ref={ref} {...props} />;
});

export default InternalButtonLink;
