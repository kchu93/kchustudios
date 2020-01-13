import React, { Component } from 'react';

import { StyledHeader, HeaderLogo, ModeToggle } from './styles';
import { modeToggleIcon } from '../../icons/icons';

interface HeaderProps {
    toggleDarkMode(): void;
}

export class Header extends Component<HeaderProps, {}> {
  render() {
    return (
        <StyledHeader>
          <HeaderLogo>KCHU STUDIOS</HeaderLogo>
          <ModeToggle onClick={this.props.toggleDarkMode}>{modeToggleIcon}</ModeToggle>
        </StyledHeader>
    );
  }
}

export default Header;
