import styled from 'styled-components';

export const MoodBoardContainer = styled.div`
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.onBackground};
    display: flex;
    justify-content: center;
    grid-area: 2;
    
    ${({ theme }) => `
        ${theme.breakpoints.mobile} {
            padding: 6rem 1.5rem 1.5rem 1.5rem;
        }
        
        ${theme.breakpoints.tablet} {
            padding: 6rem 2.5rem 2.5rem 2.5rem;
        }
        
        ${theme.breakpoints.desktop} {
            padding: 6rem 2.5rem 2.5rem 2.5rem;
        }
    `}
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

        ${theme.breakpoints.tablet} {   
            grid-template-columns: repeat(3, 1fr);
        }
        
        ${theme.breakpoints.desktop} {
            grid-template-columns: repeat(4, 1fr);
        }
    `}
`;
