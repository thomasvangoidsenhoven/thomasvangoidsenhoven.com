import type { SkillCategory } from '$lib/types';

export const skills: SkillCategory = {
	languages: [
		{ name: 'C#', level: 95, color: '#239120' },
		{ name: 'TypeScript', level: 85, color: '#3178c6' },
		{ name: 'SQL (PostgreSQL/MSSQL)', level: 90, color: '#f29111' },
		{ name: 'Redis', level: 90, color: '#dc382d' },
		{ name: 'MongoDB', level: 70, color: '#47a248' },
		{ name: 'CLI', level: 80, color: '#5391fe' }
	],
	frameworks: [
		{ name: 'ASP.NET Core', level: 95, color: '#512bd4' },
		{ name: 'Entity Framework', level: 90, color: '#512bd4' },
		{ name: 'Svelte/SvelteKit', level: 90, color: '#ff3e00' },
		{ name: 'Vue/Nuxt', level: 80, color: '#42b883' },
		{ name: 'Angular', level: 75, color: '#dd0031' },
		{ name: 'React', level: 60, color: '#61dafb' }
	],
	tools: [
		{ name: 'Claude Code', level: 95, color: '#0078d4' },
		{ name: 'Docker', level: 80, color: '#2496ed' },
		{ name: 'JetBrains IDEs', level: 90, color: '#cc2927' },
		{ name: 'Git', level: 95, color: '#f05032' },
		{ name: 'Terraform', level: 80, color: '#7b42bc' },
		{ name: 'AWS', level: 85, color: '#ff9900' },
		{ name: 'Azure', level: 70, color: '#0078d4' },
		{ name: 'OpenTelemetry', level: 70, color: '#f5a800' }
	],
	practices: [
		{ name: 'Clean Architecture', level: 90, color: '#512bd4' },
		{ name: 'Hexagonal Design', level: 85, color: '#512bd4' },
		{ name: 'Domain-Driven Design', level: 85, color: '#512bd4' },
		{ name: 'CI/CD Pipelines', level: 95, color: '#0078d4' },
		{ name: 'Microservices', level: 85, color: '#0078d4' },
		{ name: 'REST API Design', level: 90, color: '#0078d4' },
		{ name: 'AGILE/Scrum', level: 85, color: '#239120' },
		{ name: 'OIDC/OAUTH', level: 90, color: '#239120' },
		{ name: 'Testing (Unit & Integration)', level: 85, color: '#239120' }
	]
};
