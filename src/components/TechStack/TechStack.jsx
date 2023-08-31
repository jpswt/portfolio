import { useContext } from 'react';
import { ThemeContext } from '../../context/Theme';
import arrow from '../Profile/arrow.png';
import arrow2 from '../Profile/arrow2.png';
import arrow5 from './arrow5.svg';
import Icon from '../Icon/Icon';
import './TechStack.css';

const TechStack = () => {
	const [{ theme }] = useContext(ThemeContext);
	return (
		<>
			<div className="container" id="tech">
				<h1 className="title">Technologies</h1>
				<div className="stack-container">
					<Icon icon="javascript/javascript-original" title="Javascript" />
					<Icon icon="react/react-original" title="ReactJS" />
					<Icon icon="nodejs/nodejs-original" title="NodeJS" />
					<Icon icon="redux/redux-original" title="Redux" />
					<Icon
						icon="nextjs/nextjs-original"
						title="NextJS"
						className={theme === 'light' && 'icon-dark'}
					/>
					<Icon icon="typescript/typescript-original" title="Typescript" />
					<Icon icon="html5/html5-original" title="HTML" />
					<Icon icon="css3/css3-original" title="CSS" />
					<Icon icon="bootstrap/bootstrap-original" title="Bootstrap" />
					<Icon icon="sass/sass-original" title="Sass" />
					<Icon icon="tailwindcss/tailwindcss-plain" title="TailwindCSS" />
					<Icon icon="materialui/materialui-original" title="MaterialUI" />
					<Icon icon="express/express-original" title="ExpressJS" />
					<Icon icon="graphql/graphql-plain" title="GraphQL" />
					<Icon icon="mongodb/mongodb-original" title="MongoDB" />
					<Icon icon="mysql/mysql-original" title="MySQL" />
					<Icon icon="postgresql/postgresql-original" title="PostgreSQL" />
					<Icon icon="firebase/firebase-plain" title="Firebase" />
					<Icon icon="mocha/mocha-plain" title="Mocha" />
					<Icon icon="git/git-original" title="Git" />
					<Icon icon="github/github-original" title="Github" />
				</div>
				{/* <div className="tech-arrow-container">
					<img
						className={theme === 'light' ? 'tech-arrow' : 'tech-arrow-dark'}
						src={theme === 'light' ? arrow5 : arrow5}
						alt=""
					/>
					<p className="checkout">
						<a href="#projects">Check out my projects</a>
					</p>
				</div> */}
			</div>
		</>
	);
};
export default TechStack;
