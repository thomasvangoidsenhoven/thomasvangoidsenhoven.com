<script lang="ts">
	import { onMount } from 'svelte';

	let mounted = $state(false);
	let activeSection = $state('home');

	const navItems = [
		{ id: 'home', label: 'Home' },
		{ id: 'about', label: 'About' },
		{ id: 'skills', label: 'Skills' },
		{ id: 'experience', label: 'Experience' },
		{ id: 'projects', label: 'Projects' },
		{ id: 'contact', label: 'Contact' }
	];

	const skills = {
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

	const experiences = [
		{
			title: 'Senior .NET Developer',
			company: 'Tech Solutions Inc.',
			period: '2021 - Present',
			description: 'Leading backend development for enterprise-scale microservices architecture. Designing and implementing RESTful APIs serving 10M+ requests daily.',
			highlights: ['Microservices', 'Azure', 'Event-Driven Architecture']
		},
		{
			title: '.NET Developer',
			company: 'Digital Innovations',
			period: '2018 - 2021',
			description: 'Built and maintained multiple ASP.NET Core applications. Implemented CI/CD pipelines and automated testing strategies.',
			highlights: ['ASP.NET Core', 'Entity Framework', 'Azure DevOps']
		},
		{
			title: 'Junior Developer',
			company: 'Software Startup',
			period: '2016 - 2018',
			description: 'Developed full-stack applications using C# and Angular. Participated in agile development processes.',
			highlights: ['Full-Stack', 'Agile', 'Team Collaboration']
		}
	];

	const projects = [
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

	onMount(() => {
		mounted = true;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						activeSection = entry.target.id;
					}
				});
			},
			{ threshold: 0.3 }
		);

		document.querySelectorAll('section[id]').forEach((section) => {
			observer.observe(section);
		});

		return () => observer.disconnect();
	});
</script>

<svelte:head>
	<title>Thomas Van Goidsenhoven | .NET Software Engineer</title>
	<meta name="description" content="Senior .NET Software Engineer specializing in building scalable, cloud-native applications with ASP.NET Core, Azure, and modern architecture patterns." />
</svelte:head>

<!-- Navigation -->
<nav class="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-bg-deep/80 border-b border-border">
	<div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
		<a href="#home" class="font-[family-name:var(--font-display)] font-bold text-xl tracking-tight">
			<span class="text-gradient">TVG</span>
		</a>
		<div class="hidden md:flex items-center gap-1">
			{#each navItems as item}
				<a
					href="#{item.id}"
					class="px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg {activeSection === item.id
						? 'text-text-primary bg-bg-elevated'
						: 'text-text-secondary hover:text-text-primary'}"
				>
					{item.label}
				</a>
			{/each}
		</div>
		<a
			href="/Thomas_Van_Goidsenhoven_CV.pdf"
			download
			class="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium bg-dotnet hover:bg-dotnet-light transition-colors rounded-lg"
		>
			<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
			</svg>
			Download CV
		</a>
	</div>
</nav>

<!-- Hero Section -->
<section id="home" class="min-h-screen flex items-center justify-center relative overflow-hidden bg-grid">
	<!-- Ambient glow effects -->
	<div class="absolute top-1/4 -left-32 w-96 h-96 bg-dotnet/20 rounded-full blur-[128px] animate-pulse"></div>
	<div class="absolute bottom-1/4 -right-32 w-96 h-96 bg-azure/20 rounded-full blur-[128px] animate-pulse" style="animation-delay: 1s"></div>

	<div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
		<div
			class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-card border border-border mb-8 transition-all duration-700 {mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}"
		>
			<span class="w-2 h-2 rounded-full bg-csharp animate-pulse"></span>
			<span class="text-sm text-text-secondary font-[family-name:var(--font-mono)]">Available for new opportunities</span>
		</div>

		<h1
			class="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-bold mb-6 transition-all duration-700 delay-100 {mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}"
		>
			Thomas Van<br />
			<span class="text-gradient">Goidsenhoven</span>
		</h1>

		<p
			class="text-xl md:text-2xl text-text-secondary mb-4 transition-all duration-700 delay-200 {mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}"
		>
			Senior <span class="text-dotnet-light font-semibold">.NET</span> Software Engineer
		</p>

		<p
			class="text-lg text-text-muted max-w-2xl mx-auto mb-12 transition-all duration-700 delay-300 {mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}"
		>
			Building scalable, cloud-native applications with a passion for clean architecture and developer experience.
		</p>

		<div
			class="flex flex-wrap justify-center gap-4 transition-all duration-700 delay-400 {mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}"
		>
			<a
				href="#contact"
				class="group px-8 py-4 bg-dotnet hover:bg-dotnet-light transition-all duration-300 rounded-xl font-semibold flex items-center gap-3 glow-dotnet"
			>
				Get in Touch
				<svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
				</svg>
			</a>
			<a
				href="#projects"
				class="px-8 py-4 bg-bg-card hover:bg-bg-elevated border border-border hover:border-border-accent transition-all duration-300 rounded-xl font-semibold"
			>
				View Projects
			</a>
		</div>

		<!-- Scroll indicator -->
		<div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
			<svg class="w-6 h-6 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
			</svg>
		</div>
	</div>
