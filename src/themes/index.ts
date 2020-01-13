import { breakpoints, Breakpoints } from './breakpoints';
import { Colors, fetchColors } from './colors';
import { createTypography, Typography } from './typography';

import { AppMode } from 'src/components/App/constants';

export interface ThemeInterface {
    breakpoints: Breakpoints;
    colors: Colors;
    typography: Typography;
}

export const createTheme = (appMode: AppMode): ThemeInterface => {
    return {
        breakpoints: breakpoints,
        colors: fetchColors(appMode),
        typography: createTypography(),
    }
};
