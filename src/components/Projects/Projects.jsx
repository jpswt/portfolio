import { useEffect } from 'react';
import './Projects.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
	useEffect(() => {
		AOS.init({
			disable: 'phone',
			duration: 700,
			easing: 'east-out-cubic',
		});
	}, []);

	return (
		<div className="projects-container" id="projects">
			<div className="grid-container">
				<div data-aos="zoom-in-right">
					Card 1
					<img src="./src/assets/react.svg" alt="" />
				</div>
				<div data-aos="zoom-in-left">Card 2</div>
				<div data-aos="zoom-in-right">Card 3</div>
				<div data-aos="zoom-in-left">Card 4</div>
			</div>
		</div>
	);
};

export default Projects;
