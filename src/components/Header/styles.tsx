import styled from 'styled-components';

export const StyledHeader = styled.div`
    ${({ theme }) => `
        ${theme.breakpoints.mobile} {
            background: ${theme.colors.background};
            color: ${theme.colors.onBackground};
            width: 100%;
            height: 3.75rem;
        }
    `}

    ${({ theme }) => `
        ${theme.breakpoints.tablet} {
            background: ${theme.colors.background};
            color: ${theme.colors.onBackground};
            width: 100%;
            height: 10.75rem;
        }
    `}

    ${({ theme }) => `
        ${theme.breakpoints.desktop} {
            background: ${theme.colors.background};
            color: ${theme.colors.onBackground};
            width: 100%;
            height: 10.75rem;
        }
    `}
`;