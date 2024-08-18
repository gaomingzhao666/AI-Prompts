<script lang="ts">
	import { cn } from '$lib/utils';
	import { Copy } from 'lucide-svelte';
	import * as Collapsible from '$lib/components/ui/collapsible';

	export let models: string[];
	export let title: string;
	export let desc: string;
	export let category: string;
	export let promptContent: string;

	const copyContent = () => {
		navigator.clipboard.writeText(promptContent);
	};
</script>

<figure
	class={cn(
		'group relative h-72 w-96 overflow-ellipsis rounded-3xl border p-5',
		// light styles
		'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
		// dark styles
		'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
	)}
>
	<div class="flex flex-row items-center justify-between">
		<div class="flex flex-col">
			<!-- svelte-ignore a11y-structure -->
			<figcaption class="font-medium dark:text-white">
				{title}
			</figcaption>

			<p class="text-sm font-medium dark:text-white/40">{desc}</p>
		</div>

		<button
			class="group-hover:block group-hover:cursor-pointer md:hidden"
			on:click={() => copyContent()}
		>
			<Copy />
		</button>
	</div>
	<blockquote class="mt-2 text-lg">{promptContent}</blockquote>

	<div class="mt-3 h-[24px] w-[24px]">
		<div class="absolute bottom-5 left-5">
			<!-- {#each  as } -->
			<img class=" rounded-full" width="24" height="24" alt="" src="/src/lib/imgs/GPT.svg" />
			<!-- {/each} -->
		</div>
	</div>
</figure>
