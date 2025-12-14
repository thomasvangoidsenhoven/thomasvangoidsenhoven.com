export interface NavItem {
	id: string;
	label: string;
}

export interface Skill {
	name: string;
	level: number;
	color?: string;
}

export interface SkillCategory {
	languages: Skill[];
	frameworks: Skill[];
	tools: Skill[];
	practices: Skill[];
}

export interface Experience {
	title: string;
	company: string;
	period: string;
	description: string;
	highlights: string[];
}

export interface Project {
	title: string;
	description: string;
	tech: string[];
	link: string;
}
