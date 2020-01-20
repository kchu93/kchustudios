import React from 'react';
import styled, { css } from 'styled-components';
import { ThemeInterface } from '../../themes';

interface HeaderInterface {
    menuOpen: boolean;
}

export const StyledHeader = styled.div<HeaderInterface>`
    display: grid;
    grid-template-columns: 1fr 1fr;
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.background};
    width: 100%;
    box-sizing: border-box;
    position: fixed;
    grid-row: 1;
    transition: ${({ theme }) => `all ${theme.transitions.fadeAll}`};
    ${({menuOpen, theme}) => menuOpen && `z-index: ${theme.zIndex.fixed};`}
            
    ${({ theme }) => `
        ${theme.breakpoints.mobile} {
            padding: 1.5rem;
        }
        
        ${theme.breakpoints.tablet} {
            padding: 1.5rem 2.5rem;
        }
        
        ${theme.breakpoints.desktop} {
            padding: 2rem 3rem;
        }
    `}
`;
// LOGO STYLES
export const HeaderLogo = styled.div<HeaderInterface>`
    font-family: ${({ theme }) => theme.typography.fontFamily.sans};
    font-size: ${({ theme }) => theme.typography.fontSize.medium};
    color: ${({ theme }) => theme.colors.onBackground};
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    opacity: ${({ menuOpen }) => menuOpen ? '0' : '1'};
    visibility: ${({ menuOpen }) => menuOpen ? 'hidden' : 'visible'};
    transition: opacity 0.3s cubic-bezier(0.445,0.05,0.55,0.95) 0.35s,
        visibility 0.3s cubic-bezier(0.445,0.05,0.55,0.95) 0.35s;

    :hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;


// MENU OPTION STYLES
interface HamburgerInterface {
    menuOpen: boolean;
    toggleMenu?(): void;
}

const menuAnimationStyles = () => {
    return css`
        transition: transform 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95) 0s,
            color 0.35s cubic-bezier(0.445, 0.05, 0.55, 0.95) .35s,
            margin-top 0.35s cubic-bezier(0.445, 0.05, 0.55, 0.95) 0s,
            background-color 0.35s cubic-bezier(0.445, 0.05, 0.55, 0.95) .35s,
            width 0.35s cubic-bezier(0.445, 0.05, 0.55, 0.95) 0s;
    `
};

const afterStyles = (theme: ThemeInterface, menuOpen: boolean) => css`
    ::after {
        ${theme.breakpoints.mobile} {
            width: 2rem;
        }
            
        ${theme.breakpoints.tablet} {
            width: 2.25rem;
        }

        left: 0;
        content: "";
        margin-top: ${menuOpen ? '.25rem' : '3px'};
        position: absolute;
        height: 1px;
        border-radius: 4px;
        background-color: ${menuOpen ? theme.colors.primary : theme.colors.onBackground};
        transform: ${menuOpen ? 'translateY(-400%) rotate(45deg)' : 'none'};
        ${menuAnimationStyles()}
    }
`;

const beforeStyles = (theme: ThemeInterface, menuOpen: boolean) => css`
    ::before {
        ${theme.breakpoints.mobile} {
            width: 2rem;
        }
            
        ${theme.breakpoints.tablet} {
            width: 2.25rem;
        }

        left: 0;
        content: "";
        margin-top: ${menuOpen ? '-.25rem' : '-3px'};
        position: absolute;
        height: 1px;
        border-radius: 4px;
        background-color: ${menuOpen ? theme.colors.primary : theme.colors.onBackground};
        transform: ${menuOpen ? 'translateY(400%) rotate(-45deg)' : 'none'};
        ${menuAnimationStyles()}
    }
`;

export const HamburgerContainer = styled.div<HamburgerInterface>`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    text-transform: none;
    background-color: ${({ theme } ) => theme.colors.background};
    ${menuAnimationStyles()}

    :hover > ::after, :hover > ::before {
        background-color: ${({ theme, menuOpen } ) => menuOpen ? theme.colors.onBackground : theme.colors.primary};
    }
    
    :hover > div {
        color: ${({ theme, menuOpen } ) => menuOpen ? theme.colors.onBackground : theme.colors.primary};
    }
`;

export const HamburgerContent = styled.div<HamburgerInterface>`
    height: 1.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.typography.fontSize.xSmall};
    color: ${({ theme, menuOpen } ) => menuOpen ? theme.colors.primary : theme.colors.onBackground};
    ${menuAnimationStyles()}

    ${({ theme }) => `
        ${theme.breakpoints.mobile} {
            padding-left: 2.5rem;
            letter-spacing: ${theme.typography.letterSpacing.small};
        }
        
        ${theme.breakpoints.tablet} {
            padding-left: 2.75rem;
            letter-spacing: ${theme.typography.letterSpacing.medium};
        }
    `}

    ${({ theme, menuOpen }) => beforeStyles(theme, menuOpen)}
    ${({ theme, menuOpen }) => afterStyles(theme, menuOpen)}
`;

export const Hamburger = (props: HamburgerInterface) => (
    <HamburgerContainer menuOpen={props.menuOpen} onClick={props.toggleMenu}>
        <HamburgerContent menuOpen={props.menuOpen}>Menu</HamburgerContent>
    </HamburgerContainer>
);

