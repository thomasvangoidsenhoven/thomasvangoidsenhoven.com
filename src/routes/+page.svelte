<script lang="ts">
	import { onMount } from 'svelte';
	import {
		Navigation,
		Hero,
		About,
		Skills,
		Experience,
		Projects,
		Expertise,
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
	<title>Thomas Vangoidsenhoven | .NET Software Engineer</title>
	<meta
		name="description"
		content="Senior .NET Software Engineer specializing in building scalable, cloud-native applications with .NET, Azure/AWS, and modern architecture patterns."
	/>

	<!-- Canonical URL -->
	<link rel="canonical" href="https://thomasvangoidsenhoven.com" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://thomasvangoidsenhoven.com" />
	<meta property="og:title" content="Thomas Vangoidsenhoven | .NET Software Engineer" />
	<meta
		property="og:description"
		content="Senior .NET Software Engineer specializing in building scalable, cloud-native applications with .NET, Azure/AWS, and modern architecture patterns."
	/>
	<meta property="og:site_name" content="Thomas Vangoidsenhoven" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Thomas Vangoidsenhoven | .NET Software Engineer" />
	<meta
		name="twitter:description"
		content="Senior .NET Software Engineer specializing in building scalable, cloud-native applications with .NET, Azure/AWS, and modern architecture patterns."
	/>

	<!-- Additional SEO -->
	<meta name="author" content="Thomas Vangoidsenhoven" />
	<meta name="robots" content="index, follow" />

	<!-- JSON-LD Structured Data -->
	{@html `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Thomas Vangoidsenhoven",
  "jobTitle": "Senior .NET Software Engineer",
  "url": "https://thomasvangoidsenhoven.com",
  "email": "vangoidsenhoventhomas@gmail.com",
  "sameAs": [
    "https://www.linkedin.com/in/thomas-vangoidsenhoven-ba18b7139/",
    "https://github.com/thomasvangoidsenhoven"
  ],
  "knowsAbout": [".NET", "Azure", "AWS", "C#", "Cloud Architecture"]
}
</script>`}
</svelte:head>

<Navigation {activeSection} />
<Hero />
<About />
<Skills />
<Experience />
<Projects />
<Expertise />
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
