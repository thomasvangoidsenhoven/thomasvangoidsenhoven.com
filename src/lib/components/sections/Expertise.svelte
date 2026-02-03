<script lang="ts">
	import SectionHeader from '$lib/components/ui/SectionHeader.svelte';
</script>

<section class="py-32 relative">
	<div class="max-w-6xl mx-auto px-6">
		<SectionHeader tag="CREDENTIALS" title="Expertise &" highlight="Education" />

		<div class="grid md:grid-cols-2 gap-8 items-stretch">
			<!-- Technical Expertise -->
			<div class="flex flex-col gap-4">
				<h3 class="font-[family-name:var(--font-display)] text-xl font-bold mb-6">
					Technical Expertise
				</h3>

				<div
					class="p-4 bg-bg-card rounded-xl border border-border flex items-center gap-4 hover:border-azure/50 transition-colors flex-1"
				>
					<div
						class="w-12 h-12 rounded-lg bg-azure/20 flex items-center justify-center flex-shrink-0"
					>
						<svg class="w-6 h-6 text-azure-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
						</svg>
					</div>
					<div>
						<h4 class="font-semibold">Authentication & Authorization</h4>
						<p class="text-sm text-text-muted">PKCE, OIDC, OAuth, Auth0, Piano, Keycloak</p>
					</div>
				</div>

				<div
					class="p-4 bg-bg-card rounded-xl border border-border flex items-center gap-4 hover:border-dotnet/50 transition-colors flex-1"
				>
					<div
						class="w-12 h-12 rounded-lg bg-dotnet/20 flex items-center justify-center flex-shrink-0"
					>
						<svg class="w-6 h-6 text-dotnet-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
						</svg>
					</div>
					<div>
						<h4 class="font-semibold">Architecture & Design</h4>
						<p class="text-sm text-text-muted">DDD, Hexagonal Design, Microservices, BPMN</p>
					</div>
				</div>

				<div
					class="p-4 bg-bg-card rounded-xl border border-border flex items-center gap-4 hover:border-csharp/50 transition-colors flex-1"
				>
					<div
						class="w-12 h-12 rounded-lg bg-csharp/20 flex items-center justify-center flex-shrink-0"
					>
						<svg class="w-6 h-6 text-csharp" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
						</svg>
					</div>
					<div>
						<h4 class="font-semibold">DevOps & Infrastructure</h4>
						<p class="text-sm text-text-muted">Terraform IaC, AWS, Azure, CI/CD Pipelines</p>
					</div>
				</div>
			</div>

			<!-- Education -->
			<div class="flex flex-col gap-4">
				<h3 class="font-[family-name:var(--font-display)] text-xl font-bold mb-6">Education</h3>

				<div
					class="p-6 bg-bg-card rounded-xl border border-border hover:border-csharp/50 transition-colors flex-1"
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
							<h4 class="font-semibold text-lg">Bachelor in Computer Science</h4>
							<p class="text-azure-light">UCLL - Leuven</p>
							<p class="text-sm text-text-muted mt-1">2015 - 2019</p>
							<p class="text-sm text-text-secondary mt-2">
								Applied informatics degree with focus on software engineering and full-stack development.
							</p>
						</div>
					</div>
				</div>

				<div class="p-4 bg-bg-card rounded-xl border border-border flex-1">
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
