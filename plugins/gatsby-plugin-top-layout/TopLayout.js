import React, { Fragment, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
    ToggleThemeContext,
    light_theme,
    dark_theme,
    harvard_theme,
    nassauOrange_theme,
} from 'theming';
import { setLocalStorage, getLocalStorage, isAprilFoolsDay } from 'utils';

export default function TopLayout(props) {
    const [isLightTheme, setIsLightTheme] = useState(true);
    const [isAprilFools, setAprilFools] = useState(false);

    const toggleTheme = () => {
        const newSetting = !isLightTheme;
        setIsLightTheme(newSetting);
        setLocalStorage('selected-theme', newSetting, 12);
    };

    let activeTheme;
    if (isAprilFools) {
        activeTheme = isLightTheme ? harvard_theme : nassauOrange_theme;
    } else {
        activeTheme = isLightTheme ? light_theme : dark_theme;
    }

    useLayoutEffect(() => {
        // Check for user preference is saved
        const preference = getLocalStorage('selected-theme');

        if (preference !== null) {
            if (preference !== isLightTheme) {
                setIsLightTheme(preference);
            }
        } else {
            // Set to dark mode from 8am to 8pm
            const now = new Date();
            const currentHour = now.getHours();
            if (currentHour < 8 || currentHour > 20) {
                setIsLightTheme(false);
            }
        }

        // Check if it is april fools :P
        if (isAprilFoolsDay()) {
            setAprilFools(true);
        }
    }, []);

    return (
        <Fragment>
            <ToggleThemeContext.Provider value={toggleTheme}>
                <ThemeProvider theme={activeTheme}>
                    <CssBaseline />
                    {props.children}
                </ThemeProvider>
            </ToggleThemeContext.Provider>
        </Fragment>
    );
}

TopLayout.propTypes = {
    children: PropTypes.node,
};
