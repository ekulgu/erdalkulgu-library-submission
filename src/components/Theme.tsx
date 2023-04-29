import React, { FC, createContext, useState, Dispatch, SetStateAction } from 'react';

// theme object props type
interface Theme {
    backgroundColor: string;
    textColor: string;
}

// GlobalThemeContext props types
interface ContextProps {
    theme: Theme;
    setTheme: Dispatch<SetStateAction<Theme>>;
}

// GlobalThemeProvider props types
interface ProviderProps {
    theme: Theme;
    children: React.ReactNode;
}

// Define the default theme object
const defaultTheme: Theme = {
    backgroundColor: '#fff',
    textColor: '#000'
};

// Define the GlobalThemeContext for the theme object
export const GlobalThemeContext = createContext<ContextProps>({
    theme: defaultTheme,
    setTheme: () => {}
});

// Define the GlobalThemeProvider component
export const GlobalThemeProvider: FC<ProviderProps> = ({ theme, children }) => {
    const [globalTheme, setGlobalTheme] = useState<Theme>(theme);

    return <GlobalThemeContext.Provider value={{ theme: globalTheme, setTheme: setGlobalTheme }}>{children}</GlobalThemeContext.Provider>;
};
