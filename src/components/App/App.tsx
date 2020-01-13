import React, { Component } from 'react';
import { StyledApp } from './styles';
import MoodBoard from '../MoodBoard/MoodBoard';
import Header from '../Header/Header';
import { ThemeProvider } from 'styled-components';
import { ThemeInterface, createTheme } from 'src/themes';
import { AppMode } from './constants';

interface AppState {
    appMode: AppMode;
}

export class App extends Component<{},AppState> {
    readonly state: AppState = {
      appMode: AppMode.DARK,
    }

    toggleDarkMode = () => {
      this.setState((prevState: AppState) => {
        if (prevState.appMode === AppMode.DARK) {
          return { appMode: AppMode.LIGHT };
        } else {
          return { appMode: AppMode.DARK };
        }
      })
    }

    render() {
      const theme: ThemeInterface = createTheme(this.state.appMode);

      return (
        <ThemeProvider theme={theme}>
          <StyledApp >
            <Header toggleDarkMode={this.toggleDarkMode}/>
            <MoodBoard />
          </StyledApp>
        </ThemeProvider>
      );
    }
}

export default App;
