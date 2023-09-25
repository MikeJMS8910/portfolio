import Assets from './data/assets';
import type { Skill } from './types';
import svelte from './md/svelte.md?raw';

const s = (skill: Skill) => skill;

export type ArrayElementType<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MY_SKILLS = [
	s({
		slug: 'js',
		color: 'yellow',
		description:
			'I do most of my work in vanilla JavaScript. I find this to be the best solution when building the front-end of a website since it can easily be used to manipulate html and communicate with a backend. ',
		logo: Assets.JavaScript,
		name: 'Javascript'
	}),
	s({
		slug: 'css',
		color: 'blue',
		description:
			'CSS is the best way to add design to the the front-end of a website. I will use this to make a site look clean.',
		logo: Assets.CSS,
		name: 'CSS'
	}),
	s({
		slug: 'html',
		color: 'orange',
		description:
			'I always use HTML when building out the front-end of a website. It is the programming language of the web.',
		logo: Assets.HTML,
		name: 'HTML'
	}),
	s({
		slug: 'react',
		color: 'cyan',
		description:
			'I don not use React Js a lot but I have in the past and learned about it when recieving my fullstack development techdegree.',
		logo: Assets.ReactJs,
		name: 'React Js'
	}),
	s({
		slug: 'py',
		color: 'yellow',
		description:
			'Python is the best solution when creating a program that deals with a lot of information and number that does not rely on a web page.',
		logo: Assets.Python,
		name: 'Python'
	}),
	s({
		slug: 'node',
		color: 'green',
		description:
			'I build my backends with Node Js since it is one of the most popular and fastest ways to build a strong backend server for a web application.',
		logo: Assets.NodeJs,
		name: 'Node Js'
	}),
	s({
		slug: 'express',
		color: 'grey',
		description:
			'Express is the easiest and most popular way to spin up a web server and to buld a strong back end with Node Js.',
		logo: Assets.ExpressJs,
		name: 'Express Js'
	}),
	s({
		slug: 'firebase',
		color: 'orange',
		description:
			'From Google, firebase comes with many tools to make web development more efficient and secure.',
		logo: Assets.Firebase,
		name: 'Firebase'
	}),
	s({
		slug: 'mongo',
		color: 'green',
		description:
			'The best way to make a no SQL database is with MongoDB so that is what I use when I need to save data. No SQL servers are less vulnerable than regular SQL servers.',
		logo: Assets.MongoDB,
		name: 'MongoDB'
	})
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));
