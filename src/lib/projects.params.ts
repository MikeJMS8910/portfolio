import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'sellsource.co',
		color: '#00FFA4',
		description:
			'An online marketplace for developers to sell their programs to other users. Currently a work in progress.',
		links: [{ to: 'https://sellsource.co', label: 'Live Demo' }],
		logo: "https://i.ibb.co/qktrdL6/logo.png",
		name: 'sellsource.co',
		period: {
			from: new Date("July 1, 2023")
		},
		skills: getSkills('node', 'css', 'html', 'mongo'),
		type: 'Marketplace'
	},
	{
		slug: 'inventory.ai',
		color: '#061218',
		description:
			'An AI mobile app that is able to generate the price of an item based on pictures that the user uploads. They can then save those items to their inventory and easily sell them on ebay.',
		links: [{ to: 'https://www.youtube.com/watch?v=Knr71Cuw9no&ab_channel=MichaelSutu', label: 'Video' }],
		logo: "https://i.ibb.co/njNNY4Z/inventory.png",
		name: 'inventory.ai',
		period: {
			from: new Date("January 2023"),
			to: new Date("May 2023")
		},
		skills: getSkills('node', 'js', 'html', 'css', 'mongo'),
		type: 'Ai Tool'
	},
	{
		slug: 'Hospitality AI',
		color: '#010412',
		description:
			'Makes the hospitality industry easier by having chatbots be able to answer common questions from guests.',
		links: [{ to: 'https://www.youtube.com/watch?v=1aM0-2ZP6Sk', label: 'Video #1' }, { to: 'https://youtu.be/4jWfoNnYit4', label: 'Video #2'}],
		logo: Assets.Unknown,
		name: 'Hospitality AI',
		period: {
			from: new Date("August 2023"),
			to: new Date("September 2023")
		},
		skills: getSkills('node', 'express', 'mongo', 'html', 'css', 'js'),
		type: 'Ai Tool'
	},
	{
		slug: 'AlphaComms',
		color: '#ffee00',
		description:
			'A PR AI tool that specializes in writing announcements for companies.',
		links: [{ to: 'https://www.youtube.com/watch?v=mNSwK3kOW7Y&ab_channel=MichaelSutu', label: 'Video' }],
		logo: Assets.Unknown,
		name: 'AlphaComms',
		period: {
			from: new Date("August 2023"),
			to: new Date("September 2023")
		},
		skills: getSkills('node', 'express', 'html', 'css', 'js'),
		type: 'Ai Tool'
	},
	{
		slug: 'Health Check-Up App',
		color: '#1D9EDA',
		description:
			'A simple doctor chat bot as well as an evaluation quiz to let you know how well you are doing.',
		links: [{ to: 'https://check-up.michael8910.repl.co/', label: 'Live Demo' }, { to: 'https://replit.com/@Michael8910/Check-Up', label: 'Source Code'}],
		logo: "https://i.ibb.co/H4jjPYR/health-icon-removebg-preview.png",
		name: 'Health Check-Up App',
		period: {
			from: new Date("April 2022"),
			to: new Date("May 2022")
		},
		skills: getSkills('js', 'html', 'css'),
		type: 'Chatbot'
	},
	{
		slug: 'Sleeper GPT',
		color: '#F67570',
		description:
			'An essay rewriting tool to help pass GPT detection.',
		links: [{ to: 'https://sleepergpt.michael8910.repl.co/', label: 'Live Demo'}, { to: 'https://replit.com/@Michael8910/SleeperGPT', label: 'Source Code'}],
		logo: "https://i.ibb.co/f9VGhqX/Sleeper-GPT.png",
		name: 'Sleeper GPT',
		period: {
			from: new Date("March 2022"),
			to: new Date("April 2022")
		},
		skills: getSkills('js', 'html', 'css'),
		type: 'Ai Tool'
	},
	{
		slug: 'Cobra',
		color: '#FF5103',
		description:
			'A simple programming language that has a more natural syntax and is made and ran in python.',
		links: [{ to: 'https://replit.com/@Michael8910/Cobra', label: 'Live Demo/ Source Code' }],
		logo: "https://i.ibb.co/nj08ZZt/cobra.png",
		name: 'Cobra',
		period: {
			from: new Date("October 2022"),
			to: new Date("December 2022")
		},
		skills: getSkills('py'),
		type: 'Programming Language'
	},
	{
		slug: 'Stock Algo',
		color: '#808080',
		description:
			'A stock trading algorithm that makes decisions based on news articles when they are posted. This project is a work in progress.',
		links: [{ to: 'https://replit.com/@Michael8910/Stock-Algo#save.json', label: 'Source Code' }, { to: 'https://stock-algo.michael8910.repl.co/', label: 'Live Demo'}],
		logo: 'https://pbs.twimg.com/profile_images/1577395477137526784/ECF9IL4v_400x400.jpg',
		name: 'Stock Algo',
		period: {
			from: new Date("August 2023"),
			to: new Date("September 2023")
		},
		skills: getSkills('node', 'express'),
		type: 'Algorithm'
	},
	{
		slug: 'Autofill4JobApply',
		color: '#ffb300',
		description:
			'A chrome plugin that can auto fill feilds on a wide variety of job application forms. ',
		links: [],
		logo: Assets.Unknown,
		name: 'Autofill4JobApply',
		period: {
			from: new Date("May 2023"),
			to: new Date("June 2023")
		},
		skills: getSkills('html', 'css', 'js'),
		type: 'Chrome Plugin'
	},
	{
		slug: 'Bible Whatsapp Bot',
		color: '#31B444',
		description:
			'A chatbot that lives on Whatsapp that can giver daily inspiration to its users.',
		links: [],
		logo: "https://i.ibb.co/XjZHv1x/whatsapp.png",
		name: 'Bible Whatsapp Bot',
		period: {
			from: new Date("May 2023"),
			to: new Date("June 2023")
		},
		skills: getSkills('node'),
		type: 'Ai Tool'
	},
	{
		slug: 'Ai Video Generator',
		color: '#000000',
		description:
			'Videos generated by taking in a piece of text, writing it on a video background, and reading the words allowed using Elevenlabs.',
		links: [],
		logo: Assets.Unknown,
		name: 'Ai Video Generator',
		period: {
			from: new Date("July 2023"),
			to: new Date("August 2023")
		},
		skills: getSkills('node', 'js'),
		type: 'Ai Tool'
	},
	{
		slug: 'Hand AI',
		color: '#ffffff',
		description:
			'Control an element on the website by just moving your hand in front of the web camera. Hand is tracked using media pipe.',
		links: [{ to: 'https://handai.michael8910.repl.co/', label: 'Live Demo' }, { to: 'https://replit.com/@Michael8910/HandAI', label: 'Source Code'}],
		logo: "https://i.ibb.co/Zxx2Yp8/hand.jpg",
		name: 'Hand AI',
		period: {
			from: new Date("Febuary 2023"),
			to: new Date("March 2023")
		},
		skills: getSkills('js', 'html', 'css'),
		type: 'Ai Tool'
	},
	{
		slug: 'Poker Hand Generator',
		color: '#ff0019',
		description:
			'Generate millions of poker hands in seconds to test out probabilities.',
		links: [{ to: 'https://replit.com/@Michael8910/Poker-Hand-Generator', label: 'Live Demo/ Source Code' }],
		logo: "https://replit.com/cdn-cgi/image/width=3840,quality=80,format=auto/https://storage.googleapis.com/replit/images/1659519445974_b5b1ca247714e462f7b49c84ebace721.jpeg",
		name: 'Poker Hand Generator',
		period: {
			from: new Date("November 2022"),
			to: new Date("December 2022")
		},
		skills: getSkills('py'),
		type: 'Statistics'
	},
	{
		slug: 'Asteroids.io',
		color: '#ffffff',
		description:
			'A remake of an old retro arcade game for the web.',
		links: [{ to: 'https://asteroidsio.michael8910.repl.co/', label: 'Live Demo' }, { to: 'https://replit.com/@Michael8910/Asteroidsio', label: 'Source Code' }],
		logo: "https://i.ibb.co/Dwhkbnq/asteroids.png",
		name: 'Asteroids.io',
		period: {
			from: new Date("January 2022"),
			to: new Date("Febuary 2022")
		},
		skills: getSkills('html', 'css', 'js'),
		type: 'Web Game'
	}
];

export default MY_PROJECTS;
