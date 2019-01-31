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
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  appBar: {
    borderStyle: "solid",
    borderWidth: "0px 0px 4px 0px",
    borderColor: theme.palette.primary.main
  }
});

function Header(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar} color="secondary">
                <Toolbar>
                <Link to="/">
                    <img src={PrincetonShield} style={{margin: "6px", height: "42px"}}/>
                </Link>
                    <Typography variant="h4" color="inherit" className={classes.grow}>
                        <Link
                            to="/"
                            style={{
                                color: 'white',
                                textDecoration: 'none',
                            }}
                            >
                            <span style={{ fontWeight: '800' }}>{"COS"}</span>
                            <span style={{ fontWeight: '400' }}>{" 426"}</span>
                        </Link>
                    </Typography>
                    <Button color="inherit">Syllabus</Button>
                    <Button color="inherit">Materials</Button>
                    <Button color="inherit">Assignments</Button>
                    <Button color="inherit">Gallery</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
