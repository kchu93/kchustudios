import React, {FC, useEffect, useState} from 'react';
import { ThemeProvider } from 'styled-components';
import { createTheme, ThemeInterface } from '../../themes';
import { Seasons } from '../../themes/seasons/seasons';
import { AppMode } from './constants';
import { StyledApp } from './styles';
import Menu from '../Menu/Menu';
import Header from '../Header/Header';
import Content from '../Content/Content';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Store } from 'redux';
import { State } from '../../reducers/reducers';
import { usePrevious } from '../../hooks/usePrevious';

interface AppProps extends RouteComponentProps<{}>{
    store: Store<State>;
    appMode: AppMode;
    currentPath: string;
    season: Seasons;
}

interface AppState {
    appMode: AppMode;
    menuOpen: boolean;
    season: Seasons;
}

const InitialAppState: AppState = {
    menuOpen: false,
    season: Seasons.SPRING,
    appMode: AppMode.LIGHT,
};

export const App: FC<AppProps> = (props: AppProps) => {
    const [ state, setState ] = useState(InitialAppState);
    const { currentPath } = props;
    const prevPath = usePrevious(currentPath);
    const { menuOpen, season, appMode } = state;
    const theme: ThemeInterface = createTheme(appMode, season);

    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === 'Escape' && menuOpen) {
                toggleMenu();
            }
        }

        document.addEventListener('keydown', handleKeyDown);
        return () => { document.removeEventListener('keydown', handleKeyDown )}
    });

    useEffect(() => {
        if (prevPath !== currentPath) {
            setState((prevState: AppState) => ({
                ...prevState,
                menuOpen: false
            }))
        }
    }, [menuOpen, prevPath, currentPath]);

    function toggleMenu() {
        setState((prevState: AppState) => ({
            ...prevState,
            menuOpen: !menuOpen
        }))
    }

    function toggleSeason(season: Seasons) {
        setState((prevState: AppState) => ({
            ...prevState,
            season
        }))
    }

    function toggleAppMode() {
        const newAppMode = appMode === AppMode.LIGHT ? AppMode.DARK : AppMode.LIGHT;
        setState((prevState: AppState) => ({
            ...prevState,
            appMode: newAppMode
        }))
    }

    return (
        <ThemeProvider theme={theme}>
            <StyledApp>
                <Menu
                    appMode={appMode}
                    toggleMenu={toggleMenu}
                    toggleDarkMode={toggleAppMode}
                    menuOpen={menuOpen}
                    currentSeason={season}
                    updateSeason={toggleSeason}
                />
                <Header
                    appMode={appMode}
                    menuOpen={menuOpen}
                    toggleDarkMode={toggleAppMode}
                    toggleMenu={toggleMenu}
                />
                <Content menuOpen={menuOpen} path="/mood-board" />
            </StyledApp>
        </ThemeProvider>
    )
};

const mapStateToProps = ({ theme, page }: State) => ({
    appMode: theme.appMode,
    season: theme.season,
    currentPath: page.currentPath
});

export default withRouter(connect(mapStateToProps)(App));
