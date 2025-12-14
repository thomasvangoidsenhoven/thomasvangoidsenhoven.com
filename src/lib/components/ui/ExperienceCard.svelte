<script lang="ts">
	import type { Experience } from '$lib/types';

	interface Props {
		experience: Experience;
		index: number;
	}

	let { experience, index }: Props = $props();
</script>

<div class="relative mb-12 last:mb-0 {index % 2 === 0 ? 'md:pr-[50%]' : 'md:pl-[50%] md:text-right'}">
	<!-- Timeline dot -->
	<div
		class="absolute left-0 md:left-1/2 w-4 h-4 bg-dotnet rounded-full -translate-x-1/2 border-4 border-bg-deep z-10"
	></div>

	<div class="ml-8 md:ml-0 {index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}">
		<div
			class="p-6 bg-bg-card rounded-2xl border border-border hover:border-dotnet/30 transition-all duration-300 hover:-translate-y-1"
		>
			<span class="font-[family-name:var(--font-mono)] text-sm text-dotnet-light"
				>{experience.period}</span
			>
			<h3 class="font-[family-name:var(--font-display)] text-xl font-bold mt-2">
				{experience.title}
			</h3>
			<p class="text-azure-light font-medium mb-3">{experience.company}</p>
			<p class="text-text-secondary mb-4">{experience.description}</p>
			<div class="flex flex-wrap gap-2 {index % 2 === 0 ? '' : 'md:justify-end'}">
				{#each experience.highlights as highlight}
					<span
						class="px-3 py-1 bg-bg-deep text-xs font-[family-name:var(--font-mono)] rounded-full text-text-muted"
					>
						{highlight}
					</span>
				{/each}
			</div>
		</div>
	</div>
</div>
