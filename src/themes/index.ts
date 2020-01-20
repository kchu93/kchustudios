import { breakpoints, Breakpoints } from "./breakpoints";
import { Colors, fetchSeasonColors } from "./colors";
import { createTypography, Typography } from "./typography";

import { AppMode } from "src/components/App/constants";
import { createTransitions, Transitions } from "./transitions";
import { Seasons } from "./seasons/seasons";
import { zIndex, ZIndex } from "./z-index";

export interface ThemeInterface {
  breakpoints: Breakpoints;
  colors: Colors;
  transitions: Transitions;
  typography: Typography;
  zIndex: ZIndex;
}

export const createTheme = (
  appMode: AppMode,
  season: Seasons
): ThemeInterface => {
  return {
    breakpoints: breakpoints,
    colors: fetchSeasonColors(season, appMode),
    transitions: createTransitions(),
    typography: createTypography(),
    zIndex: zIndex
  };
};
