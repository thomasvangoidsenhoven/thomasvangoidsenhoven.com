<script lang="ts">
	import { onMount } from 'svelte';
	import {
		Navigation,
		Hero,
		About,
		Skills,
		Experience,
		Projects,
		Certifications,
		Contact,
		Footer
	} from '$lib';

	let activeSection = $state('home');

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						activeSection = entry.target.id;
					}
				});
			},
			{ threshold: 0.3 }
		);

		document.querySelectorAll('section[id]').forEach((section) => {
			observer.observe(section);
		});

		return () => observer.disconnect();
	});
</script>

<svelte:head>
	<title>Thomas Van Goidsenhoven | .NET Software Engineer</title>
	<meta
		name="description"
		content="Senior .NET Software Engineer specializing in building scalable, cloud-native applications with ASP.NET Core, Azure, and modern architecture patterns."
	/>
</svelte:head>

<Navigation {activeSection} />
<Hero />
<About />
<Skills />
<Experience />
<Projects />
<Certifications />
<Contact />
<Footer />

<style>
	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	:global(section) {
		animation: fadeInUp 0.6s ease-out;
	}
</style>
