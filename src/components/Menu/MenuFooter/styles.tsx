import styled, { css } from 'styled-components';
import { AppMode } from '../../App/constants';
import { ThemeInterface } from '../../../themes';

interface MenuFooterInterface {
    menuOpen: boolean;
}

export const MenuFooterContainer = styled.div<MenuFooterInterface>`
    display: flex;
    justify-content: space-between;
    opacity: ${({ menuOpen }) => menuOpen ? '1' : '0'};
    transform: ${({ menuOpen }) => menuOpen ? 'translateY(0px)' : 'translateY(4rem)'};
    transition: opacity 0.75s cubic-bezier(0.47, 0, 0.745, 0.715) 0s,
        transform 0.85s cubic-bezier(0.445, 0.05, 0.55, 0.95) 0s;
`;

export const ContentContainer = styled.div<MenuFooterInterface>`
    display: flex;
    flex-direction: column;
`;

// SEASON STYLING
export const SeasonContainer = styled.div`
    display: inline-flex;
    align-items: center;
`;

export const StyledSeasonLabel = styled.span`
    display: inline-flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.onBackground};
    transition: ${({ theme }) => `all ${theme.transitions.fadeAll}`};
    
    ${({ theme }) => `
        ${theme.breakpoints.mobile} {
            font-size: ${theme.typography.fontSize.xxSmall};
        }
        
        ${theme.breakpoints.tablet} {
            font-size: ${theme.typography.fontSize.small};
        }

        ${theme.breakpoints.desktop} {
            font-size: ${theme.typography.fontSize.small};
        }
    `}
    
    ::after {
        content: "";
        background-color: ${({ theme }) => theme.colors.primary};
        height: 1px;
        width: 2rem;
        margin-left: .5rem;
        transition: ${({ theme }) => `all ${theme.transitions.fadeAll}`};
    }
`;

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: .25rem;
`;

interface SeasonIconInterface {
    activeSeason: boolean;
}

export const StyledIcon = styled.div<SeasonIconInterface>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .25rem;
    cursor: pointer;
    
    :hover > svg > path {
        fill: ${({ theme }) => theme.colors.primary};
        transition: ${({ theme }) => `fill ${theme.transitions.hover}`};
    }

    svg > path {
        fill: ${({ activeSeason, theme }) => activeSeason ? theme.colors.primary : theme.colors.onBackground};
        transition: ${({ theme }) => `fill ${theme.transitions.fadeAll}`};
    }
`;

// THEME STYLING
interface StyledThemeInterface {
    appMode: AppMode;
    appModeLabel: string;
}

export const ThemeContainer = styled.div`
    display: inline-flex;
    align-items: center;
`;

const fetchThemeLabelStyles = (theme: ThemeInterface, appModeLabel: string) => {
    return css`
        ::before {
            content: "";
            background-color: ${theme.colors.primary};
            height: 1px;
            width: 2rem;
            margin-right: .5rem;
            align-self: center;
            justify-self: center;
            transition: all ${theme.transitions.fadeAll};
        }
        
        ::after {
            content: "${appModeLabel}";
            font-size: ${theme.typography.fontSize.xSmall};
            color: ${theme.colors.onBackground};
            align-self: center;
            justify-self: center;
            transition: all ${theme.transitions.fadeAll};
        }
    `;
};

export const StyledThemeLabel = styled.span<StyledThemeInterface>`
    display: grid;
    grid-template-columns: .5fr 1fr;
    align-items: center;
    cursor: pointer;
    transition: ${({ theme }) => `all ${theme.transitions.fadeAll}`};
    
    ${({ theme, appModeLabel }) => fetchThemeLabelStyles(theme, appModeLabel)};

    ${({ theme }) => `
        ${theme.breakpoints.mobile} {
            font-size: ${theme.typography.fontSize.xxSmall};
        }
        
        ${theme.breakpoints.desktop} {
            font-size: ${theme.typography.fontSize.xSmall};
            margin-top: .25rem;
        }

        ${theme.breakpoints.desktop} {
            font-size: ${theme.typography.fontSize.xSmall};
            margin-top: .25rem;
        }
    `}
`;

// SOCIAL STYLING
// export const SocialContainer = styled.div`
//     display: inline-flex;
//     align-items: center;
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
