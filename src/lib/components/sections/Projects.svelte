<script lang="ts">
	import { projects } from '$lib/data/projects';
	import SectionHeader from '$lib/components/ui/SectionHeader.svelte';
	import ProjectCard from '$lib/components/ui/ProjectCard.svelte';
</script>

<section id="projects" class="py-32 bg-bg-dark relative overflow-hidden">
	<div class="absolute inset-0 bg-grid opacity-50"></div>

	<div class="max-w-6xl mx-auto px-6 relative z-10">
		<SectionHeader tag="FEATURED WORK" title="Notable" highlight="Projects" />

		<div class="grid md:grid-cols-3 gap-6">
			{#each projects as project, i}
				<ProjectCard {project} index={i} />
			{/each}
		</div>
	</div>
</section>
