import { useEffect } from 'react';
import { data } from '../../data/Data';
import './Projects.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectCard from '../ProjectCard/ProjectCard';

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
			<h1 className="project-title">Projects</h1>
			<div className="project-container">
				{data.map((project) => (
					<ProjectCard project={project} key={project.id} />
				))}
			</div>
		</div>
	);
};

export default Projects;
