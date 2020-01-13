import React, { Component } from 'react';
import { StyledHeader } from './styles';

interface HeaderProps {
    toggleDarkMode(): void;
}

export class Header extends Component<HeaderProps, {}> {
  render() {
    return (
        <StyledHeader>
          I AM THE HEADER
        </StyledHeader>
    );
  }
}

export default Header;
