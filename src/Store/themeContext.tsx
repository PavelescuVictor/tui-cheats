import {
    createContext,
    useState,
    useContext,
    type Dispatch,
    type SetStateAction
} from 'react';

export type Theme = {
    [key: string]: string,
}

export type ThemeContextType = {
  theme: Theme
  setTheme: Dispatch<SetStateAction<Theme>>;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export type ThemePropsTypes = {
    theme: Theme;
}

export const ThemeProvider = ({ theme: themeData, children }: React.PropsWithChildren<ThemePropsTypes>) => {
    const [theme, setTheme] = useState<Theme>(themeData);

    return <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
    </ThemeContext.Provider>
}

export const useTheme = () => {
    const ctx = useContext(ThemeContext);
    if (!ctx) {
        throw new Error('useTheme must be used inside ThemeProvider');
    }
    return ctx;
}

export const ThemeConsumer = ThemeContext.Consumer;

export default ThemeContext;
