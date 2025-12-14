<script lang="ts">
	import type { Skill } from '$lib/types';

	interface Props {
		skill: Skill;
		animated: boolean;
	}

	let { skill, animated }: Props = $props();
</script>

<div>
	<div class="flex justify-between mb-2">
		<span class="font-medium">{skill.name}</span>
		<span class="text-text-muted font-[family-name:var(--font-mono)] text-sm">{skill.level}%</span>
	</div>
	<div class="h-2 bg-bg-deep rounded-full overflow-hidden">
		<div
			class="h-full rounded-full transition-all duration-1000"
			style="width: {animated ? skill.level : 0}%; background-color: {skill.color}"
		></div>
	</div>
</div>
