<script lang="ts">
	import StatCard from '$lib/components/ui/StatCard.svelte';
</script>

<section id="about" class="py-32 relative">
	<div class="max-w-6xl mx-auto px-6">
		<div class="grid md:grid-cols-2 gap-16 items-center">
			<div>
				<span class="font-[family-name:var(--font-mono)] text-sm text-dotnet-light mb-4 block"
					>// ABOUT ME</span
				>
				<h2 class="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mb-6">
					Crafting Digital<br />
					<span class="text-gradient">Experiences</span>
				</h2>
				<div class="space-y-4 text-text-secondary text-lg leading-relaxed">
					<p>
						With over <span class="text-text-primary font-semibold">7 years</span> of experience in
						.NET development, I specialize in building robust, scalable backend systems and cloud-native
						applications.
					</p>
					<p>
						My expertise spans the entire .NET ecosystem, from ASP.NET Core APIs to Azure cloud
						services, with a strong focus on <span class="text-dotnet-light">clean architecture</span
						>
						and
						<span class="text-azure-light">DevOps practices</span>.
					</p>
					<p>
						I'm passionate about writing maintainable code, mentoring teams, and staying at the
						forefront of modern software development practices.
					</p>
				</div>
			</div>

			<div class="relative">
				<!-- Stats cards -->
				<div class="grid grid-cols-2 gap-4">
					<StatCard value="7+" label="Years Experience" hoverColor="dotnet" />
					<StatCard value="20+" label="Projects Delivered" hoverColor="azure" />
					<StatCard value="5M+" label="API Requests/Day" hoverColor="csharp" />
					<StatCard value="10+" label="Engineers Mentored" hoverColor="dotnet" />
				</div>

				<!-- Decorative element -->
				<div class="absolute -z-10 -top-8 -right-8 w-64 h-64 bg-dotnet/5 rounded-full blur-3xl"></div>
			</div>
		</div>
	</div>
</section>
