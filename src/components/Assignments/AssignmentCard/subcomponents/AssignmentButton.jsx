// Library imports
import React from 'react';
// Project imports
import { InternalButtonLink } from 'components';
import Button from '@material-ui/core/Button';

// A card preview of an assignment
function AssignmentButton({ to, href, available, children, ...props }) {
    if (to) {
        // Render as internal link if url is defined
        return (
            <InternalButtonLink disabled={!available} to={to} {...props}>
                {children}
            </InternalButtonLink>
        );
    } else {
        // Otherwise return as button
        return (
            <Button
                disabled={!(to || href) || !available}
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                {...props}
            >
                {children}
            </Button>
        );
    }
}

export default AssignmentButton;
