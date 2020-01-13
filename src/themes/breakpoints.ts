export interface Breakpoints {
    mobile: string;
    tablet: string;
    desktop: string;
}

export const breakPointValues: Breakpoints = {
    mobile: `0px`,
    tablet: `720px`,
    desktop: `1025px`,
};

export const breakpoints: Breakpoints = {
    mobile: `@media (min-width: ${breakPointValues.mobile})`,
    tablet: `@media (min-width: ${breakPointValues.tablet})`,
    desktop: `@media (min-width: ${breakPointValues.desktop})`,
};
