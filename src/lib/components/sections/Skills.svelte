<script lang="ts">
	import { skills } from '$lib/data/skills';
	import SectionHeader from '$lib/components/ui/SectionHeader.svelte';
	import SkillBar from '$lib/components/ui/SkillBar.svelte';

	let inView = $state(false);
	let sectionRef: HTMLElement;

	$effect(() => {
		if (!sectionRef) return;

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					inView = true;
					observer.disconnect();
				}
			},
			{ threshold: 0.2 }
		);

		observer.observe(sectionRef);

		return () => observer.disconnect();
	});
</script>

<section bind:this={sectionRef} id="skills" class="py-32 bg-bg-dark relative overflow-hidden">
	<div class="absolute inset-0 bg-grid opacity-50"></div>

	<div class="max-w-6xl mx-auto px-6 relative z-10">
		<SectionHeader tag="TECHNICAL SKILLS" title="My" highlight="Tech Stack" />

		<div class="grid md:grid-cols-2 gap-8">
			<!-- Languages -->
			<div class="p-8 bg-bg-card rounded-2xl border border-border">
				<h3 class="font-[family-name:var(--font-display)] text-xl font-bold mb-6 flex items-center gap-3">
					<span class="w-3 h-3 rounded-full bg-csharp"></span>
					Languages
				</h3>
				<div class="space-y-4">
					{#each skills.languages as skill}
						<SkillBar {skill} animated={inView} />
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
						<SkillBar {skill} animated={inView} />
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
						<SkillBar {skill} animated={inView} />
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
						<span
							class="px-4 py-2 bg-bg-deep rounded-lg text-sm font-medium border border-border hover:border-dotnet/50 transition-colors"
						>
							{practice.name}
						</span>
					{/each}
					<span
						class="px-4 py-2 bg-bg-deep rounded-lg text-sm font-medium border border-border hover:border-dotnet/50 transition-colors"
						>Unit Testing</span
					>
					<span
						class="px-4 py-2 bg-bg-deep rounded-lg text-sm font-medium border border-border hover:border-dotnet/50 transition-colors"
						>Integration Testing</span
					>
					<span
						class="px-4 py-2 bg-bg-deep rounded-lg text-sm font-medium border border-border hover:border-dotnet/50 transition-colors"
						>REST API Design</span
					>
					<span
						class="px-4 py-2 bg-bg-deep rounded-lg text-sm font-medium border border-border hover:border-dotnet/50 transition-colors"
						>Microservices</span
					>
				</div>
			</div>
		</div>
	</div>
</section>
