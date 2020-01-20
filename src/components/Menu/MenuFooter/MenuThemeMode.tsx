import React, { Component } from 'react';
import {
    MenuFooterContainer,
    StyledThemeLabel,
    ThemeContainer,
} from './styles';

import { AppMode } from '../../App/constants';

interface MenuFooterProps {
    appMode: AppMode;
    menuOpen: boolean;
    toggleDarkMode(): void;
}

class MenuThemeMode extends Component<MenuFooterProps> {
    render () {
        const { appMode, menuOpen, toggleDarkMode } = this.props;
        const appModeLabel = appMode === AppMode.DARK ? 'Midnight' : 'Daylight';

        return (
            <MenuFooterContainer menuOpen={menuOpen}>
                <ThemeContainer>
                    <StyledThemeLabel
                        appMode={appMode}
                        onClick={toggleDarkMode}
                        appModeLabel={appModeLabel}
                    >
                    </StyledThemeLabel>
                </ThemeContainer>
            </MenuFooterContainer>
        )
    }
}

export default MenuThemeMode;
