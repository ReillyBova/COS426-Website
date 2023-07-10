// Library imports
import React from 'react';

// A simple external link that opens in a new tab
function ExternalLink({ to, children }) {
    return (
        <a target='_blank' rel='noopener noreferrer' href={to}>
            {children}
        </a>
    );
}

export default ExternalLink;
