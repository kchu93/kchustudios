import React, { Component } from 'react';

import { StyledHeader, HeaderLogo , Hamburger} from './styles';
import { AppMode } from '../App/constants';

interface HeaderProps {
    appMode: AppMode;
    menuOpen: boolean;
    toggleDarkMode(): void;
    toggleMenu(): void;
}

export class Header extends Component<HeaderProps, {}> {
    render() {
        const { menuOpen, toggleMenu } = this.props;

        return (
            <StyledHeader>
                <Hamburger menuOpen={menuOpen} toggleMenu={toggleMenu}/>
                <HeaderLogo menuOpen={menuOpen}>KCHU STUDIOS</HeaderLogo>
            </StyledHeader>
        );
    }
}

export default Header;
