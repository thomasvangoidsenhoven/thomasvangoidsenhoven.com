<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		href: string;
		icon: Snippet;
		label: string;
		value: string;
		hoverColor?: string;
		external?: boolean;
	}

	let { href, icon, label, value, hoverColor = 'dotnet', external = false }: Props = $props();
</script>

<a
	{href}
	target={external ? '_blank' : undefined}
	rel={external ? 'noopener noreferrer' : undefined}
	class="group p-6 bg-bg-card rounded-2xl border border-border hover:border-{hoverColor}/50 transition-all duration-300 flex items-center gap-4"
>
	<div
		class="w-12 h-12 rounded-xl bg-{hoverColor}/20 flex items-center justify-center group-hover:scale-110 transition-transform"
	>
		{@render icon()}
	</div>
	<div>
		<p class="text-sm text-text-muted mb-1">{label}</p>
		<p class="font-medium">{value}</p>
	</div>
</a>
