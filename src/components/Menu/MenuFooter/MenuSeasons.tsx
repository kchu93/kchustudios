import React, { FunctionComponent } from 'react'
import {
    IconContainer,
    MenuFooterContainer,
    SeasonContainer,
    StyledIcon,
    StyledSeasonLabel,
} from './styles';

import {
    fallIcon,
    springIcon,
    summerIcon,
    winterIcon
} from '../../../utils/icons';
import { Seasons } from '../../../themes/seasons/seasons';

interface MenuFooterProps {
    menuOpen: boolean;
    currentSeason: Seasons;
    updateSeason(season: Seasons): void;
}

const MenuSeasons: FunctionComponent<MenuFooterProps> = (props) => {
    const { menuOpen, currentSeason, updateSeason } = props;
    const seasonIcons = [
        {
            icon: winterIcon,
            season: Seasons.WINTER
        },
        {
            icon: springIcon,
            season: Seasons.SPRING
        },
        {
            icon: summerIcon,
            season: Seasons.SUMMER
        },
        {
            icon: fallIcon,
            season: Seasons.FALL
        }
    ];

    return (
        <MenuFooterContainer menuOpen={menuOpen}>
            <SeasonContainer>
                <StyledSeasonLabel>Season</StyledSeasonLabel>

                <IconContainer>
                    {seasonIcons.map((season, index) => {
                        const activeSeason = season.season === currentSeason;
                        return (
                            <StyledIcon
                                key={index}
                                activeSeason={activeSeason}
                                onClick={() => updateSeason(season.season)}
                            >
                                {season.icon}
                            </StyledIcon>
                        )
                    })}
                </IconContainer>
            </SeasonContainer>
        </MenuFooterContainer>
    )
};

export default MenuSeasons;
