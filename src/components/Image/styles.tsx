import styled from 'styled-components';

export const ImageContainer = styled.div``

export const StyledImage = styled.img`
    display: flex;
    justify-content: center;
    object-fit: cover;
    width: 100%;
    height: ${({ height }) => height};
`;
