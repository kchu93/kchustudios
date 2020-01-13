import styled from 'styled-components';

export const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({ theme }) => theme.colors.onBackground};
    background: ${({ theme }) => theme.colors.background};
    width: 100%;
    padding: 24px;
    box-sizing: border-box;
`;

export const HeaderLogo = styled.div`
    font-size: ${({ theme }) => theme.typography.fontSize.medium};
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;

    :hover {
        color: ${({ theme }) => theme.colors.secondary};
    }
`;

export const HeaderIcon = styled.div`
    font-size: ${({ theme }) => theme.typography.fontSize.medium};
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 1rem;

    svg {
        fill: ${({ theme }) => theme.colors.primary};

        :hover {
            fill: ${({ theme }) => theme.colors.secondary};
        }
    }
`;

export const MenuContainer = styled.div`
    display: flex;
`;
