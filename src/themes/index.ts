import { breakpoints, Breakpoints } from './breakpoints';
import { Colors, fetchColors } from './colors';
import { AppMode } from 'src/components/App/constants';

export interface ThemeInterface {
    breakpoints: Breakpoints;
    colors: Colors;
}

export const createTheme = (appMode: AppMode): ThemeInterface => {
    return {
        breakpoints: breakpoints,
        colors: fetchColors(appMode),
    }
};
