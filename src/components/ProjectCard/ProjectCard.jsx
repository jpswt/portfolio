import './ProjectCard.css';

const ProjectCard = ({ project }) => {
	return (
		<div className="card-wrapper">
			<div className="card-container" key={project.id}>
				<div>
					<img src={project.bg} alt={project.title} className="card-image" />
				</div>
				<h2>{project.title}</h2>
				<p>{project.description}</p>
				<h3>Tech Stack</h3>
				<div className="stack-container">
					{Object.values(project.stack).map((el) => (
						<div>{el}</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
