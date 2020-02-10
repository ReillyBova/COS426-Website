// Library imports
import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
// Project imports
import { PrincetonShield } from 'images';
import { urlify } from 'utils';
// Local imports
import { NavbarDropdownButton, NavbarButton } from './subcomponents';
// UI imports
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';

// A Navbar that sits above the web-app
function Navbar({ classes }) {
    // Query navbar settings from site configuration
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        navigation
                        homePage
                    }
                }
            }
        `
    );
    const { navigation, homePage } = site.siteMetadata;

    // Hook for toggling mobile menu dropdown
    const [dropdownAnchor, setDropdownAnchor] = useState(null);
    const isDropdownOpen = Boolean(dropdownAnchor);

    // Mobile menu popup handler
    const handleMenu = (event) => {
        setDropdownAnchor(event.currentTarget);
    };

    // Mobile menu popup handler
    const handleClose = () => {
        setDropdownAnchor(null);
    };

    // CSS classes for styling
    const { grow, appBar, brandLogo, brandLink, menuButton } = classes;

    // Render
    return (
        <header>
            <AppBar position='fixed' className={appBar} color='secondary'>
                <Toolbar component='nav'>
                    <Link to='/'>
                        <img src={PrincetonShield} className={brandLogo} />
                    </Link>
                    <Typography variant='h4' color='inherit' className={grow}>
                        <Link to='/' className={brandLink}>
                            <span style={{ fontWeight: '800' }}>{'COS'}</span>
                            <span style={{ fontWeight: '400' }}>{' 426'}</span>
                        </Link>
                    </Typography>
                    {navigation.map((pageName) => {
                        const isHomePage = pageName === homePage;
                        const targetURL = isHomePage
                            ? '/'
                            : `/${urlify(pageName)}`;
                        return (
                            <NavbarButton
                                to={targetURL}
                                exact={isHomePage}
                                key={pageName}
                                classes={classes}
                            >
                                {pageName}
                            </NavbarButton>
                        );
                    })}
                    <div>
                        <IconButton
                            aria-owns={
                                isDropdownOpen ? 'menu-appbar' : undefined
                            }
                            aria-haspopup='true'
                            className={menuButton}
                            onClick={handleMenu}
                            color='inherit'
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id='menu-appbar'
                            anchorEl={dropdownAnchor}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={isDropdownOpen}
                            onClose={handleClose}
                        >
                            {navigation.map((pageName) => {
                                const isHomePage = pageName === homePage;
                                const targetURL = isHomePage
                                    ? '/'
                                    : `/${urlify(pageName)}`;
                                return (
                                    <NavbarDropdownButton
                                        to={targetURL}
                                        exact={isHomePage}
                                        key={pageName}
                                        classes={classes}
                                    >
                                        {pageName}
                                    </NavbarDropdownButton>
                                );
                            })}
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </header>
    );
}

// Props
Navbar.propTypes = {
    classes: PropTypes.object, // CSS classes
};

export default Navbar;