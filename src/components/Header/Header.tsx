import React, { Component } from 'react';

import { StyledHeader, HeaderLogo, HeaderIcon, MenuContainer } from './styles';
import { fetchModeIcon, menuIcon } from '../../icons/icons';
import { AppMode } from '../App/constants';

interface HeaderProps {
    appMode: AppMode;
    toggleDarkMode(): void;
    showMenu(): void;
}

export class Header extends Component<HeaderProps, {}> {
    render() {
        const modeIcon = fetchModeIcon(this.props.appMode);

        return (
            <StyledHeader>
                <HeaderLogo>KCHU STUDIOS</HeaderLogo>

                <MenuContainer>
                    <HeaderIcon onClick={this.props.toggleDarkMode}>{modeIcon}</HeaderIcon>
                    <HeaderIcon onClick={this.props.showMenu}>{menuIcon}</HeaderIcon>
                </MenuContainer>
            </StyledHeader>
        );
    }
}

export default Header;
