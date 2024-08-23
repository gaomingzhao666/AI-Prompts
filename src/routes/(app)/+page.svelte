<script>
	import { indexSEO } from '$lib'
	import ClientSection from '$lib/components/landing/ClientSection.svelte'
	import CaseShowerSection from '$lib/components/landing/CaseShowerSection.svelte'
	import HeroSection from '$lib/components/landing/HeroSection.svelte'
	import SphereMask from '$lib/components/magic/SphereMask/SphereMask.svelte'
</script>

<svelte:head>
	<title>{indexSEO.title}</title>
	<meta name="description" content={indexSEO.description} />
	<meta name="keywords" content={indexSEO.keywords} />

	<meta property="og:title" content={indexSEO.title} />
	<meta property="og:description" content={indexSEO.description} />
	<meta property="og:image" content={indexSEO.image} />
	<meta property="og:site_name" content={indexSEO.title} />
	<meta property="og:url" content={indexSEO.url} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={indexSEO.title} />
	<meta name="twitter:description" content={indexSEO.description} />
	<meta name="twitter:image" content={indexSEO.image} />
	<meta name="twitter:site" content="@Sikandar_Bhide" />
</svelte:head>

<HeroSection />
<ClientSection />
<SphereMask />
<CaseShowerSection />
