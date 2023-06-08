import './ProjectCard.css';
import arrow from './arrow.png';

const ProjectCard = ({ project }) => {
	return (
		<div className="card-wrapper">
			<div className="card-container" key={project.id}>
				{project.id % 2 !== 0 ? (
					<>
						<div
							className={
								project.id % 2 === 0
									? 'image-container even'
									: 'image-container odd'
							}
						>
							<img
								src={project.bg}
								alt={project.title}
								className="card-image"
							/>
							{/* <img className="arrow" src={arrow} alt="" /> */}
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

								<a className="buttons"> Github Code </a>
							</div>
						</div>
					</>
				) : (
					<>
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

								<a className="buttons"> Github Code </a>
							</div>
						</div>
						<div
							className={
								project.id % 2 === 0
									? 'image-container even'
									: 'image-container odd'
							}
						>
							<img
								src={project.bg}
								alt={project.title}
								className="card-image"
							/>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default ProjectCard;
