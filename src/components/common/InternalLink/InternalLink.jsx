// Library imports
import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
// UI imports
import MuiLink from '@material-ui/core/Link';

// Gatsby Link wrapped in a material UI link
const InternalLink = React.forwardRef(function Link(props, ref) {
    return <MuiLink component={GatsbyLink} ref={ref} {...props} />;
});

export default InternalLink;
