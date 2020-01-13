import styled from 'styled-components';

export const MoodBoardContainer = styled.div`
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.onBackground};
    display: flex;
    justify-content: center;
    padding: 24px;
`;

export const ImageGrid = styled.div`
    display: grid;
    height: 100%;
    width: 100%;
    grid-gap: 10px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    }

    ${({ theme }) => `
        ${theme.breakpoints.mobile} {
            grid-template-columns: repeat(1, 1fr);
        }
    `}

    ${({ theme }) => `
        ${theme.breakpoints.tablet} {   
            grid-template-columns: repeat(3, 1fr);
        }
    `}

    ${({ theme }) => `
        ${theme.breakpoints.desktop} {
            grid-template-columns: repeat(4, 1fr);
        }
    `}
`;