</section>

<!-- About Section -->
<section id="about" class="py-32 relative">
	<div class="max-w-6xl mx-auto px-6">
		<div class="grid md:grid-cols-2 gap-16 items-center">
			<div>
				<span class="font-[family-name:var(--font-mono)] text-sm text-dotnet-light mb-4 block">// ABOUT ME</span>
				<h2 class="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mb-6">
					Crafting Digital<br />
					<span class="text-gradient">Experiences</span>
				</h2>
				<div class="space-y-4 text-text-secondary text-lg leading-relaxed">
					<p>
						With over <span class="text-text-primary font-semibold">8 years</span> of experience in .NET development,
						I specialize in building robust, scalable backend systems and cloud-native applications.
					</p>
					<p>
						My expertise spans the entire .NET ecosystem, from ASP.NET Core APIs to Azure cloud services,
						with a strong focus on <span class="text-dotnet-light">clean architecture</span> and
						<span class="text-azure-light">DevOps practices</span>.
					</p>
					<p>
						I'm passionate about writing maintainable code, mentoring teams, and staying at the forefront
						of modern software development practices.
					</p>
				</div>
			</div>

			<div class="relative">
				<!-- Stats cards -->
				<div class="grid grid-cols-2 gap-4">
					<div class="p-6 bg-bg-card rounded-2xl border border-border hover:border-dotnet/50 transition-colors group">
						<div class="text-4xl font-bold font-[family-name:var(--font-display)] text-gradient mb-2">8+</div>
						<div class="text-text-secondary">Years Experience</div>
					</div>
					<div class="p-6 bg-bg-card rounded-2xl border border-border hover:border-azure/50 transition-colors group">
						<div class="text-4xl font-bold font-[family-name:var(--font-display)] text-gradient mb-2">50+</div>
						<div class="text-text-secondary">Projects Delivered</div>
					</div>
					<div class="p-6 bg-bg-card rounded-2xl border border-border hover:border-csharp/50 transition-colors group">
						<div class="text-4xl font-bold font-[family-name:var(--font-display)] text-gradient mb-2">10M+</div>
						<div class="text-text-secondary">API Requests/Day</div>
					</div>
					<div class="p-6 bg-bg-card rounded-2xl border border-border hover:border-dotnet/50 transition-colors group">
						<div class="text-4xl font-bold font-[family-name:var(--font-display)] text-gradient mb-2">99.9%</div>
						<div class="text-text-secondary">Uptime Achieved</div>
					</div>
				</div>

				<!-- Decorative element -->
				<div class="absolute -z-10 -top-8 -right-8 w-64 h-64 bg-dotnet/5 rounded-full blur-3xl"></div>
			</div>
		</div>
	</div>
</section>

