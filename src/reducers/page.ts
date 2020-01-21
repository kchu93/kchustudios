import { Action } from '../actions/action';
import  {PageActionTypes } from '../actions/page';

export interface PageState {
    currentPath: string;
}

const ThemeInitialState = {
    currentPath: '/'
};

function page(state: PageState = ThemeInitialState, action: Action): PageState {
    if (action.error) {
        return state;
    }

    switch(action.type) {
        case PageActionTypes.UPDATE_CURRENT_PATH: {
            const currentPath = { ...action.payload} ;
            return {
                ...state,
                currentPath
            };
        }

        default:
            return state;
    }
}

export default page;
