import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../src/theme';

export default function TopLayout(props) {
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {props.children}
            </ThemeProvider>
        </React.Fragment>
    );
}

TopLayout.propTypes = {
    children: PropTypes.node,
};
