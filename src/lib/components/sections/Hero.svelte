<script lang="ts">
	interface Props {
		mounted: boolean;
	}

	let { mounted }: Props = $props();
</script>

<section id="home" class="min-h-screen flex items-center justify-center relative overflow-hidden bg-grid">
	<!-- Ambient glow effects -->
	<div class="absolute top-1/4 -left-32 w-96 h-96 bg-dotnet/20 rounded-full blur-[128px] animate-pulse"></div>
	<div
		class="absolute bottom-1/4 -right-32 w-96 h-96 bg-azure/20 rounded-full blur-[128px] animate-pulse"
		style="animation-delay: 1s"
	></div>

	<div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
		<div
			class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-card border border-border mb-8 transition-all duration-700 {mounted
				? 'opacity-100 translate-y-0'
				: 'opacity-0 translate-y-4'}"
		>
			<span class="w-2 h-2 rounded-full bg-csharp animate-pulse"></span>
			<span class="text-sm text-text-secondary font-[family-name:var(--font-mono)]"
				>Available for new opportunities</span
			>
		</div>

		<h1
			class="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-bold mb-6 transition-all duration-700 delay-100 {mounted
				? 'opacity-100 translate-y-0'
				: 'opacity-0 translate-y-4'}"
		>
			Thomas Van<br />
			<span class="text-gradient">Goidsenhoven</span>
		</h1>

		<p
			class="text-xl md:text-2xl text-text-secondary mb-4 transition-all duration-700 delay-200 {mounted
				? 'opacity-100 translate-y-0'
				: 'opacity-0 translate-y-4'}"
		>
			Senior <span class="text-dotnet-light font-semibold">.NET</span> Software Engineer
		</p>

		<p
			class="text-lg text-text-muted max-w-2xl mx-auto mb-12 transition-all duration-700 delay-300 {mounted
				? 'opacity-100 translate-y-0'
				: 'opacity-0 translate-y-4'}"
		>
			Building scalable, cloud-native applications with a passion for clean architecture and
			developer experience.
		</p>

		<div
			class="flex flex-wrap justify-center gap-4 transition-all duration-700 delay-400 {mounted
				? 'opacity-100 translate-y-0'
				: 'opacity-0 translate-y-4'}"
		>
			<a
				href="#contact"
				class="group px-8 py-4 bg-dotnet hover:bg-dotnet-light transition-all duration-300 rounded-xl font-semibold flex items-center gap-3 glow-dotnet"
			>
				Get in Touch
				<svg
					class="w-5 h-5 group-hover:translate-x-1 transition-transform"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M17 8l4 4m0 0l-4 4m4-4H3"
					/>
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
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M19 14l-7 7m0 0l-7-7m7 7V3"
				/>
			</svg>
		</div>
	</div>
</section>
