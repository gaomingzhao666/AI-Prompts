<script lang="ts">
	import { promptsSEO } from '$lib';
</script>

<svelte:head>
	<title>{promptsSEO.title}</title>
	<meta name="description" content={promptsSEO.description} />
	<meta name="keywords" content={promptsSEO.keywords} />

	<meta property="og:title" content={promptsSEO.title} />
	<meta property="og:description" content={promptsSEO.description} />
	<meta property="og:image" content={promptsSEO.image} />
	<meta property="og:site_name" content={promptsSEO.title} />
	<meta property="og:url" content={promptsSEO.url} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={promptsSEO.title} />
	<meta name="twitter:description" content={promptsSEO.description} />
	<meta name="twitter:image" content={promptsSEO.image} />
	<meta name="twitter:site" content="@Sikandar_Bhide" />
</svelte:head>

<h1 class="text-center">about pageasdasd</h1>
