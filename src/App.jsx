import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from './context/Theme';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import TechStack from './components/TechStack/TechStack';

function App() {
	const [count, setCount] = useState(0);
	const [{ theme }] = useContext(ThemeContext);

	useEffect(() => {
		AOS.init({
			disable: 'phone',
			duration: 700,
			easing: 'east-out-cubic',
		});
	}, []);

	return (
		<div className={`${theme} app`}>
			<main id="home">
				<Navbar />
				<Profile />
				<Projects />
				<TechStack />
				<Contact />
				{/* <h1 data-aos="fade-up">Vite + React</h1> */}
			</main>
		</div>
	);
}

export default App;
