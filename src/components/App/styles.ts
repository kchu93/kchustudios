import styled from "styled-components";

export const StyledApp = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.background};
  display: grid;
  transition: ${({ theme }) => `all ${theme.transitions.fadeAll}`};

  ${({ theme }) => `
        ${theme.breakpoints.mobile} {
            grid-template-rows: 72px 1fr;
        }

        ${theme.breakpoints.mobile} {
            grid-template-rows: 72px 1fr;
        }

        ${theme.breakpoints.mobile} {
            grid-template-rows: 88px 1fr;
        }
    `}
`;
