import { rem } from "polished";

export interface FontFamily {
  serif: string;
  sans: string;
}

export interface LetterSpacing {
  normal: string;
  small: string;
  medium: string;
  large: string;
  xLarge: string;
}

export interface FontWeight {
  extraLight: number;
  light: number;
  regular: number;
  semiBold: number;
  bold: number;
}

export interface FontSize {
  xxSmall: string;
  xSmall: string;
  small: string;
  medium: string;
  large: string;
  xLarge: string;
  xxLarge: string;
  xxxLarge: string;
}

export interface Typography {
  fontFamily: FontFamily;
  fontSize: FontSize;
  fontWeight: FontWeight;
  letterSpacing: LetterSpacing;
}

export const createTypography = (): Typography => ({
  fontFamily: {
    sans: "'proxima-nova', 'Helvetica Neue', Arial, sans",
    serif: "'Merriweather', 'Helvetica Neue', Arial, sans"
  },
  fontSize: {
    xxSmall: rem(10),
    xSmall: rem(14),
    small: rem(16),
    medium: rem(20),
    large: rem(24),
    xLarge: rem(32),
    xxLarge: rem(40),
    xxxLarge: rem(48)
  },
  fontWeight: {
    extraLight: 100,
    light: 300,
    regular: 400,
    semiBold: 600,
    bold: 800
  },
  letterSpacing: {
    normal: "normal",
    small: rem(1),
    medium: rem(2),
    large: rem(3),
    xLarge: rem(4)
  }
});
