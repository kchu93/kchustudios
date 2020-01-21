import React, { Component } from 'react';
import { StyledApp } from './styles';
import Header from '../Header/Header';
import { ThemeProvider } from 'styled-components';
import { createTheme, ThemeInterface } from 'src/themes';
import {AppMode} from './constants';
import Menu from '../Menu/Menu';
import { Seasons } from '../../themes/seasons/seasons';
import Content from '../Content/Content';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Store } from 'redux';
import { State } from '../../reducers/reducers';
import { connect } from 'react-redux';

interface AppProps extends RouteComponentProps<{}>{
    store: Store<State>;
    appMode: AppMode;
    season: Seasons;
    currentPath: string;
}

interface AppState {
    appMode: AppMode;
    menuOpen: boolean;
    season: Seasons;
}

export class App extends Component<AppProps,AppState> {
    readonly state: AppState = {
        appMode: AppMode.DARK,
        menuOpen: false,
        season: Seasons.FALL,
    };

    componentDidMount() {
        const { appMode, season } = this.props;
        if (this.props) {
            this.setState({ appMode, season });
        }
        document.addEventListener('keydown', this._handleKeydown);
    }

    componentWillMount() {
        document.removeEventListener('keydown', this._handleKeydown);
    }

    componentDidUpdate(prevProps: AppProps) {
        const { currentPath } = this.props;
        const { currentPath: prevPath } = prevProps;

        if (currentPath !== prevPath) {
            this.setState({ menuOpen: false });
        }
    };

    _handleKeydown = (event: KeyboardEvent) => {
        const { menuOpen } = this.state;
        if (event.key === 'Escape' && menuOpen) {
            this.toggleMenu();
        }
    };

    updateSeason = (season: Seasons) => {
        this.setState({ season });
    };

    toggleDarkMode = () => {
        this.setState((state: AppState) => {
            if (state.appMode === AppMode.DARK) {
                return { appMode: AppMode.LIGHT };
            } else {
                return { appMode: AppMode.DARK };
            }
        })
    };

    toggleMenu = () => {
        this.setState((state: AppState) => ({ menuOpen: !state.menuOpen }))
    };

    render() {
        const { appMode, menuOpen, season } = this.state;
        const theme: ThemeInterface = createTheme(appMode, season);

        return (
            <ThemeProvider theme={theme}>
                <StyledApp>
                    <Menu
                        appMode={appMode}
                        toggleMenu={this.toggleMenu}
                        toggleDarkMode={this.toggleDarkMode}
                        menuOpen={menuOpen}
                        currentSeason={season}
                        updateSeason={this.updateSeason}
                    />
                    <Header
                        appMode={appMode}
                        menuOpen={menuOpen}
                        toggleDarkMode={this.toggleDarkMode}
                        toggleMenu={this.toggleMenu}
                    />
                    <Content menuOpen={menuOpen} path="/mood-board" />
                </StyledApp>
            </ThemeProvider>
        );
    }
}

export const mapStateToProps = ({ theme, page }: State) => ({
    appMode: theme.appMode,
    season: theme.season,
    currentPath: page.currentPath
});

export default withRouter(connect(mapStateToProps)(App));
