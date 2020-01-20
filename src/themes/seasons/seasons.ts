import { Colors } from "../colors";

export enum Seasons {
  FALL = "fall",
  SUMMER = "summer",
  SPRING = "spring",
  WINTER = "winter"
}

export interface SeasonPalette {
  darkMode: Colors;
  lightMode: Colors;
}

export interface SeasonsInterface {
  fall: SeasonPalette;
  summer: SeasonPalette;
  spring: SeasonPalette;
  winter: SeasonPalette;
}

export const winterColors: SeasonPalette = {
  darkMode: {
    background: "#0F0F0F",
    surface: "#0F0F0F",
    error: "#000000",
    primary: "#A0C0E5",
    primaryVariant: "#c9bdee",
    secondary: "#e5baad",
    onPrimary: "#000000",
    onSecondary: "#000000",
    onBackground: "#f9f9fa",
    onSurface: "#f9f9fa",
    onError: "#000000"
  },
  lightMode: {
    background: "#f9f9fa",
    surface: "#f9f9fa",
    error: "#000000",
    primary: "#ACC6E5",
    primaryVariant: "#b5c3ec",
    secondary: "#e1d2a9",
    onPrimary: "#f9f9fa",
    onSecondary: "#f9f9fa",
    onBackground: "#121212",
    onSurface: "#121212",
    onError: "#000000"
  }
};

export const springColors: SeasonPalette = {
  darkMode: {
    background: "#0B1100",
    surface: "#0B1100",
    error: "#000000",
    primary: "#EFADA7",
    primaryVariant: "#ffc6b7",
    secondary: "#ccc2be",
    onPrimary: "#0B1100",
    onSecondary: "#0B1100",
    onBackground: "#faf9f9",
    onSurface: "#faf9f9",
    onError: "#000000"
  },
  lightMode: {
    background: "#faf9f9",
    surface: "#faf9f9",
    error: "#000000",
    primary: "#ffc6b7",
    primaryVariant: "#feb19c",
    secondary: "#d9d1cf",
    onPrimary: "#faf9f9",
    onSecondary: "#faf9f9",
    onBackground: "#121212",
    onSurface: "#121212",
    onError: "#000000"
  }
};

export const summerColors: SeasonPalette = {
  darkMode: {
    background: "#000619",
    surface: "#000619",
    error: "#000000",
    primary: "#C3A5D1",
    primaryVariant: "#DEBAD0",
    secondary: "#c6cfac",
    onPrimary: "#071126",
    onSecondary: "#071126",
    onBackground: "#FCF4F7",
    onSurface: "#FCF4F7",
    onError: "#000000"
  },
  lightMode: {
    background: "#FFFFFF",
    surface: "#FFFFFF",
    error: "#000000",
    primary: "#d8c556",
    primaryVariant: "#c5b44e",
    secondary: "#98c04c",
    onPrimary: "#fffade",
    onSecondary: "#fffade",
    onBackground: "#121212",
    onSurface: "#121212",
    onError: "#000000"
  }
};

export const fallColors: SeasonPalette = {
  darkMode: {
    background: "#140C00",
    surface: "#140C00",
    error: "#C8A2C8",
    primary: "#CE9465",
    primaryVariant: "#C8A2C8",
    secondary: "#7676f7",
    onPrimary: "#140C00",
    onSecondary: "#140C00",
    onBackground: "#FAFCF7",
    onSurface: "#FAFCF7",
    onError: "#000000"
  },
  lightMode: {
    background: "#FFFFFF",
    surface: "#FFFFFF",
    error: "#B00020",
    primary: "#D8A479",
    primaryVariant: "#DBC2DB",
    secondary: "#DBC2DB",
    onPrimary: "#FFFFFF",
    onSecondary: "#FFFFFF",
    onBackground: "#000000",
    onSurface: "#000000",
    onError: "#FFFFFF"
  }
};
