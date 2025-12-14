import type { SkillCategory } from '$lib/types';

export const skills: SkillCategory = {
	languages: [
		{ name: 'C#', level: 95, color: '#239120' },
		{ name: 'TypeScript', level: 85, color: '#3178c6' },
		{ name: 'SQL', level: 90, color: '#f29111' },
		{ name: 'PowerShell', level: 75, color: '#5391fe' }
	],
	frameworks: [
		{ name: 'ASP.NET Core', level: 95, color: '#512bd4' },
		{ name: 'Entity Framework', level: 90, color: '#512bd4' },
		{ name: 'Blazor', level: 80, color: '#512bd4' },
		{ name: 'Azure Functions', level: 85, color: '#0078d4' }
	],
	tools: [
		{ name: 'Azure DevOps', level: 90, color: '#0078d4' },
		{ name: 'Docker', level: 80, color: '#2496ed' },
		{ name: 'SQL Server', level: 90, color: '#cc2927' },
		{ name: 'Git', level: 95, color: '#f05032' }
	],
	practices: [
		{ name: 'Clean Architecture', level: 90 },
		{ name: 'CQRS/MediatR', level: 85 },
		{ name: 'Domain-Driven Design', level: 80 },
		{ name: 'CI/CD Pipelines', level: 90 }
	]
};
