// Library imports
import { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
// Project imports
import { PrincetonShield } from 'images';
import { urlify } from 'utils';
// Local imports
import { NavbarDropdownButton, NavbarButton, DarkModeToggle } from './subcomponents';
// UI imports
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
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
    const { courseWrapper, appBar, scrolling, brandLogo, brandLink, menuButton, darkModeButton, mobileMenu } = classes;

    // Render
    return (
        <header>
            <AppBar position='fixed' className={appBar} color='secondary'>
                <Toolbar component='nav' className={scrolling}>
                    <Link to='/'>
                        <img alt='Home' src={PrincetonShield} className={brandLogo} />
                    </Link>
                    <Typography variant='h4' color='inherit' className={courseWrapper}>
                        <Link to='/' className={brandLink}>
                            <span style={{ fontWeight: '800' }}>{'COS'}</span>
                            <span style={{ fontWeight: '400' }}>{' 426'}</span>
                        </Link>
                    </Typography>
                    {navigation.map((pageName) => {
                        const isHomePage = pageName === homePage;
                        const targetURL = isHomePage ? '/' : `/${urlify(pageName)}`;
                        return (
                            <NavbarButton to={targetURL} exact={isHomePage} key={pageName} classes={classes}>
                                {pageName}
                            </NavbarButton>
                        );
                    })}
                    <DarkModeToggle className={darkModeButton} />
                    <div>
                        <Tooltip title='Menu'>
                            <IconButton
                                aria-owns={isDropdownOpen ? 'menu-appbar' : undefined}
                                aria-haspopup='true'
                                className={menuButton}
                                onClick={handleMenu}
                                color='inherit'
                            >
                                <MenuIcon />
                            </IconButton>
                        </Tooltip>
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
                            disableScrollLock
                            className={mobileMenu}
                        >
                            {navigation.map((pageName) => {
                                const isHomePage = pageName === homePage;
                                const targetURL = isHomePage ? '/' : `/${urlify(pageName)}`;
                                return (
                                    <NavbarDropdownButton
                                        to={targetURL}
                                        exact={isHomePage}
                                        key={pageName}
                                        classes={classes}
                                        onClick={handleClose}
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
