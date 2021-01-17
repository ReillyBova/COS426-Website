// Library imports
import React, {forwardRef} from 'react';
import { Link as GatsbyLink } from 'gatsby';
import CardActionArea from '@material-ui/core/CardActionArea';

// Gatsby Link wrapped in a material UI Button
const InternalCardActionArea = forwardRef(function Link(
    { ...props },
    ref
) {
    return <CardActionArea component={GatsbyLink} ref={ref} {...props} />;
});

export default InternalCardActionArea;
