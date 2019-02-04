import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { NavbarButton, NavbarMenuButton } from 'components';
import { PrincetonShield } from 'images';

const styles = (theme) => ({
    grow: {
        flexGrow: 1,
    },
    appBar: {
        // Orange border
        borderStyle: 'solid',
        borderWidth: '0px 0px 4px 0px',
        borderColor: theme.palette.primary.main,
    },
    navButton: {
        // Tab-like buttons that resize with navbar
        borderRadius: 0,
        fontSize: 16,
        [theme.breakpoints.down('xs')]: {
            '@media (orientation: landscape)': {
                height: 48,
            },
            '@media (orientation: portrait)': {
                height: 56,
            },
        },
        [theme.breakpoints.up('sm')]: {
            height: 64,
        },
    },
    menuButton: {
        [theme.breakpoints.up('md')]: {
            // Toggle display of mobile dropdown
            display: 'none',
        },
        '&:hover': {
            // Brighten the hover color
            backgroundColor: '#282828',
        },
    },
});

class Header extends React.Component {
    constructor(props) {
        super(props);

        // Anchor for mobile menu
        this.state = {
            anchorEl: null,
        };
        this.handleMenu = this.handleMenu.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    // Mobile menu popup handler
    handleMenu(event) {
        this.setState({ anchorEl: event.currentTarget });
    }

    // Mobile menu popup handler
    handleClose() {
        this.setState({ anchorEl: null });
    }

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div className={classes.grow}>
                <AppBar
                    position="fixed"
                    className={classes.appBar}
                    color="secondary"
                >
                    <Toolbar>
                        <Link to="/">
                            <img
                                src={PrincetonShield}
                                style={{ margin: '3px', height: '42px' }}
                            />
                        </Link>
                        <Typography
                            variant="h4"
                            color="inherit"
                            className={classes.grow}
                        >
                            <Link
                                to="/"
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                    maxHeight: 48,
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                <span style={{ fontWeight: '800' }}>
                                    {'COS'}
                                </span>
                                <span style={{ fontWeight: '400' }}>
                                    {' 426'}
                                </span>
                            </Link>
                        </Typography>
                        <NavbarButton to="/" exact={true}>
                            {'Syllabus'}
                        </NavbarButton>
                        <NavbarButton to="/materials">
                            {'Materials'}
                        </NavbarButton>
                        <NavbarButton to="/assignments">
                            {'Assignments'}
                        </NavbarButton>
                        <NavbarButton to="/exercises">
                            {'Exercises'}
                        </NavbarButton>
                        <NavbarButton to="/gallery">{'Gallery'}</NavbarButton>
                        <NavbarButton to="/links">{'Links'}</NavbarButton>
                        <div>
                            <IconButton
                                aria-owns={open ? 'menu-appbar' : undefined}
                                aria-haspopup="true"
                                className={classes.menuButton}
                                onClick={this.handleMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={this.handleClose}
                            >
                                <NavbarMenuButton
                                    to="/"
                                    exact={true}
                                    onClick={this.handleClose}
                                >
                                    {'Syllabus'}
                                </NavbarMenuButton>
                                <NavbarMenuButton
                                    to="/materials"
                                    onClick={this.handleClose}
                                >
                                    {'Materials'}
                                </NavbarMenuButton>
                                <NavbarMenuButton
                                    to="/assignments"
                                    onClick={this.handleClose}
                                >
                                    {'Assignments'}
                                </NavbarMenuButton>
                                <NavbarMenuButton
                                    to="/exercises"
                                    onClick={this.handleClose}
                                >
                                    {'Exercises'}
                                </NavbarMenuButton>
                                <NavbarMenuButton
                                    to="/gallery"
                                    onClick={this.handleClose}
                                >
                                    {'Gallery'}
                                </NavbarMenuButton>
                                <NavbarMenuButton
                                    to="/links"
                                    onClick={this.handleClose}
                                >
                                    {'Links'}
                                </NavbarMenuButton>
                            </Menu>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
