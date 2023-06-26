import * as icon  from 'react-icons/si'

const profile = {
	name: 'AIRbauer aka Vik',
	role: 'Front/Back End Developer',
	description: 'Programmer and Gamer based in Germany.',
};

const social = [
	{ icon: icon.SiGithub, link: 'https://github.com/real-airbauer' },
	{ icon: icon.SiDiscord, link: 'https://discord.com/users/549207539544227846' },
	{ icon: icon.SiTwitter, link: 'https://twitter.com/real_airbauer' },
	{ icon: icon.SiInstagram, link: 'https://www.instagram.com/airbauer_real/' },
];

const brand = 'AIRbauer'


const work = [
	{
		name: 'Birthday Bot',
		description: 'A Discord bot that remembers birthdays and calculates the age from them.',
		stack: [
			{ icon: icon.SiPython, name: 'Python' },
			{ icon: icon.SiDiscord, name: 'Discord' },
		],
		linkProject: 'https://real-airbauer.github.io/birthday/',
		linkGithub: 'https://github.com/real-airbauer/birthday',
	},
	{
		name: 'Dev Website',
		description: 'I decided I needed to finally rewrite my site after staring at my horrid old codebase and design for so long. Made using SvelteKit and SCSS.',
		stack: [
			{ icon: icon.SiHtml5, name: 'HTML' },
			{ icon: icon.SiCss3, name: 'CSS' },
			{ icon: icon.SiSvelte, name: 'Svelte' },
			{ icon: icon.SiTypescript, name: 'TypeScript' },
		],
		linkProject: 'https://airbauer-dev.vercel.app/',
		linkGithub: 'https://github.com/real-airbauer/airbauer.dev',
	},
	{
		name: 'Github Theme',
		description: 'A Github Themed Markdown Portfolio Website.',
		stack: [
			{ icon: icon.SiTypescript, name: 'TypeScript' },
			{ icon: icon.SiCss3, name: 'CSS' },
			{ icon: icon.SiJavascript, name: 'Javascript' },
		],
		linkProject: 'https://airbauer-githubthemewebsite.vercel.app/',
		linkGithub: 'https://github.com/real-airbauer/airbauer-githubthemewebsite',
	},
	{
		name: 'Calculator',
		description: 'A Simple Calculator',
		stack: [
			{ icon: icon.SiTypescript, name: 'TypeScript' },
			{ icon: icon.SiCss3, name: 'CSS' },
			{ icon: icon.SiJavascript, name: 'Javascript' },
			{ icon: icon.SiHtml5, name: 'HTML' },
		],
		linkProject: 'https://taschenrechner-mu.vercel.app/',
		linkGithub: 'https://github.com/real-airbauer/Taschenrechner',
	},
]


const stack = [
	{
		name: 'Front End',
		items: [
			{ icon: icon.SiHtml5, name: 'HTML' },
			{ icon: icon.SiCss3, name: 'CSS' },
			{ icon: icon.SiJavascript, name: 'Javascript' },
			{ icon: icon.SiTypescript, name: 'Typescript' },
			{ icon: icon.SiReact, name: 'React', },
			{ icon: icon.SiSvelte, name: 'Svelte', },
			{ icon: icon.SiVite, name: 'ViteJS', },
		],
	},
	{
		name: 'Back End',
		items: [
			{ icon: icon.SiNodedotjs, name: 'NodeJS' },
			{ icon: icon.SiMongodb, name: 'MongoDB', },
			{ icon: icon.SiFirebase, name: 'Firebase', },
		],
	},
]

const contact = {
	description: 'Mail Me or just DM Me on Discord <3',
	email: 'deinemudda@airbauer.eu'
}

export { profile, social, work, stack, contact, brand }