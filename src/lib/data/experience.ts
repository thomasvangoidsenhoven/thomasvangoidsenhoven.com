import type { Experience } from '$lib/types';

export const experiences: Experience[] = [
	{
		title: 'Senior .NET Developer',
		company: 'Tech Solutions Inc.',
		period: '2021 - Present',
		description:
			'Leading backend development for enterprise-scale microservices architecture. Designing and implementing RESTful APIs serving 10M+ requests daily.',
		highlights: ['Microservices', 'Azure', 'Event-Driven Architecture']
	},
	{
		title: '.NET Developer',
		company: 'Digital Innovations',
		period: '2018 - 2021',
		description:
			'Built and maintained multiple ASP.NET Core applications. Implemented CI/CD pipelines and automated testing strategies.',
		highlights: ['ASP.NET Core', 'Entity Framework', 'Azure DevOps']
	},
	{
		title: 'Junior Developer',
		company: 'Software Startup',
		period: '2016 - 2018',
		description:
			'Developed full-stack applications using C# and Angular. Participated in agile development processes.',
		highlights: ['Full-Stack', 'Agile', 'Team Collaboration']
	}
];
