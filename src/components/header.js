import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'gatsby';

import { PrincetonShield } from 'images';

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    grow: {
        flexGrow: 1
    },
    appBar: {
        borderStyle: 'solid',
        borderWidth: '0px 0px 4px 0px',
        borderColor: theme.palette.primary.main
    },
    navButton: {
        borderRadius: 0,
        fontSize: 16,
        [theme.breakpoints.down('xs')]: {
            '@media (orientation: landscape)': {
                height: 48
            },
            '@media (orientation: portrait)': {
                height: 56
            }
        },
        [theme.breakpoints.up('sm')]: {
            height: 64
        }
    }
});

function Header(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
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
                                whiteSpace: 'nowrap'
                            }}
                        >
                            <span style={{ fontWeight: '800' }}>{'COS'}</span>
                            <span style={{ fontWeight: '400' }}>{' 426'}</span>
                        </Link>
                    </Typography>
                    <Button
                        size="large"
                        classes={{ root: classes.navButton }}
                        color="primary"
                    >
                        Syllabus
                    </Button>
                    <Button
                        size="large"
                        classes={{ root: classes.navButton }}
                        color="inherit"
                    >
                        Materials
                    </Button>
                    <Button
                        size="large"
                        classes={{ root: classes.navButton }}
                        color="inherit"
                    >
                        Assignments
                    </Button>
                    <Button
                        size="large"
                        classes={{ root: classes.navButton }}
                        color="inherit"
                    >
                        Exercises
                    </Button>
                    <Button
                        size="large"
                        classes={{ root: classes.navButton }}
                        color="inherit"
                    >
                        Gallery
                    </Button>
                    <Button
                        size="large"
                        classes={{ root: classes.navButton }}
                        color="inherit"
                    >
                        Links
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
