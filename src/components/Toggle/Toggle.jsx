import { Brightness3, WbSunnyRounded } from '@mui/icons-material';
import './Toggle.css';
import { useContext } from 'react';
import { ThemeContext } from '../../context/Theme';

const Toggle = () => {
	const [{ theme, toggleTheme }] = useContext(ThemeContext);
	return (
		<div className="toggle-container">
			<span className="center">
				<WbSunnyRounded />
			</span>
			<label className="toggle-theme" htmlFor="checkbox">
				<input
					type="checkbox"
					id="checkbox"
					onChange={toggleTheme}
					defaultValue={theme}
				/>
				<div className={`slider rounded ${theme}`}></div>
			</label>
			<span className="center">
				<Brightness3 />
			</span>
		</div>
	);
};

export default Toggle;
