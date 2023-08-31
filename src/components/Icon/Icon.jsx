import './Icon.css';

const Icon = ({ icon, title }) => {
	return (
		<div className="icon-container">
			<img
				className="icon"
				src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}.svg`}
			/>
			<p className="icon-title">{title}</p>
		</div>
	);
};
export default Icon;
