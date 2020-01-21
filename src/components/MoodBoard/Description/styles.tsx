import styled from 'styled-components';

export const DescriptionContainer = styled.div`
    display: flex;
    justifiy-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const TextContainer = styled.div`
    width: 100%;
    color: ${({ theme }) => theme.colors.onBackground};
    flex-direction: column;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 2rem;
    font-size: ${({ theme }) => theme.typography.fontSize.xSmall};
`;
