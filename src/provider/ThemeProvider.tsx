import { ReactNode, useState } from "react";
import { Theme, ThemeContext } from "../context/ThemeContext";
import { ChangeCssRootVariables } from "../model/ChangeCssRootVariables";
import { storage } from "../model/SaveToLC";

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(
        storage.getItem("theme") || Theme.LIGHT
    );

    ChangeCssRootVariables(theme);
    
    const changeTheme = (newTheme: Theme) => {
        storage.setItem("theme", newTheme);
        setTheme(newTheme);
        ChangeCssRootVariables(newTheme);
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,
                changeTheme,
            }}
            {...props}
        >
            {children}
        </ThemeContext.Provider>
    );
};
