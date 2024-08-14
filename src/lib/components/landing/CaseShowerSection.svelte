<script lang="ts">
	import Marquee from '$lib/components/magic/marquee/Marquee.svelte';
	import CaseShowerCard from '$lib/components/CaseShowerCard.svelte';
	import { onMount } from 'svelte';

	let prompts;
	// 	{
	// 		models: ['GPT'],
	// 		title: '@Bhide',
	// 		desc: 'Noicee work. I love it. Keep it up.',
	// 		category: 'Language Learning',
	// 		promptContent: 'This is a Example'
	// 	},
	// 	{
	// 		models: ['GPT'],
	// 		title: '@Bhide',
	// 		desc: 'Noicee work. I love it. Keep it up.',
	// 		category: 'Language Learning',
	// 		promptContent: 'This is a Example'
	// 	},
	// 	{
	// 		models: ['GPT'],
	// 		title: '@Bhide',
	// 		desc: 'Noicee work. I love it. Keep it up.',
	// 		category: 'Language Learning',
	// 		promptContent: 'This is a Example'
	// 	},
	// 	{
	// 		models: ['GPT'],
	// 		title: '@Bhide',
	// 		desc: 'Noicee work. I love it. Keep it up.',
	// 		category: 'Language Learning',
	// 		promptContent: 'This is a Example'
	// 	},
	// 	{
	// 		models: ['GPT'],
	// 		title: '@Bhide',
	// 		desc: 'Noicee work. I love it. Keep it up.',
	// 		category: 'Language Learning',
	// 		promptContent: 'This is a Example'
	// 	},
	// 	{
	// 		models: ['GPT'],
	// 		title: '@Bhide',
	// 		desc: 'Noicee work. I love it. Keep it up.',
	// 		category: 'Language Learning',
	// 		promptContent: 'This is a Example'
	// 	}
	// ];
	// const run = async () => {
	// 	const prompts = await fetch('/src/prompts.json').then((res) => res.json());
	// 	console.log(prompts);
	// };
	// run();
	const init = async () => {
		const prompts = await fetch('/src/prompts.json').then((res) => res.json());
		return prompts;
	};
	let firstRow: any = [];
	let secondRow: any = [];
	onMount(async () => {
		prompts = await init();

		firstRow = prompts.japaneseMaster;
		secondRow = prompts.codeMaster;
	});
</script>

<div
	class="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background py-20 md:shadow-xl"
>
	<Marquee pauseOnHover class="[--duration:20s]">
		{#each firstRow as item}
			<CaseShowerCard {...item} />
		{/each}
	</Marquee>
	<Marquee reverse pauseOnHover class="[--duration:20s]">
		{#each secondRow as item}
			<CaseShowerCard {...item} />
		{/each}
	</Marquee>
	<div
		class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"
	></div>
	<div
		class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"
	></div>
</div>
