import { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
	const [theme, setThemeName] = useState('light');

	useEffect(() => {
		const darkMedia = window.matchMedia('(prefers-color-scheme: light)');
		setThemeName(darkMedia.matches ? 'dark' : 'light');
		darkMedia.addEventListener('change', (e) => {
			setThemeName(e.matches ? 'dark' : 'light');
		});
	}, []);

	const toggleTheme = () => {
		const name = theme === 'dark' ? 'light' : 'dark';
		localStorage.setItem('themeName', name);
		setThemeName(name);
	};

	return (
		<ThemeContext.Provider value={[{ theme, toggleTheme }]}>
			{children}
		</ThemeContext.Provider>
	);
};

export { ThemeProvider, ThemeContext };
