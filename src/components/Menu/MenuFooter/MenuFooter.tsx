import React, {FunctionComponent} from 'react'
import {
    IconContainer,
    MenuFooterContainer,
    SeasonContainer,
    StyledIcon,
    StyledSeasonLabel,
    StyledThemeLabel,
    ThemeContainer,
} from './styles';

import {fallIcon, springIcon, summerIcon, winterIcon,} from '../../../icons/icons';
import { AppMode } from "../../App/constants";

interface MenuFooterProps {
    menuOpen: boolean;
}

const MenuFooter: FunctionComponent<MenuFooterProps> = props => {
    const { menuOpen } = props;

    return (
        <MenuFooterContainer menuOpen={menuOpen}>
            <SeasonContainer>
                <StyledSeasonLabel>Season</StyledSeasonLabel>

                <IconContainer>
                    <StyledIcon>{winterIcon}</StyledIcon>
                    <StyledIcon>{springIcon}</StyledIcon>
                    <StyledIcon>{summerIcon}</StyledIcon>
                    <StyledIcon>{fallIcon}</StyledIcon>
                </IconContainer>
            </SeasonContainer>

            <ThemeContainer>
                {/*<StyledThemeLabel appMode={AppMode.LIGHT}>Daylight</StyledThemeLabel>*/}
                <StyledThemeLabel appMode={AppMode.DARK}>Midnight</StyledThemeLabel>
            </ThemeContainer>

            {/*<SocialContainer>*/}
                {/*<StyledSocialIcon>{instagramIcon}</StyledSocialIcon>*/}
                {/*<StyledSocialIcon>{twitterIcon}</StyledSocialIcon>*/}
            {/*</SocialContainer>*/}
        </MenuFooterContainer>
    )
};

export default MenuFooter;
