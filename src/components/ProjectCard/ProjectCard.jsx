import './ProjectCard.css';
import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

const ProjectCard = ({ project }) => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['0 1', '1.33 1'],
	});
	return (
		<motion.div
			style={{ scale: scrollYProgress, opacity: scrollYProgress }}
			className="card-wrapper"
			ref={ref}
		>
			{project.id % 2 !== 0 ? (
				<div className="card-container left" key={project.id}>
					<div className="image-container">
						<img
							src={project.bg}
							alt={project.title}
							className={
								project.id % 2 === 0 ? 'card-image-even' : 'card-image-odd'
							}
						/>
					</div>
					<div className="details-container">
						<h2 className="card-titles">{project.title}</h2>
						<p className="card-text">{project.description}</p>
						<h3 className="card-titles ">Tech Stack</h3>
						<div className="stack-container card-text">
							{Object.values(project.stack).map((el, idx) => (
								<span key={idx}>{el}</span>
							))}
						</div>
						<div className="btn-container">
							<a
								className="buttons"
								href={project.site}
								target="_blank"
								rel="noopener noreferrer"
							>
								View Site
							</a>

							<a
								className="buttons"
								href={project.gh}
								target="_blank"
								rel="noopener noreferrer"
							>
								Github Code
							</a>
						</div>
					</div>
				</div>
			) : (
				<div className="card-container right" key={project.id}>
					<div className="details-container">
						<h2 className="card-titles">{project.title}</h2>
						<p className="card-text">{project.description}</p>
						<h3 className="card-titles ">Tech Stack</h3>
						<div className="stack-container card-text">
							{Object.values(project.stack).map((el, idx) => (
								<span key={idx}>{el}</span>
							))}
						</div>
						<div className="btn-container">
							<a
								className="buttons"
								href={project.site}
								target="_blank"
								rel="noopener noreferrer"
							>
								View Site
							</a>

							<a
								className="buttons"
								href={project.gh}
								target="_blank"
								rel="noopener noreferrer"
							>
								Github Code
							</a>
						</div>
					</div>
					<div className="image-container">
						<img
							src={project.bg}
							alt={project.title}
							className={
								project.id % 2 === 0 ? 'card-image-even' : 'card-image-odd'
							}
						/>
					</div>
				</div>
			)}
		</motion.div>
	);
};

export default ProjectCard;
