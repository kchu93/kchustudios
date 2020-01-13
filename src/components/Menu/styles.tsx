import styled, { keyframes } from 'styled-components';

export const fadeIn = keyframes`
    0% {
        left: 75%;
        opacity: 0;
    }
    25% {
        left: 60%;;
        opacity: .25;
    }
    
    50% {
        left: 45%;
        opacity: .5;
    }
    75% {
        left: 30%;
        opacity: .75;
    }
    100% {
        left: 0;
        opacity: 1;
    }
`;

export const MenuContainer = styled.div`
    position: fixed;
    opacity: 1;
    height: 100%;
    width: 100%;
    color: ${({ theme }) => theme.colors.onBackground};
    background: ${({ theme }) => theme.colors.surface};
    
    animation: ${fadeIn} 150ms linear;
    animation-fill-mode: forwards;
`;

export const StyledMenu = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const IconContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const MenuItem = styled.span`
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.typography.fontSize.medium};
    
    
    :hover {
        color: ${({ theme }) => theme.colors.secondary};
    }
`;

export const MenuIcon = styled.div`
    cursor: pointer;
    padding: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
        fill: ${({ theme }) => theme.colors.primary};
        
        :hover {
            fill: ${({ theme }) => theme.colors.secondary};
        }
    }
`;
