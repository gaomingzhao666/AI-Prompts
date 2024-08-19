<script lang="ts">
	import DarkModeSwitcher from '$lib/components/DarkModeSwitcher.svelte';
	import LangSwitcher from '$lib/components/LangSwitcher.svelte';
	import { cn } from '$lib/utils';
	import { AlignJustify, XIcon } from 'lucide-svelte';
	import { fly } from 'svelte/transition';

	const menuItem = [
		{
			id: 1,
			label: 'Features',
			href: '#'
		},
		{
			id: 2,
			label: 'Pricing',
			href: '#'
		},
		{
			id: 3,
			label: 'Careers',
			href: '#'
		},
		{
			id: 4,
			label: 'Contact Us',
			href: '#'
		}
	];

	let hamburgerMenuIsOpen = false;

	function toggleOverflowHidden(node: HTMLElement) {
		node.addEventListener('click', () => {
			hamburgerMenuIsOpen = !hamburgerMenuIsOpen;
			const html = document.querySelector('html');
			if (html) {
				if (hamburgerMenuIsOpen) {
					html.classList.add('overflow-hidden');
				} else {
					html.classList.remove('overflow-hidden');
				}
			}
		});
	}
	let innerWidth = 0;
</script>

<svelte:window bind:innerWidth />
<header
	class="fixed left-0 top-0 z-50 w-full -translate-y-4 animate-fade-in border-b opacity-0 backdrop-blur-md"
>
	<!-- {#if innerWidth < 768} -->
	<div class="container flex h-14 items-center justify-between">
		<a class="text-md flex items-center transition-all hover:font-bold" href="/"> AI Prompts </a>

		<div class="hidden items-center md:flex md:space-x-3">
			<a href="https://github.com/gaomingzhao666/AI-Prompts">
				<!-- dark mode -->
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
		<button class="ml-6 md:hidden" use:toggleOverflowHidden>
			{#if hamburgerMenuIsOpen}
				<XIcon strokeWidth={1.4} class="text-gray-300" />
			{:else}
				<AlignJustify strokeWidth={1.4} class="text-gray-300" />
			{/if}
		</button>
	</div>
	<!-- {/if} -->
</header>

<nav
	class={cn(
		`fixed left-0 top-0 z-50 h-screen w-full overflow-auto `,
		{
			'pointer-events-none': !hamburgerMenuIsOpen
		},
		{
			'bg-background/70 backdrop-blur-md': hamburgerMenuIsOpen
		}
	)}
>
	{#if hamburgerMenuIsOpen === true}
		<div class="container flex h-14 items-center justify-between">
			<a class="text-md flex items-center" href="/"> AI Prompts </a>

			<button class="md:hidden" use:toggleOverflowHidden>
				<span class="sr-only">Toggle menu</span>
				{#if hamburgerMenuIsOpen}
					<XIcon strokeWidth={1.4} class="text-gray-300" />
				{:else}
					<AlignJustify strokeWidth={1.4} class="text-gray-300" />
				{/if}
			</button>
		</div>

		<ul
			in:fly={{ y: -30, duration: 400 }}
			class="flex flex-col uppercase ease-in md:flex-row md:items-center md:normal-case"
		>
			{#each menuItem as item, i}
				<li class="border-grey-dark border-b py-0.5 pl-6 md:border-none">
					<a
						class="hover:text-grey flex h-[var(--navigation-height)] w-full items-center text-xl transition-[color,transform] duration-300 md:translate-y-0 md:text-sm md:transition-colors {hamburgerMenuIsOpen
							? '[&_a]:translate-y-0'
							: ''}"
						href={item.href}
					>
						{item.label}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</nav>
