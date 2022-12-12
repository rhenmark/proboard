import { createContext, useContext, useEffect } from 'react';
import { ThemeProvideProps, Themes } from './ThemeProviderTypes';

const ThemeContext = createContext(Themes.light);
const useTheme = (value: Themes) => {
    const themeValue = useContext(ThemeContext)
    const setTheme = () => {
        return null
    }

    return {
        theme: themeValue,
        setTheme
    }
};

const ThemeProvider = ({
    children,
    value = Themes.light,
}: ThemeProvideProps) => {
    const { theme } = useTheme(value)

    return (
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    );
};

export default ThemeProvider;
