import type { SkillCategory } from '$lib/types';

export const skills: SkillCategory = {
	languages: [
		{ name: 'C#', level: 95, color: '#239120' },
		{ name: 'TypeScript', level: 85, color: '#3178c6' },
		{ name: 'SQL', level: 90, color: '#f29111' },
		{ name: 'CLI', level: 80, color: '#5391fe' }
	],
	frameworks: [
		{ name: 'ASP.NET Core', level: 95, color: '#512bd4' },
		{ name: 'Entity Framework', level: 90, color: '#512bd4' },
		{ name: 'Svelte', level: 90, color: '#512bd4' },
		{ name: 'Vue', level: 80, color: '#0078d4' }
	],
	tools: [
		{ name: 'Claude Code', level: 95, color: '#0078d4' },
		{ name: 'Docker', level: 80, color: '#2496ed' },
		{ name: 'Jetbrains IDEs', level: 90, color: '#cc2927' },
		{ name: 'Git', level: 95, color: '#f05032' }
	],
	practices: [
		{ name: 'Clean Architecture', level: 90 },
		{ name: 'Hexagonal Design', level: 85 },
		{ name: 'Domain-Driven Design', level: 85 },
		{ name: 'CI/CD Pipelines', level: 95 }
	]
};
