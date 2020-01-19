import styled from 'styled-components';

export const FooterContainer = styled.div`
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primary};
    width: 100%;
    padding: 24px;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    grid-area: 3;
`;

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const Icon = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding-left: .75rem;

    svg {
        fill: ${({ theme }) => theme.colors.primary};

        :hover {
            fill: ${({ theme }) => theme.colors.secondary};
        }
    }
`;
