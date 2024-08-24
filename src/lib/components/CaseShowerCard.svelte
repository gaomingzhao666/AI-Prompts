<script lang="ts">
	import { cn } from '$lib/utils'
	import Gemini from '$lib/imgs/Gemini.svg'
	import GPT from '$lib/imgs/GPT.svg'
	import Claude from '$lib/imgs/Claude.svg'
	import Llama from '$lib/imgs/Llama.svg'

	export let models: string[]
	export let title: string
	export let desc: string
	// export let category: string;
	export let promptContent: string
</script>

<figure
	class={cn(
		'relative w-96 cursor-pointer overflow-hidden rounded-3xl border p-5 ',
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
	</div>
	<blockquote class="mt-2 text-lg">{promptContent}</blockquote>

	<div class="mt-3 h-[24px]">
		<div class="absolute bottom-5 left-5 flex items-center justify-start space-x-2">
			<!-- Icon Array -->
			<!-- Can not iterating models array in here, because it is not allow to parse native images -->
			{#if models.includes('GPT')}
				<div class="h-[24px] w-[24px]">
					<img class="rounded-full" width="24" height="24" alt="ModelsIcon" src={GPT} />
				</div>
			{/if}

			{#if models.includes('Claude')}
				<div class="h-[24px] w-[24px]">
					<img class="rounded-full" width="24" height="24" alt="ModelsIcon" src={Claude} />
				</div>
			{/if}

			{#if models.includes('Llama')}
				<div class="h-[24px] w-[24px]">
					<img class="rounded-full" width="24" height="24" alt="ModelsIcon" src={Llama} />
				</div>
			{/if}

			{#if models.includes('Gemini')}
				<div class="h-[24px] w-[24px]">
					<img class="rounded-full" width="24" height="24" alt="ModelsIcon" src={Gemini} />
				</div>
			{/if}
		</div>
	</div>
</figure>
