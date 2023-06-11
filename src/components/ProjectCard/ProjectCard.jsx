import './ProjectCard.css';

const ProjectCard = ({ project }) => {
	return (
		<div className="card-wrapper">
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
		</div>
	);
};

export default ProjectCard;
