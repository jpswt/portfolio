const lostUrl = new URL('../../lost.svg', import.meta.url).href;
const cryptoUrl = new URL('../../crypto.svg', import.meta.url).href;
const noteUrl = new URL('../../note.svg', import.meta.url).href;
const lampUrl = new URL('../../lamp.svg', import.meta.url).href;
const beardUrl = new URL('../../beard.svg', import.meta.url).href;
export const data = [
	{
		id: 1,
		bg: `${noteUrl}`,
		color: 'blue',
		title: 'Note For Note',
		description:
			'Showcase your musical journey, share your insights, connect and collaborate with fellow artists in a vibrant and engaging platform designed exclusively for the guitarist community. It is a Medium.com theme inspired application built to learn MongoDB and Multer/Firebase for image storage.',
		stack: [
			'MongoDB',
			'Express.js',
			'React.js',
			'Node.js',
			'Firebase',
			'TailwindCSS',
		],
		site: 'https://notefornote.onrender.com/',
		gh: 'https://github.com/jpswt/NoteForNote',
	},
	{
		id: 2,
		bg: `${cryptoUrl}`,
		color: 'red',
		title: 'CryptoCheck',
		description:
			'CryptoCheck is a responsive web application designed for cryptocurrency enthusiasts to monitor real-time data and insightful analysis. This user-friendly app offers a seamless experience for tracking, managing, and staying informed about the volatile world of digital currencies.',
		stack: ['React.js', 'TailwindCSS', 'DaisyUI', 'Firebase DB'],
		site: 'https://cryptocheck-0ye2.onrender.com/',
		gh: 'https://github.com/jpswt/CryptoCheck',
	},
	{
		id: 3,
		bg: `${lostUrl}`,
		color: 'red',
		title: 'Lost Skate Shop',
		description:
			'A user friendly e-commerce site for all of your skateboarding needs. Detailed product descriptions and high-res photos, allow you to make informed decisions about each product. A personal project designed to learn about an e-commerce platform, Redux Toolkit and Stripe API integration.',
		stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Sass'],
		site: 'https://lostskateshop.onrender.com/',
		gh: 'https://github.com/jpswt/LostSkateShop',
	},
	{
		id: 4,
		bg: `${lampUrl}`,
		color: 'purple',
		title: 'LAMP - Light a Meaningful Path',
		description: `LAMP connects passionate individuals with meaningful opportunities to make a positive impact in their communities. Whether you're looking to give back, gain new experiences, or connect with like-minded individuals, our app makes it easy to find and engage in volunteer activities. This project `,
		stack: [
			'MYSQL DB',
			'Express.js',
			'React.js',
			'Node.js',
			'Material UI',
			'CSS',
		],
		site: 'https://lamp-app.onrender.com/',
		gh: 'https://github.com/jpswt/LAMP_APP',
	},
	{
		id: 5,
		bg: `${beardUrl}`,
		color: 'yellow',
		title: 'Rugged Beard',
		description:
			'Welcome to Rugged Beard, an exceptional grooming experience that combines style, precision and relaxation.  Browse out gallery for inspiration and book your next appointment.  This frontend project was inspired from a website template to create a responsive, pixel perfect clone.',
		stack: ['HTML', 'CSS', 'Javascript'],
		site: 'https://jpswt.github.io/BarberShop-CheckPoint/',
		gh: 'https://github.com/jpswt/BarberShop-CheckPoint',
	},
];
