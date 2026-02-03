import type { Project } from '$lib/types';

export const projects: Project[] = [
	{
		title: 'Newspaper Processing Pipelines',
		description: 'Creating, maintaining and optimizing .NET based newspaper processing pipelines managed by Infrastructure as Code on AWS',
		tech: ['.NET', 'AWS Lambda/SQS', 'Terraform', 'Bitbucket CI/CD'],
		link: '#'
	},
	{
		title: 'Auth System Integrations',
		description: 'Integrating and setting up Authentication/Authorization systems across multiple platforms and providers',
		tech: ['OIDC/OAuth', 'Auth0', 'Piano', 'Keycloak'],
		link: '#'
	},
	{
		title: 'DDD Hexagonal Architecture Migration',
		description:
			'Migration of legacy .NET endpoints to a new Domain Driven Hexagonal design architecture',
		tech: ['.NET', 'DDD', 'Hexagonal Architecture', 'API Design'],
		link: '#'
	},
	{
		title: 'Regression Testing Tools',
		description: 'Creating regression testing tools for Toyota using .NET, Nunjucks and MongoDB',
		tech: ['.NET', 'Nunjucks', 'MongoDB', 'Test Automation'],
		link: '#'
	},
	{
		title: 'Seed Batch Quality Management',
		description: 'Application to check the quality and manage approval of sugar beet seed batches for SES Vanderhave',
		tech: ['.NET Core', 'Oracle SQL', 'Entity Framework Core', 'Angular 6'],
		link: '#'
	},
	{
		title: 'Compound Testing Dashboards',
		description: 'Creating dashboards around broad spectrum compound testing for Johnson & Johnson',
		tech: ['.NET', 'AngularJS', 'SQL Server', 'Data Visualization'],
		link: '#'
	}
];
