import styled from 'styled-components';
import React from 'react';
import { MenuItemInterface } from '../../utils/constants/menuConstants';
import { Link } from 'react-router-dom';

interface MenuContainerProps {
    menuOpen: boolean;
}

export const MenuContainer = styled.div<MenuContainerProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    opacity: ${({ menuOpen }) => menuOpen ? '1' : '0'};
    height: 100%;
    width: 100%;
    color: ${({ theme }) => theme.colors.onBackground};
    background: ${({ theme }) => theme.colors.surface};
    transition: all 0.35s cubic-bezier(0.445, 0.05, 0.55, 0.95) 0.35s;
    ${({ menuOpen, theme }) => menuOpen && `z-index: ${theme.zIndex.sticky};`}
`;

export const StyledMenu = styled.div<MenuContainerProps>`
    display: table;
    width: 100%;
    height: 100%;
    opacity: ${({ menuOpen }) => menuOpen ? '1' : '0'};
    transform: ${({ menuOpen }) => menuOpen ? 'translateY(0px)' : 'translateY(4rem)'};
    transition: opacity 0.75s cubic-bezier(0.47, 0, 0.745, 0.715) 0.5s,
        transform 0.65s cubic-bezier(0.445, 0.05, 0.55, 0.95) 0.5s;
    
    ${({ theme }) => `
        ${theme.breakpoints.mobile} {
            padding: 8rem 1.75rem 12rem 1.75rem;
            grid-template-columns: 1fr 5fr 1fr;
            letter-spacing: ${theme.typography.letterSpacing.small};
        }
        
        ${theme.breakpoints.tablet} {
            padding: 8rem 4.5rem 12rem 4.5rem;
            grid-template-columns: 1fr 5fr 1fr;
            letter-spacing: ${theme.typography.letterSpacing.small};
        }
        
        ${theme.breakpoints.desktop} {
            padding: 8.25rem;
            grid-template-columns: 1fr 7fr 1fr;
            letter-spacing: ${theme.typography.letterSpacing.medium};
        }
    `}
`;

export const MenuContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
    grid-column: 2;
`;

export const StyledNav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-transform: uppercase;
`;

export const HomeItem = styled.a`
    font-size: ${({ theme }) => theme.typography.fontSize.small};
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary};
    transition: ${({ theme }) => `all ${theme.transitions.fadeAll}`};

    ${({ theme }) => `
        ${theme.breakpoints.mobile} {
            line-height: 1.7;
            font-size: ${theme.typography.fontSize.medium};
        }
        
        ${theme.breakpoints.desktop} {
            line-height: 1.5;
            font-size: ${theme.typography.fontSize.medium};
        }
    `}
`;

export const MenuItem = styled.a`
    cursor: pointer;
    color: ${({ theme }) => theme.colors.onBackground};
    line-height: 1.5;
    transition: ${({ theme }) => `all ${theme.transitions.fadeAll}`};
    
    ${({ theme }) => `
        ${theme.breakpoints.mobile} {
            line-height: 1.7;
            font-size: ${theme.typography.fontSize.medium};
        }
        
        ${theme.breakpoints.tablet} {
            line-height: 1.7;
            font-size: ${theme.typography.fontSize.xLarge};
        }
        
        ${theme.breakpoints.desktop} {
            line-height: 1.5;
            font-size: ${theme.typography.fontSize.xxLarge};
        }
    `}
    
    :not(:first-child) {
        margin-top: 1rem;
    }
`;

export const StyledHover = styled.span`
    position: relative;
    display: inline-block;
    cursor: pointer;
    
    ::before, ::after {
        content: '';
        position: absolute;
        width: 0%;
        height: 2px;
        top: 50%;
        margin-top: -0.5px;
        background: ${({ theme }) => theme.colors.primary};
    }
    
    ::before {
        left: -2.5px;
    }
    
    :hover::before {
        background: ${({ theme }) => theme.colors.primary};
        width: 100%;
        transition: width 0.3s linear 0.15s;
    }
    
    :hover::after {
        background: transparent;
        width: 100%;
        transition: 0s;
    }
`;


export const NavigationMenu = (menuItems: MenuItemInterface[]) => (
    <StyledNav>
        <HomeItem>Home</HomeItem>

        {menuItems.map((menuItem: MenuItemInterface, index: number) => {
            return (
                <Link to={menuItem.path}>
                    <MenuItem key={index}>
                        <StyledHover>
                            {menuItem.title}
                        </StyledHover>
                    </MenuItem>
                </Link>
            )
        })}
    </StyledNav>
);
