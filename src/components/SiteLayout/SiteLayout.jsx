// Library imports
import React from 'react';
import PropTypes from 'prop-types';
// Project imports
import { Navbar, Footer } from 'components'; // Local imports
import navbarStyles from './navbar-styles';
import footerStyles from './footer-styles';
// UI imports
import { makeStyles } from '@material-ui/core/styles';

// Custom styles for site layout
const siteLayoutStyles = makeStyles(() => ({
    layout: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    grow: {
        flexGrow: 1,
    },
}));

/*
 * A wrapper that allows the navbar and footer to persist above and below the
 * page through navigation/routing changes.
 */
function SiteLayout({ children }) {
    /*
     * Issue with ServerStyleSheets, SSR, and hydration causes class conflicts.
     * Thus, need to evaluate top level styles before the rest of the app.
     */
    const navbarClasses = navbarStyles();
    const siteStyles = siteLayoutStyles();
    const footerClasses = footerStyles();

    // Render
    return (
        <div className={siteStyles.layout}>
            <Navbar classes={navbarClasses} />
            <div className={siteStyles.grow}>{children}</div>
            <Footer classes={footerClasses} />
        </div>
    );
}

SiteLayout.propTypes = {
    children: PropTypes.node, // The rest of the web-page
};

export default SiteLayout;
