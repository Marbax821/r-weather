import { createContext } from "react";

interface ThemeContextProps {
    theme: Theme;
    changeTheme: (theme: Theme) => void;
}

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: Theme.LIGHT,
    changeTheme: () => {}
});