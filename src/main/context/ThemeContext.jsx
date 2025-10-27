import React, { createContext, useState, useContext, useEffect } from "react";
import { themes } from "../config/theme";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [themeMode, setThemeMode] = useState("dark");

    // optional: save preference in localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem("portfolio-theme");
        if (savedTheme) setThemeMode(savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = themeMode === "dark" ? "light" : "dark";
        setThemeMode(newTheme);
        localStorage.setItem("portfolio-theme", newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme: themes[themeMode], toggleTheme, themeMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Hook to use theme in any component
export const useTheme = () => useContext(ThemeContext);
