import styled from 'styled-components';
import Masonry from 'react-masonry-css';

interface MoodBoardInterface {
    menuOpen?: boolean;
}

export const MoodBoardContainer = styled.div<MoodBoardInterface>`
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.onBackground};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    ${({ theme }) => `
        ${theme.breakpoints.mobile} {
            padding: 0 1.5rem;
        }
        
        ${theme.breakpoints.tablet} {
            padding: 0 2.5rem;
        }
        
        ${theme.breakpoints.desktop} {
            padding: 0 3rem;
        }
    `}
`;

export const StyledMasonry = styled(Masonry)`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    transition: ${({ theme }) => `all ${theme.transitions.fadeAll}`};
    
    .masonryColumn:not(:first-child)  {
        margin-left: 30px;
    }
`;

export const breakPointColumns = {
    default: 4,
    1025: 3,
    720: 1,
};
