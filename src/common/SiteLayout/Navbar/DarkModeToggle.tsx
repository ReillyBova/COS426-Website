import { useContext } from 'react';

import { Brightness4, BrightnessHigh } from '@mui/icons-material';
import { IconButton, Tooltip, useTheme } from '@mui/material';

import { InvertThemeCallbackContext } from '../../../Theming/theme';
import { DateTimeUtils } from '../../../Utils/DateTimeUtils';

const styles = {
    '&:hover': {
        backgroundColor: '#FFFFFF10',
    },
};

export const DarkModeToggle = () => {
    const theme = useTheme();
    const toggleTheme = useContext(InvertThemeCallbackContext);

    const isLightThemeActive = theme.palette.mode === 'light';
    const isAprilFools = DateTimeUtils.isAprilFoolsDay();

    if (isLightThemeActive) {
        return (
            <Tooltip title={isAprilFools ? 'Toggle Nassau-Orange Mode' : 'Toggle Dark Mode'}>
                <IconButton onClick={toggleTheme} sx={styles} color='inherit'>
                    <Brightness4 />
                </IconButton>
            </Tooltip>
        );
    } else {
        return (
            <Tooltip title={isAprilFools ? 'Toggle Harvard Mode' : 'Toggle Light Mode'}>
                <IconButton onClick={toggleTheme} sx={styles} color='inherit'>
                    <BrightnessHigh />
                </IconButton>
            </Tooltip>
        );
    }
};
