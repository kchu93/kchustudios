import React, { Component } from 'react';

import {
    MenuContainer,
    StyledMenu,
    MenuContentContainer,
    NavigationMenu,
} from './styles';
import MenuFooter from './MenuFooter/MenuFooter';
import { AppMode } from '../App/constants';
import { menuItems } from '../../utils/constants/menuConstants';
import { Seasons } from '../../themes/seasons/seasons';

interface MenuProps {
    appMode: AppMode;
    currentSeason: Seasons;
    menuOpen: boolean;
    toggleMenu(): void;
    toggleDarkMode(): void;
    updateSeason(season: Seasons): void;
}

export class Menu extends Component<MenuProps> {
    render() {
        const { appMode, currentSeason, menuOpen, toggleDarkMode, updateSeason } = this.props;

        return (
            <MenuContainer menuOpen={menuOpen}>
                <StyledMenu menuOpen={menuOpen}>
                    <MenuContentContainer>
                        {NavigationMenu(menuItems)}

                        <MenuFooter
                            appMode={appMode}
                            menuOpen={menuOpen}
                            currentSeason={currentSeason}
                            updateSeason={updateSeason}
                            toggleDarkMode={toggleDarkMode}
                        />
                    </MenuContentContainer>
                </StyledMenu>
            </MenuContainer>
        )
    }
}

export default Menu;
