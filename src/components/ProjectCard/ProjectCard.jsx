import './ProjectCard.css';

const ProjectCard = ({ project }) => {
	return (
		<div className="card-wrapper">
			<div className="card-container " key={project.id}>
				<div className="image-container">
					<img src={project.bg} alt={project.title} className="card-image" />
				</div>
				<h2 className="card-titles">{project.title}</h2>
				<p>{project.description}</p>
				<h3 className="card-titles ">Tech Stack</h3>
				<div className="stack-container">
					{Object.values(project.stack).map((el, idx) => (
						<div key={idx}>{el}</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
