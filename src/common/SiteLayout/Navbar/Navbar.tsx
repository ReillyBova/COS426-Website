import React, { useMemo, useState } from 'react';

import { Menu as MenuIcon } from '@mui/icons-material';
import {
    AppBar,
    Box,
    IconButton,
    Menu,
    styled,
    Theme,
    Toolbar,
    Tooltip,
    Typography,
    useMediaQuery,
} from '@mui/material';

import PrincetonShieldImage from '../../../../assets/princeton_shield.svg?url';
import { COURSE_CONFIG } from '../../../COURSE_CONFIG';
import { WebUtils } from '../../../Utils/WebUtils';
import { InternalLink } from '../../Routing/InternalLink';
import { DarkModeToggle } from './DarkModeToggle';
import { NavbarButton } from './NavbarButton';
import { NavbarDropdownButton } from './NavbarDropdownButton';

const PrincetonShield = styled('img')({ margin: 3 });

export const Navbar = React.memo(() => {
    const { navigation, homePage } = COURSE_CONFIG;

    const isDesktopView = useMediaQuery<Theme>((theme) => theme.breakpoints.up('md'));

    /** Hook for toggling mobile menu dropdown */
    const [dropdownAnchor, setDropdownAnchor] = useState<Element>();
    const isDropdownOpen = !!dropdownAnchor;

    /** Mobile menu popup handler */
    const handleMenu = (event: React.MouseEvent) => {
        setDropdownAnchor(event.currentTarget);
    };

    /** Mobile menu popup handler */
    const handleClose = () => {
        setDropdownAnchor(undefined);
    };

    const desktopNavigationButtons = useMemo(
        () =>
            navigation.map((pageName) => {
                const isHomePage = pageName === homePage;
                const targetURL = isHomePage ? '/' : `/${WebUtils.makeURL(pageName)}`;

                return (
                    <NavbarButton to={targetURL} exact={isHomePage} key={pageName}>
                        {pageName}
                    </NavbarButton>
                );
            }),
        [navigation, homePage]
    );

    const mobileNavigationButtons = useMemo(
        () =>
            navigation.map((pageName) => {
                const isHomePage = pageName === homePage;
                const targetURL = isHomePage ? '/' : `/${WebUtils.makeURL(pageName)}`;

                return (
                    <NavbarDropdownButton to={targetURL} exact={isHomePage} key={pageName} onClick={handleClose}>
                        {pageName}
                    </NavbarDropdownButton>
                );
            }),
        [navigation, homePage]
    );

    return (
        <AppBar
            position='static'
            sx={{
                borderBottom: 4,
                borderColor: 'primary.main',
                backgroundImage: 'none',
                backgroundColor: 'secondary.main',
            }}
        >
            <Toolbar component='nav' sx={{ overflowX: 'auto' }}>
                <Box
                    role='group'
                    flex='1'
                    display='flex'
                    sx={{ marginRight: 1.5, textDecoration: 'none' }}
                    alignItems='center'
                    component={InternalLink}
                    to='/'
                >
                    <PrincetonShield alt='Princeton University Logo' src={PrincetonShieldImage} height={42} />
                    <Typography
                        variant='h4'
                        color='white'
                        sx={{
                            maxHeight: 48,
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <Box component='span' fontWeight='800' fontSize='34px'>
                            {'COS'}
                        </Box>
                        <Box component='span' fontWeight='400' fontSize='34px'>
                            {' 426'}
                        </Box>
                    </Typography>
                </Box>
                {isDesktopView && desktopNavigationButtons}
                <DarkModeToggle />
                {!isDesktopView && (
                    <Box>
                        <Tooltip title='Menu'>
                            <IconButton
                                aria-owns={isDropdownOpen ? 'menu-appbar' : undefined}
                                aria-haspopup='true'
                                sx={{
                                    '&:hover': {
                                        backgroundColor: '#FFFFFF10',
                                    },
                                }}
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
                        >
                            {mobileNavigationButtons}
                        </Menu>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
});
