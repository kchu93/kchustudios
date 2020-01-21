import { combineReducers } from 'redux';
import theme, { ThemeState } from './theme';
import page, { PageState } from './page';

export interface State {
    page: PageState;
    theme: ThemeState;
}

const reducers = combineReducers({
    page,
    theme,
});

export default reducers;
