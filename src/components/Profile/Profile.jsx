import { useContext } from 'react';
import './Profile.css';
import { ThemeContext } from '../../context/Theme';

const Profile = () => {
	const [{ theme, toggleTheme }] = useContext(ThemeContext);
	return (
		<div className="profile-container">
			<div className="profile-content">
				<h1 className="profile-title">
					Hi, I am{' '}
					<span style={{ color: 'var(--clr-primary)' }}>Joel Perez.</span>
				</h1>
				<h2 className="profile-description">Full Stack Engineer</h2>
				<p className="profile-info">
					I am a former scientist, part-time musician, and Lego enthusiast that
					enjoys expressing my creative side through various outlets. Web
					development allows me to express my creativity and bring things to
					life that will have a positive impact in the world.{' '}
				</p>
			</div>
		</div>
	);
};

export default Profile;
