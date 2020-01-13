import styled from 'styled-components';

export const MoodBoardContainer = styled.div`
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.onBackground};
    width: 100%;
    height: 100%;
    padding: 24px;
    box-sizing: border-box;
`;  

export const ImageGrid = styled.div`
    display: grid;
    grid-gap: 10px;
    overflow-y: scroll;

    ${({ theme }) => `
        ${theme.breakpoints.mobile} {
            grid-template-columns: repeat(2, 1fr);;
        }
    `}

    ${({ theme }) => `
        ${theme.breakpoints.tablet} {
            grid-template-columns: repeat(3, 1fr);;
        }
    `}

    ${({ theme }) => `
        ${theme.breakpoints.desktop} {
            grid-template-columns: repeat(4, 1fr);;
        }
    `}
`;
