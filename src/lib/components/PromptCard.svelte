<script lang="ts">
	import { cn } from '$lib/utils';
	import { Copy } from 'lucide-svelte';

	export let models: string[];
	export let title: string;
	export let desc: string;
	export let category: string;
	export let promptContent: string;
</script>

<figure
	class={cn(
		'animate-shine group relative w-80 cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] p-5 px-4 py-5 transition-colors',
		// light styles
		'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
		// dark styles
		'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
	)}
>
	<div class="flex flex-row items-center justify-between space-x-2">
		<div class="flex flex-col">
			<!-- svelte-ignore a11y-structure -->
			<figcaption class="font-medium dark:text-white">
				{title}
			</figcaption>
			<p class="text-sm font-medium dark:text-white/40">{desc}</p>
		</div>

		<div class="group-hover:block group-hover:cursor-pointer md:hidden">
			<Copy />
		</div>
	</div>
	<blockquote class="mt-2 text-lg">{promptContent}</blockquote>

	<!-- {#each  as } -->
	<img class="mr-1 mt-2 rounded-full" width="24" height="24" alt="" src="/src/lib/imgs/GPT.svg" />
	<!-- {/each} -->
</figure>
