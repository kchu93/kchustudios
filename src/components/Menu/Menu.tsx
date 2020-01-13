import React, { Component } from 'react';

import {
    IconContainer,
    MenuContainer,
    MenuIcon,
    MenuItem,
    StyledMenu,
} from './styles';
import { menuItems } from '../../constants';
import { closeIcon } from "../../icons/icons";

interface MenuProps {
    hideMenu(): void;
}

export class Menu extends Component<MenuProps> {
    render() {
        return (
            <MenuContainer>
                <IconContainer>
                    <MenuIcon onClick={this.props.hideMenu}>{closeIcon}</MenuIcon>
                </IconContainer>
                <StyledMenu>
                    {menuItems.map(category => {
                        return (
                            <MenuItem>{category}</MenuItem>
                        )
                    })}
                </StyledMenu>
            </MenuContainer>
        )
    }
}

export default Menu;
