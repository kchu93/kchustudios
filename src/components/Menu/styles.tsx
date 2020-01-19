import styled from 'styled-components';

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
`;

export const StyledMenu = styled.div<MenuContainerProps>`
    display: table;
    width: 100%;
    height: 100%;
    opacity: ${({ menuOpen }) => menuOpen ? '1' : '0'};
    transform: ${({ menuOpen }) => menuOpen ? 'translateY(0px)' : 'translateY(4rem)'};
    transition-delay: 0.5s;
    transition: opacity 0.75s cubic-bezier(0.47, 0, 0.745, 0.715) 0s,
    transform 0.65s cubic-bezier(0.445, 0.05, 0.55, 0.95) 0s;
    
    ${({ theme }) => `
        ${theme.breakpoints.mobile} {
            padding: 4.5rem 1.75rem;
            grid-template-columns: 1fr 5fr 1fr;
            letter-spacing: 1px;
        }
        
        ${theme.breakpoints.desktop} {
            padding: 8.25rem;
            grid-template-columns: 1fr 7fr 1fr;
            letter-spacing: 2px;
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
    -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);

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
    -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
    
    ${({ theme }) => `
        ${theme.breakpoints.mobile} {
            line-height: 1.7;
            font-size: ${theme.typography.fontSize.medium};
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
