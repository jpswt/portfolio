import { useEffect, useRef } from 'react';
import { data } from '../../data/Data';
import './Projects.css';
// import { motion, useScroll } from 'framer-motion';

import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectCard from '../ProjectCard/ProjectCard';

const Projects = () => {
	// const ref = useRef(null);
	// const { scrollYProgress } = useScroll({
	// 	target: ref,
	// 	offset: ['0 1', '1.33 1'],
	// });

	useEffect(() => {
		AOS.init({
			disable: 'phone',
			duration: 700,
			easing: 'east-out-cubic',
		});
	}, []);

	return (
		<div className="projects-container" id="projects">
			<div className="title-container">
				<h1 className="project-title">Projects</h1>
			</div>
			<div className="project-container">
				{data.map((project) => (
					<ProjectCard project={project} key={project.id} />
				))}
			</div>
		</div>
	);
};

export default Projects;
