const lostUrl = new URL('../../lost.svg', import.meta.url).href;
const noteUrl = new URL('../../note.svg', import.meta.url).href;
const lampUrl = new URL('../../lamp.svg', import.meta.url).href;
const beardUrl = new URL('../../beard.svg', import.meta.url).href;
export const data = [
	{
		id: 1,
		bg: `${lostUrl}`,
		color: 'red',
		title: 'Lost Skate Shop',
		description:
			'A user friendly e-commerce site with for all of your skateboarding needs. Detailed product descriptions and high-res photos, allow you to make informed decisions about each product. A personal project designed to learn Redux Toolkit and Stripe API integration.',
		stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Sass'],
		site: 'https://lostskateshop.onrender.com/',
		gh: 'https://github.com/jpswt/LostSkateShop',
	},
	{
		id: 2,
		bg: `${noteUrl}`,
		color: 'blue',
		title: 'Note For Note',
		description:
			'Showcase your musical journey, share your insights, connect and collaborate with fellow artists in a vibrant and engaging platform designed exclusively for the guitarist community. It is a Medium.com theme inspired application built to learn MongoDB integrate Multer/Firebase Storage.',
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
		id: 3,
		bg: `${lampUrl}`,
		color: 'purple',
		title: 'LAMP - Light a Meaningful Path',
		description: 'Volunteer Site',
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
		id: 4,
		bg: `${beardUrl}`,
		color: 'yellow',
		title: 'Rugged Beard',
		description: 'Barber Site',
		stack: ['HTML', 'CSS', 'Javascript'],
		site: 'https://jpswt.github.io/BarberShop-CheckPoint/',
		gh: 'https://github.com/jpswt/BarberShop-CheckPoint',
	},
];
