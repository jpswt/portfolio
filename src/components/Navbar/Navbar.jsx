import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/Theme';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { WbSunnyRounded, Brightness3 } from '@mui/icons-material';
import './Navbar.css';
import '../../App.css';
import Toggle from '../Toggle/Toggle';

const Navbar = () => {
	const [{ theme, toggleTheme }] = useContext(ThemeContext);
	const [showNav, setShowNav] = useState(false);

	const closeNav = () => {
		setShowNav(false);
	};

	const toggleNav = () => {
		setShowNav(!showNav);
	};
	return (
		<header
			className={`header ${theme}`}
			style={{ backgroundColor: 'var(--clr-bg)' }}
		>
			<nav className={`navbar`}>
				<h1 className="logo">LOGO</h1>
				<ul
					className={showNav ? 'nav-links active' : 'nav-links'}
					style={{ backgroundColor: 'var(--clr-bg)' }}
				>
					<li className="nav-link">Home</li>
					<li className="nav-link">About</li>
					<li className="nav-link">Projects</li>
					<li className="nav-link">Contact</li>
					<Toggle />
				</ul>

				<div className="mobile-nav">
					<div onClick={toggleTheme}>
						{theme === 'dark' ? <WbSunnyRounded /> : <Brightness3 />}
					</div>
					<div className={`nav-hamburger`} onClick={toggleNav}>
						{showNav ? <CloseIcon /> : <MenuIcon />}
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;