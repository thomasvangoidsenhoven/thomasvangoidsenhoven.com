<script lang="ts">
	import { navItems } from '$lib/data/navigation';

	interface Props {
		activeSection: string;
	}

	let { activeSection }: Props = $props();
</script>

<nav class="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-bg-deep/80 border-b border-border">
	<div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
		<a href="#home" class="font-[family-name:var(--font-display)] font-bold text-xl tracking-tight">
			<span class="text-gradient">TVG</span>
		</a>
		<div class="hidden md:flex items-center gap-1">
			{#each navItems as item}
				<a
					href="#{item.id}"
					class="px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg {activeSection ===
					item.id
						? 'text-text-primary bg-bg-elevated'
						: 'text-text-secondary hover:text-text-primary'}"
				>
					{item.label}
				</a>
			{/each}
		</div>
		<a
			href="/Thomas_Van_Goidsenhoven_CV.pdf"
			download
			class="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium bg-dotnet hover:bg-dotnet-light transition-colors rounded-lg"
		>
			<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
				/>
			</svg>
			Download CV
		</a>
	</div>
</nav>
