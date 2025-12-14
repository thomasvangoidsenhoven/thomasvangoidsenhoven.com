<script lang="ts">
	interface Props {
		tag: string;
		title: string;
		highlight: string;
		centered?: boolean;
	}

	let { tag, title, highlight, centered = true }: Props = $props();
</script>

<div class={centered ? 'text-center mb-16' : 'mb-16'}>
	<span class="font-[family-name:var(--font-mono)] text-sm text-dotnet-light mb-4 block"
		>// {tag}</span
	>
	<h2 class="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold">
		{title} <span class="text-gradient">{highlight}</span>
	</h2>
</div>
