import { rem } from "polished";

export type FontFamily = string;

export interface FontWeight {
  extraLight: number;
  light: number;
  regular: number;
  semiBold: number;
  bold: number;
}

export interface FontSize {
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
}

export const createTypography = (): Typography => ({
  fontFamily: '"proxima-nova", "Helvetica Neue", Arial, sans-serif',
  fontSize: {
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
  }
});
