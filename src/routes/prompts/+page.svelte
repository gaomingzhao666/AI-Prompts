<script lang="ts">
	import { promptsSEO } from '$lib';
	import { onMount } from 'svelte';
	import PromptCard from '$lib/components/PromptCard.svelte';

	let prompts: any;

	const init = async () => {
		const res = await fetch('/src/prompts.json').then((res) => res.json());
		prompts = res;
	};

	onMount(() => {
		init();
	});
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

{#each prompts as items}
	<div class="mt-32">
		<h1>{items.category}</h1>
		{#each items as childItems}
			<PromptCard
				title={childItems.title}
				desc={childItems.desc}
				category={childItems.category}
				models={childItems.models}
				promptContent={childItems.promptContent}
			/>
		{/each}
	</div>
{/each}
