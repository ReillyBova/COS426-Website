// Library imports
import React, { useContext } from 'react';
// Project imports
import { ToggleThemeContext } from 'theming';
import { isAprilFoolsDay } from 'utils';
// UI imports
import { useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';

// A Navbar that sits above the web-app
function DarkModeToggle({ className }) {
    const theme = useTheme();
    const toggleContext = useContext(ToggleThemeContext);

    const isLightThemeActive = theme.palette.type === 'light';
    const isAprilFools = isAprilFoolsDay();

    // Render
    if (isLightThemeActive) {
        return (
            <Tooltip title={isAprilFools? 'Toggle Nassau-Orange Mode' : 'Toggle Dark Mode'}>
                <IconButton
                    onClick={toggleContext}
                    className={className}
                    color='inherit'
                >
                    <Brightness4Icon />
                </IconButton>
            </Tooltip>
        );
    } else {
        return (
            <Tooltip title={isAprilFools? 'Toggle Harvard Mode' : 'Toggle Light Mode'}>
                <IconButton
                    onClick={toggleContext}
                    className={className}
                    color='inherit'
                >
                    <BrightnessHighIcon />
                </IconButton>
            </Tooltip>
        );
    }
}

export default DarkModeToggle;
