<script lang="ts">
	import SectionHeader from '$lib/components/ui/SectionHeader.svelte';
</script>

<section class="py-32 relative">
	<div class="max-w-6xl mx-auto px-6">
		<SectionHeader tag="CREDENTIALS" title="Certifications &" highlight="Education" />

		<div class="grid md:grid-cols-2 gap-8">
			<!-- Certifications -->
			<div class="space-y-4">
				<h3 class="font-[family-name:var(--font-display)] text-xl font-bold mb-6">
					Certifications
				</h3>

				<div
					class="p-4 bg-bg-card rounded-xl border border-border flex items-center gap-4 hover:border-azure/50 transition-colors"
				>
					<div
						class="w-12 h-12 rounded-lg bg-azure/20 flex items-center justify-center flex-shrink-0"
					>
						<svg class="w-6 h-6 text-azure-light" fill="currentColor" viewBox="0 0 24 24">
							<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
						</svg>
					</div>
					<div>
						<h4 class="font-semibold">Azure Developer Associate</h4>
						<p class="text-sm text-text-muted">Microsoft - 2023</p>
					</div>
				</div>

				<div
					class="p-4 bg-bg-card rounded-xl border border-border flex items-center gap-4 hover:border-azure/50 transition-colors"
				>
					<div
						class="w-12 h-12 rounded-lg bg-azure/20 flex items-center justify-center flex-shrink-0"
					>
						<svg class="w-6 h-6 text-azure-light" fill="currentColor" viewBox="0 0 24 24">
							<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
						</svg>
					</div>
					<div>
						<h4 class="font-semibold">Azure Solutions Architect</h4>
						<p class="text-sm text-text-muted">Microsoft - 2022</p>
					</div>
				</div>

				<div
					class="p-4 bg-bg-card rounded-xl border border-border flex items-center gap-4 hover:border-dotnet/50 transition-colors"
				>
					<div
						class="w-12 h-12 rounded-lg bg-dotnet/20 flex items-center justify-center flex-shrink-0"
					>
						<svg
							class="w-6 h-6 text-dotnet-light"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
							/>
						</svg>
					</div>
					<div>
						<h4 class="font-semibold">MCSD: App Builder</h4>
						<p class="text-sm text-text-muted">Microsoft - 2020</p>
					</div>
				</div>
			</div>

			<!-- Education -->
			<div class="space-y-4">
				<h3 class="font-[family-name:var(--font-display)] text-xl font-bold mb-6">Education</h3>

				<div
					class="p-6 bg-bg-card rounded-xl border border-border hover:border-csharp/50 transition-colors"
				>
					<div class="flex items-start gap-4">
						<div
							class="w-12 h-12 rounded-lg bg-csharp/20 flex items-center justify-center flex-shrink-0"
						>
							<svg
								class="w-6 h-6 text-csharp"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 14l9-5-9-5-9 5 9 5z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 14l9-5-9-5-9 5 9 5z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
								/>
							</svg>
						</div>
						<div>
							<h4 class="font-semibold text-lg">BSc Computer Science</h4>
							<p class="text-azure-light">University of Technology</p>
							<p class="text-sm text-text-muted mt-1">2012 - 2016</p>
							<p class="text-sm text-text-secondary mt-2">
								Specialized in Software Engineering with focus on distributed systems and database
								design.
							</p>
						</div>
					</div>
				</div>

				<div class="p-4 bg-bg-card rounded-xl border border-border">
					<h4 class="font-semibold mb-2">Continuous Learning</h4>
					<p class="text-sm text-text-secondary">
						Regular participant in .NET conferences, active contributor to open source projects,
						and author of technical blog posts on modern .NET development.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
