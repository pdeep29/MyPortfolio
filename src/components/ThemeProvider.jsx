import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({
    theme: 'dark',
    toggleTheme: () => { }
});

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const initialized = localStorage.getItem('theme_initialized');
        if (!initialized) {
            // First time initialization: set dark mode as default
            localStorage.setItem('theme_initialized', 'true');
            localStorage.setItem('theme', 'dark');
            return 'dark';
        }
        return localStorage.getItem('theme') || 'dark';
    });

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
        localStorage.setItem('theme_initialized', 'true');
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme_initialized', 'true');
            localStorage.setItem('theme', nextTheme);
            return nextTheme;
        });
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
