<script lang="ts">
	interface Props {
		value: string;
		label: string;
		hoverColor?: string;
	}

	let { value, label, hoverColor = 'dotnet' }: Props = $props();
</script>

<div
	class="p-6 bg-bg-card rounded-2xl border border-border hover:border-{hoverColor}/50 transition-colors group"
>
	<div class="text-4xl font-bold font-[family-name:var(--font-display)] text-gradient mb-2">
		{value}
	</div>
	<div class="text-text-secondary">{label}</div>
</div>
