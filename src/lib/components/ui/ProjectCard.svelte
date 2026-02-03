<script lang="ts">
	import type { Project } from '$lib/types';

	interface Props {
		project: Project;
		index: number;
	}

	let { project, index }: Props = $props();
</script>

<div
	class="group p-6 bg-bg-card rounded-2xl border border-border hover:border-dotnet/50 transition-all duration-500 hover:-translate-y-2"
	style="animation-delay: {index * 100}ms"
>
	<div
		class="w-12 h-12 rounded-xl bg-gradient-to-br from-dotnet to-azure flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
	>
		<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
			/>
		</svg>
	</div>

	<h3
		class="font-[family-name:var(--font-display)] text-xl font-bold mb-2 group-hover:text-gradient transition-all"
	>
		{project.title}
	</h3>
	<p class="text-text-secondary mb-4 text-sm leading-relaxed">
		{project.description}
	</p>

	<div class="flex flex-wrap gap-2">
		{#each project.tech as tech}
			<span
				class="px-2 py-1 bg-bg-deep text-xs font-[family-name:var(--font-mono)] rounded text-text-muted"
			>
				{tech}
			</span>
		{/each}
	</div>
</div>
