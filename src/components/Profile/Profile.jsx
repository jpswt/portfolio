import { useContext } from 'react';
import './Profile.css';
import { ThemeContext } from '../../context/Theme';
import devIcon from './Coding.svg';
import devIcon2 from './Coding2.svg';

const Profile = () => {
	const [{ theme, toggleTheme }] = useContext(ThemeContext);
	console.log(theme);
	return (
		<div className="profile-container">
			<div className="profile-content">
				<h1 className="profile-title">
					Hi, I am
					<span className="name"> Joel Perez.</span>
				</h1>
				<h2 className="profile-description">Full Stack Engineer</h2>
				<p className="profile-info">
					I am a former scientist, part-time musician, and Lego enthusiast that
					enjoys expressing my creative side through various outlets. As a
					developer, I utilize this passion and creativity to bring things to
					life that will have a positive impact in the world.
				</p>
			</div>
			<div>
				<img src={theme === 'light' ? devIcon : devIcon2} alt="" />
			</div>
		</div>
	);
};

export default Profile;
