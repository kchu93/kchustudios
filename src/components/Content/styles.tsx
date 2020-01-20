import styled from 'styled-components';

interface ContentProps {
    menuOpen: boolean;
}

export const ContentContainer = styled.div<ContentProps>`
    display: flex;
    justify-content: center;
    grid-row: 2;
    opacity: ${({ menuOpen }) => menuOpen ? '0' : '1'};
    transition: ${({theme}) => `all ${theme.transitions.fadeAll}`};
`;
