import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'Side-Hustle Programmer',
		company: 'Self-employed',
		description: 'Just played around with Python when I had free time.',
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date("August 2018"), to: new Date("May 2021") },
		skills: getSkills('py'),
		name: 'Side-Hustle Programmer',
		color: '#F0E15F',
		links: [],
		logo: 'https://pbs.twimg.com/profile_images/1577395477137526784/ECF9IL4v_400x400.jpg'
	},
	{
		slug: 'Online Course',
		company: 'Self-employed',
		description: 'Took an online cource(treehouse) for fullstack javascript.',
		contract: ContractType.Student,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date("May 2021"), to: new Date("August 2021") },
		skills: getSkills('css', 'html', 'js', 'node', 'react'),
		name: 'Student - Treehouse',
		color: '#ffffff',
		links: [],
		logo: Assets.NodeJs
	},
	{
		slug: 'Freelancer',
		company: 'Self-employed',
		description: 'Created awsome software for my clients. ',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date("January 2023") },
		skills: getSkills('css', 'html', 'js', 'node', 'py', 'mongo', 'firebase', 'express'),
		name: 'Freelancer',
		color: '#ffffff',
		links: [],
		logo: 'https://pbs.twimg.com/profile_images/1577395477137526784/ECF9IL4v_400x400.jpg'
	},
	{
		slug: 'Founder',
		company: 'sellsource.co',
		description: 'Started my own Saas company. Sellsource is an online marketplace for developers. ',
		contract: ContractType.Founder,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date("May 2023") },
		skills: getSkills('css', 'html', 'node', 'mongo'),
		name: 'Founder',
		color: '#ffffff',
		links: [{to: 'sellsource.co', label: 'sellsource.co'}],
		logo: "https://i.ibb.co/qktrdL6/logo.png"
	}
];

export default MY_EXPERIENCES;
