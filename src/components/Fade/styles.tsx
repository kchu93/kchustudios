import styled from 'styled-components';

interface FadeProps {
	show: boolean;
}

export const StyledContainer = styled.div<FadeProps>`
	animation: ${({ show }) => show ? "fadeIn 1s" : "fadeOut 1s"};
`;