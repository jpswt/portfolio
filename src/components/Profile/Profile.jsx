import React from 'react';
import './Profile.css';

const Profile = () => {
	return (
		<div className="profile-container">
			<div className="profile-content">
				<h1 className="profile-title">
					Hi, I am <span>Joel</span> Perez.
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
