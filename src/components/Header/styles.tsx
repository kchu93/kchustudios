import React from 'react';
import styled from 'styled-components';

interface HeaderInterface {
    menuOpen: boolean;
}

export const StyledHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    color: ${({ theme }) => theme.colors.onBackground};
    background: ${({ theme }) => theme.colors.background};
    width: 100%;
    box-sizing: border-box;
    position: fixed;
    grid-area: 1;
    
    ${({ theme }) => `
        ${theme.breakpoints.mobile} {
            padding: 1.5rem;
        }
        
        ${theme.breakpoints.tablet} {
            padding: 1.5rem 2.5rem;
        }
        
        ${theme.breakpoints.desktop} {
            padding: 1.5rem 2.5rem;
        }
    `}
`;

export const HeaderLogo = styled.div<HeaderInterface>`
    font-size: ${({ theme }) => theme.typography.fontSize.medium};
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    opacity: ${({ menuOpen }) => menuOpen ? '0' : '1'};
    visibility: ${({ menuOpen }) => menuOpen ? 'hidden' : 'visible'};
    transition-delay: 0.35s;
    transition: all 0.35s cubic-bezier(0.445, 0.05, 0.55, 0.95) 0.35s;

    :hover {
        color: ${({ theme }) => theme.colors.secondary};
    }
`;

interface HamburgerInterface {
    menuOpen: boolean;
    toggleMenu?(): void;
}

export const HamburgerContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    text-transform: none;
    background-color: ${({ theme } ) => theme.colors.background};
    -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);

    :hover > ::after, :hover > ::before {
        background-color: ${({ theme }) => theme.colors.secondary};
    }
`;

export const HamburgerContent = styled.div<HamburgerInterface>`
    width: 3rem;
    height: 1.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    ::before {
        ${({ theme }) => `
            ${theme.breakpoints.mobile} {
                width: 2rem;
            }
            
            ${theme.breakpoints.tablet} {
                width: 2.5rem;
            }
        `}
        content: "";
        margin-top: -.25rem;
        position: absolute;
        height: 1px;
        border-radius: 4px;
        background-color: ${({ theme, menuOpen } ) => menuOpen ? theme.colors.onBackground : theme.colors.primary};
        transition: transform 0.35s cubic-bezier(0.445, 0.05, 0.55, 0.95) 0s;
        ${({ menuOpen }) => menuOpen && `transform: translateY(400%) rotate(-45deg);`}
    }
            
    ::after {
        ${({ theme }) => `
            ${theme.breakpoints.mobile} {
                width: 2rem;
            }
            
            ${theme.breakpoints.tablet} {
                width: 2.5rem;
            }
        `}
        content: "";
        margin-top: .25rem;
        position: absolute;
        height: 1px;
        border-radius: 4px;
        background-color: ${({ theme, menuOpen } ) => menuOpen ? theme.colors.onBackground : theme.colors.primary};
        transition: transform 0.35s cubic-bezier(0.445, 0.05, 0.55, 0.95) 0s;
        ${({ menuOpen }) => menuOpen && `transform: translateY(-400%) rotate(45deg);`}
    }
`;

export const Hamburger = (props: HamburgerInterface) => (
    <HamburgerContainer onClick={props.toggleMenu}>
        <HamburgerContent menuOpen={props.menuOpen}/>
    </HamburgerContainer>
);
