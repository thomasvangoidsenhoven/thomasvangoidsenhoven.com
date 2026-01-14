import type { Experience } from '$lib/types';

export const experiences: Experience[] = [
	{
		title: 'Software Developer - Freelance',
		company: 'Twipe',
		period: 'Jun 2023 - Present',
		description:
			'Creating, maintaining and optimizing .NET based newspaper processing pipelines managed by Terraform on AWS. Integrating Authentication/Authorization systems (OIDC, Piano, Auth0, Keycloak). Migration of legacy .NET endpoints to Domain Driven Hexagonal design architecture.',
		highlights: ['AWS/Terraform', 'Auth Systems', 'DDD/Hexagonal']
	},
	{
		title: 'Software Engineer - Internal',
		company: '3P',
		period: 'Nov 2021 - Jun 2023',
		description:
			'Responsible for the technical analysis / design and creation of new web modules using Vue/Typescript/Nuxt for the front-end and creating/integrating this with a .NET 6/EFCORE/MSSQL backend stack. Maintained WINFORM/C#/Angular desktop projects and created frontend component libraries (BFF).',
		highlights: ['Vue/Nuxt', '.NET 6/EF Core', 'BFF Architecture']
	},
	{
		title: 'Software Engineer - Consultant',
		company: 'Inetum / RealDolmen / GFI',
		period: 'Feb 2019 - Nov 2021',
		description:
			'Consultant work for J&J (compound testing dashboards), SES Vanderhave (seed batch quality management), Toyota (regression testing tools), and internal R&D team creating chatbots with LUIS.AI.',
		highlights: ['.NET Core', 'Angular', 'LUIS.AI/Chatbots']
	}
];
