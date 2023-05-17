import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/Theme';
import { Brightness3, WbSunnyRounded } from '@mui/icons-material';
import './Navbar.css';
import Toggle from '../Toggle/Toggle';

const Navbar = () => {
	const [{ theme, toggleTheme }] = useContext(ThemeContext);
	return (
		<nav className="navbar">
			<h1>LOGO</h1>
			<ul className="nav-links">
				<li>Home</li>
				<li>About</li>
				<li>Projects</li>
				<li>Contact</li>
				{/* <button onClick={toggleTheme}>
					{theme === 'dark' ? <WbSunnyRounded /> : <Brightness3 />}
				</button> */}
				<Toggle />
			</ul>
		</nav>
	);
};

export default Navbar;
