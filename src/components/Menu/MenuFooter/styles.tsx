import styled, { css } from 'styled-components';
import { AppMode } from '../../App/constants';
import { ThemeInterface } from '../../../themes';

interface MenuFooterInterface {
    menuOpen: boolean;
}

export const MenuFooterContainer = styled.div<MenuFooterInterface>`
    display: flex;
    flex-direction: column;
    opacity: ${({ menuOpen }) => menuOpen ? '1' : '0'};
    transform: ${({ menuOpen }) => menuOpen ? 'translateY(0px)' : 'translateY(4rem)'};
    transition-delay: .9s;
    transition: opacity 0.75s cubic-bezier(0.47, 0, 0.745, 0.715) 0s, transform 0.85s cubic-bezier(0.445, 0.05, 0.55, 0.95) 0s;
`;

// SEASON STYLING
export const SeasonContainer = styled.div`
    display: inline-flex;
    align-items: center;
`;

export const StyledSeasonLabel = styled.span`
    display: inline-flex;
    align-items: center;
    
    ${({ theme }) => `
        ${theme.breakpoints.mobile} {
            font-size: ${theme.typography.fontSize.xSmall};
        }

        ${theme.breakpoints.desktop} {
            line-height: 2.1;
            font-size: ${theme.typography.fontSize.small};
        }
    `}
    
    ::after {
        content: "";
        background-color: ${({ theme }) => theme.colors.primary};
        height: 1px;
        width: 2rem;
        margin-left: .5rem;
    }
`;

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: .25rem;
`;

export const StyledIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .25rem;

    svg > path {
        fill: ${({ theme }) => theme.colors.onBackground};
    }
`;

// THEME STYLING
interface StyledThemeInterface {
    appMode: AppMode;
}

const themeLabelStyled = (appMode: AppMode, theme: ThemeInterface) => {
    if (appMode === AppMode.DARK) {
        return css`
            ::before {
                content: "";
                background-color: ${theme.colors.primary};
                height: 1px;
                width: 2rem;
                margin-right: .5rem;
            }
        `;
    } else {
        return css`
            ::after {
                content: "";
                background-color: ${theme.colors.primary};
                height: 1px;
                width: 2rem;
                margin-left: .5rem;
            }
        `
    }
};

export const ThemeContainer = styled.div`
    display: inline-flex;
    align-items: center;
`;

export const StyledThemeLabel = styled.span<StyledThemeInterface>`
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    ${({ appMode, theme }) => themeLabelStyled(appMode, theme)};

    ${({ theme }) => `
        ${theme.breakpoints.mobile} {
            font-size: ${theme.typography.fontSize.xSmall};
        }

        ${theme.breakpoints.desktop} {
            line-height: 2.1;
            font-size: ${theme.typography.fontSize.small};
        }
    `}
`;


//SOCIAL STYLING
// export const SocialContainer = styled.div`
//     display: inline-flex;
//     align-items: center;
//     margin-top: .75rem;
// `;
//
// export const StyledSocialIcon = styled.a`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding-right: .5rem;
//
//     svg > path {
//         fill: ${({ theme }) => theme.colors.onBackground};
//     }
// `;
