// Library imports
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
// UI imports
import Grid from '@material-ui/core/Grid';
// Project imports
import { InternalLink } from 'components';
import { isActive, urlify } from 'utils';

// Lists major navigation pages in the footer
function FooterNavigation({ classes, sitePages, homePage }) {
    // CSS classes for styling
    const { footerNavLink } = classes;

    // Boolean to determine whether the current page is the home page (not in site skeleton)
    const isHomepageActive = isActive('/', true);

    // Links route to different page
    return (
        <Grid container item xs={12} justify='space-evenly' alignItems='center'>
            {sitePages.map((page, i) => {
                // Corner case for matching section
                if (page === homePage) {
                    return (
                        <InternalLink
                            key={'homepage'}
                            className={clsx(
                                footerNavLink,
                                isHomepageActive && 'active'
                            )}
                            to='/'
                        >
                            {homePage}
                        </InternalLink>
                    );
                }

                // Button for routing to different page
                const targetURL = `/${urlify(page)}`;
                return (
                    <InternalLink
                        className={clsx(
                            footerNavLink,
                            isActive(targetURL) && 'active'
                        )}
                        key={`${page}-${i}`}
                        to={`/${urlify(page)}`}
                    >
                        {page}
                    </InternalLink>
                );
            })}
        </Grid>
    );
}

// Proptypes
FooterNavigation.propTypes = {
    classes: PropTypes.object, // Styling classes
    sitePages: PropTypes.array, // List of site pages
    homePage: PropTypes.string, // Homepage URL
};

export default FooterNavigation;
