import { AppMode } from '../components/App/constants';
import { DarkModeColors } from './modes/darkMode/darkMode';
import { LightModeColors } from './modes/lightMode/lightMode';

export interface Colors {
    background: string;
    surface: string;
    error: string;
    primary: string;
    primaryVariant: string;
    secondary: string;
    onPrimary: string;
    onSecondary: string;
    onBackground: string;
    onSurface: string;
    onError: string;
}

export const fetchColors = (mode: AppMode): Colors => {
    switch(mode) {
        case AppMode.DARK:
            return DarkModeColors;
        case AppMode.LIGHT:
            return LightModeColors;
        default:
            return DarkModeColors;
    }
}