import { AppMode } from '../components/App/constants';
import { Seasons } from '../themes/seasons/seasons';
import { Action } from '../actions/action';
import {ThemeActionTypes} from '../actions/theme';

export interface ThemeState {
    appMode: AppMode;
    season: Seasons;
}

const getCurrentAppMode = (): AppMode => {
    const time = new Date();
    const hours = time.getHours();
    if (hours >= 6 && hours < 18) {
        return AppMode.LIGHT;
    } else {
        return AppMode.DARK;
    }
};

const ThemeInitialState = {
    appMode: getCurrentAppMode(),
    season: Seasons.FALL
};

function theme(state: ThemeState = ThemeInitialState, action: Action): ThemeState {
    if (action.error) {
        return state;
    }

    switch(action.type) {
        case ThemeActionTypes.UPDATE_APP_MODE: {
            return { ...state };
        }
        case ThemeActionTypes.UPDATE_SEASON: {
            return { ...state };
        }
        default:
            return state;
    }
}

export default theme;
