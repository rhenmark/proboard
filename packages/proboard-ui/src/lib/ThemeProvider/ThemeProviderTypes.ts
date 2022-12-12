import { PropsWithChildren } from "react";

export interface ThemeProvideProps extends PropsWithChildren{
    value?: Themes
}

export enum Themes {
    light = "light",
    dark = "dark"
}