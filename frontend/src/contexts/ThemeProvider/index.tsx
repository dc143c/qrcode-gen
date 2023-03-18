import {createContext, ReactNode, useContext, useState} from "react";
import {CustomTheme, DefaultTheme} from "styled-components";
import {combineTheme, dark, light} from "../../styles/themes";
import { ThemeProvider as ThemeStyler }  from "styled-components";
import {parseCookies, setCookie} from "nookies";

interface IThemeContextData {
    theme: CustomTheme;
    toggleTheme(): void;
}

interface IThemeProvider {
    children: ReactNode;
}

const ThemeContext = createContext<IThemeContextData>({} as IThemeContextData);
const ThemeProvider = ({ children }: IThemeProvider) => {
    const [theme, setTheme] = useState<DefaultTheme>(() => {
        var cookies = parseCookies();
        var actualTheme = cookies['Coolter/theme'] || 'dark';
        return combineTheme(actualTheme === 'dark' ? dark : light);
    });

    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? combineTheme(dark) : combineTheme(light));
        var themeName = theme.title === 'light' ? 'dark' : 'light';
        setCookie(null, 'Coolter/theme', themeName);
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <ThemeStyler theme={theme}>
                {children}
            </ThemeStyler>
        </ThemeContext.Provider>
    )
}

function useTheme(): IThemeContextData {
    const context = useContext(ThemeContext);

    if(!context) {
        throw new Error(`useTheme must be used within a Theme Provider`)
    }

    return context;
}

export { ThemeProvider, useTheme };