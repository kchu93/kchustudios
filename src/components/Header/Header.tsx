import React, { FC } from 'react';

import { StyledHeader, HeaderLogo, Hamburger } from './styles';
import { AppMode } from '../App/constants';

interface HeaderProps {
    appMode: AppMode;
    menuOpen: boolean;
    toggleDarkMode(): void;
    toggleMenu(): void;
}

const Header: FC<HeaderProps> = (props) => {
    const { menuOpen, toggleMenu } = props;
    return (
        <StyledHeader menuOpen={menuOpen}>
            <Hamburger menuOpen={menuOpen} toggleMenu={toggleMenu} />
            <HeaderLogo menuOpen={menuOpen}>KCHU STUDIOS</HeaderLogo>
        </StyledHeader>
    )
};

export default Header;
