import React, { Component } from 'react';

import {
    MenuContainer,
    MenuItem,
    StyledMenu,
    StyledNav,
    MenuContentContainer,
    HomeItem,
} from './styles';
import MenuFooter from './MenuFooter/MenuFooter';

interface MenuProps {
    menuOpen: boolean;
    toggleMenu(): void;
}

export class Menu extends Component<MenuProps> {
    render() {
        const { menuOpen } = this.props;

        return (
            <MenuContainer menuOpen={menuOpen}>
                <StyledMenu menuOpen={menuOpen}>
                    <MenuContentContainer>
                        <StyledNav>
                            <HomeItem>Home</HomeItem>
                            <MenuItem>Photography</MenuItem>
                            <MenuItem>Mood Board</MenuItem>
                            <MenuItem>Audio</MenuItem>
                            <MenuItem>About</MenuItem>
                        </StyledNav>

                        <MenuFooter menuOpen={menuOpen}/>
                    </MenuContentContainer>
                </StyledMenu>
            </MenuContainer>
        )
    }
}

export default Menu;