<!-- Skills Section -->
<section id="skills" class="py-32 bg-bg-dark relative overflow-hidden">
	<div class="absolute inset-0 bg-grid opacity-50"></div>

	<div class="max-w-6xl mx-auto px-6 relative z-10">
		<div class="text-center mb-16">
			<span class="font-[family-name:var(--font-mono)] text-sm text-dotnet-light mb-4 block">// TECHNICAL SKILLS</span>
			<h2 class="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold">
				My <span class="text-gradient">Tech Stack</span>
			</h2>
		</div>

		<div class="grid md:grid-cols-2 gap-8">
			<!-- Languages -->
			<div class="p-8 bg-bg-card rounded-2xl border border-border">
				<h3 class="font-[family-name:var(--font-display)] text-xl font-bold mb-6 flex items-center gap-3">
					<span class="w-3 h-3 rounded-full bg-csharp"></span>
					Languages
				</h3>
				<div class="space-y-4">
					{#each skills.languages as skill}
						<div>
							<div class="flex justify-between mb-2">
								<span class="font-medium">{skill.name}</span>
								<span class="text-text-muted font-[family-name:var(--font-mono)] text-sm">{skill.level}%</span>
							</div>
							<div class="h-2 bg-bg-deep rounded-full overflow-hidden">
								<div
									class="h-full rounded-full transition-all duration-1000"
									style="width: {mounted ? skill.level : 0}%; background-color: {skill.color}"
								></div>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- Frameworks -->
			<div class="p-8 bg-bg-card rounded-2xl border border-border">
				<h3 class="font-[family-name:var(--font-display)] text-xl font-bold mb-6 flex items-center gap-3">
					<span class="w-3 h-3 rounded-full bg-dotnet"></span>
					Frameworks & Libraries
				</h3>
				<div class="space-y-4">
					{#each skills.frameworks as skill}
						<div>
							<div class="flex justify-between mb-2">
								<span class="font-medium">{skill.name}</span>
								<span class="text-text-muted font-[family-name:var(--font-mono)] text-sm">{skill.level}%</span>
							</div>
							<div class="h-2 bg-bg-deep rounded-full overflow-hidden">
								<div
									class="h-full rounded-full transition-all duration-1000"
									style="width: {mounted ? skill.level : 0}%; background-color: {skill.color}"
								></div>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- Tools -->
			<div class="p-8 bg-bg-card rounded-2xl border border-border">
				<h3 class="font-[family-name:var(--font-display)] text-xl font-bold mb-6 flex items-center gap-3">
					<span class="w-3 h-3 rounded-full bg-azure"></span>
					Tools & Platforms
				</h3>
				<div class="space-y-4">
					{#each skills.tools as skill}
						<div>
							<div class="flex justify-between mb-2">
								<span class="font-medium">{skill.name}</span>
								<span class="text-text-muted font-[family-name:var(--font-mono)] text-sm">{skill.level}%</span>
							</div>
							<div class="h-2 bg-bg-deep rounded-full overflow-hidden">
								<div
									class="h-full rounded-full transition-all duration-1000"
									style="width: {mounted ? skill.level : 0}%; background-color: {skill.color}"
								></div>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- Practices -->
			<div class="p-8 bg-bg-card rounded-2xl border border-border">
				<h3 class="font-[family-name:var(--font-display)] text-xl font-bold mb-6 flex items-center gap-3">
					<span class="w-3 h-3 rounded-full bg-dotnet-light"></span>
					Practices & Patterns
				</h3>
				<div class="flex flex-wrap gap-3">
					{#each skills.practices as practice}
						<span class="px-4 py-2 bg-bg-deep rounded-lg text-sm font-medium border border-border hover:border-dotnet/50 transition-colors">
							{practice.name}
						</span>
					{/each}
					<span class="px-4 py-2 bg-bg-deep rounded-lg text-sm font-medium border border-border hover:border-dotnet/50 transition-colors">Unit Testing</span>
					<span class="px-4 py-2 bg-bg-deep rounded-lg text-sm font-medium border border-border hover:border-dotnet/50 transition-colors">Integration Testing</span>
					<span class="px-4 py-2 bg-bg-deep rounded-lg text-sm font-medium border border-border hover:border-dotnet/50 transition-colors">REST API Design</span>
					<span class="px-4 py-2 bg-bg-deep rounded-lg text-sm font-medium border border-border hover:border-dotnet/50 transition-colors">Microservices</span>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Experience Section -->
<section id="experience" class="py-32 relative">
	<div class="max-w-4xl mx-auto px-6">
		<div class="text-center mb-16">
			<span class="font-[family-name:var(--font-mono)] text-sm text-dotnet-light mb-4 block">// WORK HISTORY</span>
			<h2 class="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold">
				Professional <span class="text-gradient">Experience</span>
			</h2>
		</div>

		<div class="relative">
			<!-- Timeline line -->
			<div class="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-dotnet via-azure to-transparent md:-translate-x-1/2"></div>

			{#each experiences as exp, i}
				<div class="relative mb-12 last:mb-0 {i % 2 === 0 ? 'md:pr-[50%]' : 'md:pl-[50%] md:text-right'}">
					<!-- Timeline dot -->
					<div class="absolute left-0 md:left-1/2 w-4 h-4 bg-dotnet rounded-full -translate-x-1/2 border-4 border-bg-deep z-10"></div>

					<div class="ml-8 md:ml-0 {i % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}">
						<div class="p-6 bg-bg-card rounded-2xl border border-border hover:border-dotnet/30 transition-all duration-300 hover:-translate-y-1">
							<span class="font-[family-name:var(--font-mono)] text-sm text-dotnet-light">{exp.period}</span>
							<h3 class="font-[family-name:var(--font-display)] text-xl font-bold mt-2">{exp.title}</h3>
							<p class="text-azure-light font-medium mb-3">{exp.company}</p>
							<p class="text-text-secondary mb-4">{exp.description}</p>
							<div class="flex flex-wrap gap-2 {i % 2 === 0 ? '' : 'md:justify-end'}">
								{#each exp.highlights as highlight}
									<span class="px-3 py-1 bg-bg-deep text-xs font-[family-name:var(--font-mono)] rounded-full text-text-muted">
										{highlight}
									</span>
								{/each}
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Projects Section -->
<section id="projects" class="py-32 bg-bg-dark relative overflow-hidden">
	<div class="absolute inset-0 bg-grid opacity-50"></div>

	<div class="max-w-6xl mx-auto px-6 relative z-10">
		<div class="text-center mb-16">
			<span class="font-[family-name:var(--font-mono)] text-sm text-dotnet-light mb-4 block">// FEATURED WORK</span>
			<h2 class="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold">
				Notable <span class="text-gradient">Projects</span>
			</h2>
		</div>

		<div class="grid md:grid-cols-3 gap-6">
			{#each projects as project, i}
				<div
					class="group p-6 bg-bg-card rounded-2xl border border-border hover:border-dotnet/50 transition-all duration-500 hover:-translate-y-2"
					style="animation-delay: {i * 100}ms"
				>
					<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-dotnet to-azure flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
						<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
						</svg>
					</div>

					<h3 class="font-[family-name:var(--font-display)] text-xl font-bold mb-2 group-hover:text-gradient transition-all">
						{project.title}
					</h3>
					<p class="text-text-secondary mb-4 text-sm leading-relaxed">
						{project.description}
					</p>

					<div class="flex flex-wrap gap-2 mb-4">
						{#each project.tech as tech}
							<span class="px-2 py-1 bg-bg-deep text-xs font-[family-name:var(--font-mono)] rounded text-text-muted">
								{tech}
							</span>
						{/each}
					</div>

					<a
						href={project.link}
						class="inline-flex items-center gap-2 text-sm text-dotnet-light hover:text-azure-light transition-colors font-medium"
					>
						View Details
						<svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Certifications Section -->
<section class="py-32 relative">
	<div class="max-w-6xl mx-auto px-6">
		<div class="text-center mb-16">
			<span class="font-[family-name:var(--font-mono)] text-sm text-dotnet-light mb-4 block">// CREDENTIALS</span>
			<h2 class="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold">
				Certifications & <span class="text-gradient">Education</span>
			</h2>
		</div>

		<div class="grid md:grid-cols-2 gap-8">
			<!-- Certifications -->
			<div class="space-y-4">
				<h3 class="font-[family-name:var(--font-display)] text-xl font-bold mb-6">Certifications</h3>

				<div class="p-4 bg-bg-card rounded-xl border border-border flex items-center gap-4 hover:border-azure/50 transition-colors">
					<div class="w-12 h-12 rounded-lg bg-azure/20 flex items-center justify-center flex-shrink-0">
						<svg class="w-6 h-6 text-azure-light" fill="currentColor" viewBox="0 0 24 24">
							<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
						</svg>
					</div>
					<div>
						<h4 class="font-semibold">Azure Developer Associate</h4>
						<p class="text-sm text-text-muted">Microsoft • 2023</p>
					</div>
				</div>

				<div class="p-4 bg-bg-card rounded-xl border border-border flex items-center gap-4 hover:border-azure/50 transition-colors">
					<div class="w-12 h-12 rounded-lg bg-azure/20 flex items-center justify-center flex-shrink-0">
						<svg class="w-6 h-6 text-azure-light" fill="currentColor" viewBox="0 0 24 24">
							<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
						</svg>
					</div>
					<div>
						<h4 class="font-semibold">Azure Solutions Architect</h4>
						<p class="text-sm text-text-muted">Microsoft • 2022</p>
					</div>
				</div>

				<div class="p-4 bg-bg-card rounded-xl border border-border flex items-center gap-4 hover:border-dotnet/50 transition-colors">
					<div class="w-12 h-12 rounded-lg bg-dotnet/20 flex items-center justify-center flex-shrink-0">
						<svg class="w-6 h-6 text-dotnet-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
						</svg>
					</div>
					<div>
						<h4 class="font-semibold">MCSD: App Builder</h4>
						<p class="text-sm text-text-muted">Microsoft • 2020</p>
					</div>
				</div>
			</div>

			<!-- Education -->
			<div class="space-y-4">
				<h3 class="font-[family-name:var(--font-display)] text-xl font-bold mb-6">Education</h3>

				<div class="p-6 bg-bg-card rounded-xl border border-border hover:border-csharp/50 transition-colors">
					<div class="flex items-start gap-4">
						<div class="w-12 h-12 rounded-lg bg-csharp/20 flex items-center justify-center flex-shrink-0">
							<svg class="w-6 h-6 text-csharp" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
							</svg>
						</div>
						<div>
							<h4 class="font-semibold text-lg">BSc Computer Science</h4>
							<p class="text-azure-light">University of Technology</p>
							<p class="text-sm text-text-muted mt-1">2012 - 2016</p>
							<p class="text-sm text-text-secondary mt-2">
								Specialized in Software Engineering with focus on distributed systems and database design.
							</p>
						</div>
					</div>
				</div>

				<div class="p-4 bg-bg-card rounded-xl border border-border">
					<h4 class="font-semibold mb-2">Continuous Learning</h4>
					<p class="text-sm text-text-secondary">
						Regular participant in .NET conferences, active contributor to open source projects, and author of technical blog posts on modern .NET development.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Contact Section -->
<section id="contact" class="py-32 bg-bg-dark relative overflow-hidden">
	<div class="absolute inset-0 bg-grid opacity-50"></div>
	<div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-dotnet/10 rounded-full blur-[150px]"></div>

	<div class="max-w-4xl mx-auto px-6 relative z-10">
		<div class="text-center mb-16">
			<span class="font-[family-name:var(--font-mono)] text-sm text-dotnet-light mb-4 block">// GET IN TOUCH</span>
			<h2 class="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mb-6">
				Let's Work <span class="text-gradient">Together</span>
			</h2>
			<p class="text-lg text-text-secondary max-w-2xl mx-auto">
				Have a project in mind or looking for a .NET expert to join your team? I'd love to hear from you.
			</p>
		</div>

		<div class="grid md:grid-cols-2 gap-8">
			<!-- Contact Info -->
			<div class="space-y-6">
				<a
					href="mailto:thomas@vangoidsenhoven.dev"
					class="group p-6 bg-bg-card rounded-2xl border border-border hover:border-dotnet/50 transition-all duration-300 flex items-center gap-4"
				>
					<div class="w-12 h-12 rounded-xl bg-dotnet/20 flex items-center justify-center group-hover:scale-110 transition-transform">
						<svg class="w-6 h-6 text-dotnet-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
						</svg>
					</div>
					<div>
						<p class="text-sm text-text-muted mb-1">Email</p>
						<p class="font-medium">thomas@vangoidsenhoven.dev</p>
					</div>
				</a>

				<a
					href="https://linkedin.com/in/thomasvangoidsenhoven"
					target="_blank"
					rel="noopener noreferrer"
					class="group p-6 bg-bg-card rounded-2xl border border-border hover:border-azure/50 transition-all duration-300 flex items-center gap-4"
				>
					<div class="w-12 h-12 rounded-xl bg-azure/20 flex items-center justify-center group-hover:scale-110 transition-transform">
						<svg class="w-6 h-6 text-azure-light" fill="currentColor" viewBox="0 0 24 24">
							<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
						</svg>
					</div>
					<div>
						<p class="text-sm text-text-muted mb-1">LinkedIn</p>
						<p class="font-medium">/in/thomasvangoidsenhoven</p>
					</div>
				</a>

				<a
					href="https://github.com/thomasvangoidsenhoven"
					target="_blank"
					rel="noopener noreferrer"
					class="group p-6 bg-bg-card rounded-2xl border border-border hover:border-text-primary/30 transition-all duration-300 flex items-center gap-4"
				>
					<div class="w-12 h-12 rounded-xl bg-text-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
						<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
							<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
						</svg>
					</div>
					<div>
						<p class="text-sm text-text-muted mb-1">GitHub</p>
						<p class="font-medium">@thomasvangoidsenhoven</p>
					</div>
				</a>
			</div>

			<!-- Contact Form -->
			<form class="p-8 bg-bg-card rounded-2xl border border-border space-y-6">
				<div>
					<label for="name" class="block text-sm font-medium mb-2">Name</label>
					<input
						type="text"
						id="name"
						name="name"
						class="w-full px-4 py-3 bg-bg-deep border border-border rounded-xl focus:border-dotnet focus:outline-none focus:ring-1 focus:ring-dotnet transition-colors"
						placeholder="Your name"
					/>
				</div>
				<div>
					<label for="email" class="block text-sm font-medium mb-2">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						class="w-full px-4 py-3 bg-bg-deep border border-border rounded-xl focus:border-dotnet focus:outline-none focus:ring-1 focus:ring-dotnet transition-colors"
						placeholder="your@email.com"
					/>
				</div>
				<div>
					<label for="message" class="block text-sm font-medium mb-2">Message</label>
					<textarea
						id="message"
						name="message"
						rows="4"
						class="w-full px-4 py-3 bg-bg-deep border border-border rounded-xl focus:border-dotnet focus:outline-none focus:ring-1 focus:ring-dotnet transition-colors resize-none"
						placeholder="Tell me about your project..."
					></textarea>
				</div>
				<button
					type="submit"
					class="w-full py-4 bg-dotnet hover:bg-dotnet-light transition-colors rounded-xl font-semibold flex items-center justify-center gap-2 glow-dotnet"
				>
					Send Message
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
					</svg>
				</button>
			</form>
		</div>
	</div>
</section>

<!-- Footer -->
<footer class="py-8 border-t border-border">
	<div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
		<p class="text-text-muted text-sm">
			&copy; {new Date().getFullYear()} Thomas Van Goidsenhoven. Built with
			<span class="text-dotnet-light">SvelteKit</span> &
			<span class="text-azure-light">Tailwind CSS</span>
		</p>
		<div class="flex items-center gap-6">
			<a href="https://github.com/thomasvangoidsenhoven" target="_blank" rel="noopener noreferrer" class="text-text-muted hover:text-text-primary transition-colors" aria-label="GitHub Profile">
				<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
					<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
				</svg>
			</a>
			<a href="https://linkedin.com/in/thomasvangoidsenhoven" target="_blank" rel="noopener noreferrer" class="text-text-muted hover:text-text-primary transition-colors" aria-label="LinkedIn Profile">
				<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
					<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
				</svg>
			</a>
		</div>
	</div>
</footer>

<style>
	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	section {
		animation: fadeInUp 0.6s ease-out;
	}
</style>
