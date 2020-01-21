import React, { Component } from 'react';

import {
    MenuContainer,
    StyledMenu,
    MenuContentContainer,
    StyledNav,
    HomeItem,
    MenuItem,
    StyledHover,
} from './styles';
import MenuFooter from './MenuFooter/MenuFooter';
import { AppMode } from '../App/constants';
import { Seasons } from '../../themes/seasons/seasons';
import { connect } from 'react-redux';
import { State } from '../../reducers/reducers';
import { updateCurrentPath } from '../../actions/page';
import { MenuItemInterface, menuItems } from '../../utils/constants/menuConstants';

interface MenuProps {
    appMode: AppMode;
    currentPath: string;
    currentSeason: Seasons;
    menuOpen: boolean;
    toggleMenu(): void;
    toggleDarkMode(): void;
    updateSeason(season: Seasons): void;
    updateCurrentPath(path: string): void;
}

export class Menu extends Component<MenuProps> {
    handleRedirect = (path: string) => {
        this.props.updateCurrentPath(path);
    };

    render() {
        const {
            appMode,
            currentSeason,
            menuOpen,
            toggleDarkMode,
            updateSeason,
        } = this.props;

        return (
            <MenuContainer menuOpen={menuOpen}>
                <StyledMenu menuOpen={menuOpen}>
                    <MenuContentContainer>
                        <StyledNav>
                            <HomeItem
                                to="/"
                                onClick={() => this.handleRedirect('/')}
                            >
                                Home
                            </HomeItem>

                            {menuItems.map((menuItem: MenuItemInterface, index: number) => {
                                const { path, title } = menuItem;
                                return (
                                    <MenuItem
                                        key={index}
                                        to={path}
                                        onClick={() => this.handleRedirect(path)}
                                    >
                                        <StyledHover>
                                            {title}
                                        </StyledHover>
                                    </MenuItem>
                                )
                            })}
                        </StyledNav>

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

const mapStateToProps = ({ page }: State) => ({
    currentPath: page.currentPath
});

const mapDispatchToProps = {
    updateCurrentPath,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
