import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'gatsby';

const Header = ({ siteTitle }) => (
    <AppBar position="fixed">
        <Toolbar>
            <Typography variant="h4" color="inherit">
                <Link
                    to="/"
                    style={{
                        color: 'white',
                        textDecoration: 'none',
                    }}
                >
                    <span style={{ fontWeight: '800' }}>{"COS"}</span>
                    <span style={{ fontWeight: '400' }}>{"426"}</span>
                </Link>
            </Typography>
            <Button color="inherit">Login</Button>
        </Toolbar>
    </AppBar>
);

export default Header;
