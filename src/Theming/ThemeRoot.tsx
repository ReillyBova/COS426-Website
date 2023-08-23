import { ReactNode, useCallback, useState } from 'react';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { DateTimeUtils } from '../Utils/DateTimeUtils';
import { WebUtils } from '../Utils/WebUtils';
import { InvertThemeCallbackContext, ThemeMode, THEMES } from './theme';

interface IProps {
    children: ReactNode;
}

const getActiveTheme = ({ themeMode, isAprilFools }: { themeMode: ThemeMode; isAprilFools: boolean }) => {
    if (isAprilFools) {
        return themeMode === ThemeMode.Light ? THEMES.HARVARD : THEMES.NASSAU;
    } else {
        return themeMode === ThemeMode.Light ? THEMES.LIGHT : THEMES.DARK;
    }
};

const getInitialThemePreference = (): ThemeMode => {
    /** Check for cached user preference */
    const preference = WebUtils.getLocalStorage<ThemeMode>('selected-theme');

    if (preference !== undefined) {
        return preference;
    } else {
        /** Set to dark mode from 8am to 8pm */
        const now = new Date();
        const currentHour = now.getHours();

        return currentHour < 8 || currentHour > 20 ? ThemeMode.Dark : ThemeMode.Light;
    }
};

export const ThemeRoot = ({ children }: IProps) => {
    const [themeMode, setThemeMode] = useState(getInitialThemePreference);
    const [isAprilFools] = useState(() => DateTimeUtils.isAprilFoolsDay());

    const toggleTheme = useCallback(() => {
        const newSetting = themeMode === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light;
        setThemeMode(newSetting);
        WebUtils.setLocalStorage('selected-theme', newSetting, 7);
    }, [themeMode]);

    const activeTheme = getActiveTheme({ themeMode, isAprilFools });

    return (
        <InvertThemeCallbackContext.Provider value={toggleTheme}>
            <ThemeProvider theme={activeTheme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </InvertThemeCallbackContext.Provider>
    );
};
