<script lang="ts">
	import DarkModeSwitcher from '$lib/components/DarkModeSwitcher.svelte'
	import LangSwitcher from '$lib/components/LangSwitcher.svelte'

	let innerWidth = 0
</script>

<svelte:window bind:innerWidth />
<header
	class="fixed left-0 top-0 z-50 w-full -translate-y-4 animate-fade-in border-b opacity-0 backdrop-blur-md"
>
	<!-- {#if innerWidth < 768} -->
	<div class="container flex h-14 items-center justify-between">
		<a class="text-md flex items-center transition-all hover:font-bold" href="/"> AI Prompts </a>

		<div class="flex items-center space-x-3">
			<a href="https://github.com/gaomingzhao666/AI-Prompts">
				<img
					src="/src/lib/imgs/GithubDarkIcon.svg"
					alt="GithubIcon"
					width="32"
					class="hidden hover:cursor-pointer hover:opacity-80 dark:block"
				/>

				<!-- light mode -->
				<img
					src="/src/lib/imgs/GithubIcon.svg"
					alt="GithubIcon"
					width="32"
					class="block hover:cursor-pointer hover:opacity-80 dark:hidden"
				/>
			</a>

			<LangSwitcher />
			<DarkModeSwitcher />
		</div>
	</div>
</header>
