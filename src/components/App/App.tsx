import React, { Component } from 'react';
import { StyledApp } from './styles';
import MoodBoard from '../MoodBoard/MoodBoard';
import Header from '../Header/Header';
import { ThemeProvider } from 'styled-components';
import { ThemeInterface, createTheme } from 'src/themes';
import { AppMode } from './constants';
import { moodBoardImages } from '../../constants';
import Menu from '../Menu/Menu';

interface AppState {
    appMode: AppMode;
    menuOpen: boolean;
}

export class App extends Component<{},AppState> {
    readonly state: AppState = {
        appMode: AppMode.DARK,
        menuOpen: false,
    };

    componentDidMount() {
        console.log('hello world');
        document.addEventListener('keydown', this._handleKeydown);
    }

    componentWillMount() {
        document.removeEventListener('keydown', this._handleKeydown);
    }

    _handleKeydown = (event: KeyboardEvent) => {
        const { menuOpen } = this.state;
        if (event.key === 'Escape' && menuOpen) {
            this.toggleMenu();
        }
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
        const { appMode, menuOpen } = this.state;
        const theme: ThemeInterface = createTheme(appMode);

        return (
            <ThemeProvider theme={theme}>
                <StyledApp>
                    <Menu toggleMenu={this.toggleMenu} menuOpen={menuOpen}/>
                    <Header
                        appMode={appMode}
                        menuOpen={menuOpen}
                        toggleDarkMode={this.toggleDarkMode}
                        toggleMenu={this.toggleMenu}
                    />
                    <MoodBoard images={moodBoardImages}/>
                </StyledApp>
            </ThemeProvider>
        );
    }
}

export default App;
