<script lang="ts">
	import { experiences } from '$lib/data/experience';
	import SectionHeader from '$lib/components/ui/SectionHeader.svelte';
	import ExperienceCard from '$lib/components/ui/ExperienceCard.svelte';
</script>

<section id="experience" class="py-32 relative">
	<div class="max-w-4xl mx-auto px-6">
		<SectionHeader tag="WORK HISTORY" title="Professional" highlight="Experience" />

		<div class="relative">
			<!-- Timeline line -->
			<div
				class="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-dotnet via-azure to-transparent md:-translate-x-1/2"
			></div>

			{#each experiences as experience, i}
				<ExperienceCard {experience} index={i} />
			{/each}
		</div>
	</div>
</section>
