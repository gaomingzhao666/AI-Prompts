<script lang="ts">
	import { promptsSEO } from '$lib'
	import { onMount } from 'svelte'
	import * as Carousel from '$lib/components/ui/carousel/index.js'
	import PromptCard from '$lib/components/PromptCard.svelte'
	import promptsData from '../../prompts.json'
	import { addSpaceBetweenUppercase } from '$lib/utils/addSpaceBetweenUppercase'

	let prompts: any = new Map()

	const init = async () => {
		const res = promptsData
		prompts = res
	}

	onMount(async () => {
		await init()
	})
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

<div class="mt-32 pl-5">
	{#each Object.keys(prompts) as category}
		<div class="my-16">
			<h1 class="mb-5 text-2xl">{addSpaceBetweenUppercase(category)}</h1>

			<!-- carousel -->
			<div>
				<Carousel.Root>
					<Carousel.Content class="-ml-3">
						{#each prompts[category] as prompt}
							<Carousel.Item class="basis-50  pl-3  ">
								<PromptCard {...prompt} />
							</Carousel.Item>
						{/each}
					</Carousel.Content>
				</Carousel.Root>
			</div>
		</div>
	{/each}
</div>
