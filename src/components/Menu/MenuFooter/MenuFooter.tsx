import React, { Component } from 'react'
import {
    MenuFooterContainer,
    ContentContainer,
} from './styles';

import { AppMode } from '../../App/constants';
import MenuSeasons from './MenuSeasons';
import MenuThemeMode from "./MenuThemeMode";
import { Seasons } from '../../../themes/seasons/seasons';

interface MenuFooterProps {
    appMode: AppMode;
    menuOpen: boolean;
    currentSeason: Seasons;
    toggleDarkMode(): void;
    updateSeason(season: Seasons): void;
}

export class MenuFooter extends Component<MenuFooterProps> {
    render() {
        const { appMode, currentSeason, menuOpen, toggleDarkMode, updateSeason } = this.props;

        return (
            <MenuFooterContainer menuOpen={menuOpen}>
                <ContentContainer menuOpen={menuOpen}>
                    <MenuSeasons
                        currentSeason={currentSeason}
                        updateSeason={updateSeason}
                        menuOpen={menuOpen}
                    />
                    <MenuThemeMode
                        appMode={appMode}
                        menuOpen={menuOpen}
                        toggleDarkMode={toggleDarkMode}
                    />
                </ContentContainer>
            </MenuFooterContainer>
        )
    }
}

export default MenuFooter;
