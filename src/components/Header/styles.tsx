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

    ${({ theme }) => `
        ${theme.breakpoints.mobile} {
            height: 3.75rem;
        }
    `}

    ${({ theme }) => `
        ${theme.breakpoints.tablet} {
            height: 4.75rem;
        }
    `}

    ${({ theme }) => `
        ${theme.breakpoints.desktop} {
            height: 4.75rem;
        }
    `}
`;

export const HeaderLogo = styled.div`
    font-size: ${({ theme }) => theme.typography.fontSize.medium};
    color: ${({ theme }) => theme.colors.primary};
`;

export const ModeToggle = styled.div`
    font-size: ${({ theme }) => theme.typography.fontSize.medium};
    color: ${({ theme }) => theme.colors.primary};
    svg {
        fill: ${({ theme }) => theme.colors.primary};
    }
`