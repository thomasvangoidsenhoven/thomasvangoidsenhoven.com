import type { Project } from '$lib/types';

export const projects: Project[] = [
	{
		title: 'E-Commerce Platform',
		description: 'Scalable microservices-based e-commerce solution handling 50k+ concurrent users',
		tech: ['ASP.NET Core', 'Azure Service Bus', 'CosmosDB', 'Docker'],
		link: '#'
	},
	{
		title: 'Real-time Analytics Dashboard',
		description: 'Live data visualization platform with SignalR for real-time updates',
		tech: ['Blazor', 'SignalR', 'Azure Functions', 'SQL Server'],
		link: '#'
	},
	{
		title: 'API Gateway Solution',
		description: 'Custom API gateway with rate limiting, authentication, and monitoring',
		tech: ['YARP', 'Redis', 'Prometheus', 'Grafana'],
		link: '#'
	}
];
