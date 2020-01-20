import { AppMode } from "../components/App/constants";
import {
  fallColors,
  Seasons,
  springColors,
  summerColors,
  winterColors
} from "./seasons/seasons";

export interface Colors {
  background: string;
  surface: string;
  error: string;
  primary: string;
  primaryVariant: string;
  secondary: string;
  onPrimary: string;
  onSecondary: string;
  onBackground: string;
  onSurface: string;
  onError: string;
}

export const fetchSeasonColors = (season: Seasons, mode: AppMode): any => {
  switch (season) {
    case Seasons.FALL:
      return mode === AppMode.DARK ? fallColors.darkMode : fallColors.lightMode;
    case Seasons.SPRING:
      return mode === AppMode.DARK
        ? springColors.darkMode
        : springColors.lightMode;
    case Seasons.SUMMER:
      return mode === AppMode.DARK
        ? summerColors.darkMode
        : summerColors.lightMode;
    case Seasons.WINTER:
      return mode === AppMode.DARK
        ? winterColors.darkMode
        : winterColors.lightMode;
    default:
      return fallColors.darkMode;
  }
};
