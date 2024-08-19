<script lang="ts">
	import { ArrowRightIcon } from 'lucide-svelte';
	import { _ } from 'svelte-i18n';
	import OrbitingCircles from '$lib/components/magic/OrbitingCircles/OrbitingCircles.svelte';
	import AnimatedBeamMultipleInput from '$lib/components/magic/AnimatedBeam/AnimatedBeamMultipleInput.svelte';
	import AnimatedShinyText from '$lib/components/magic/AnimatedShinyText/AnimatedShinyText.svelte';
	import BorderBeam from '$lib/components/magic/borderbeam/BorderBeam.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import type { ObserverEventDetails } from 'svelte-inview';
	import { inview } from 'svelte-inview';
	import { goto } from '$app/navigation';

	// Images
	import HeroDarkImg from '$lib/imgs/hero-dark.png';
	import HeroLightImg from '$lib/imgs/hero-light.png';
	let inView = false;
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		// console.log(detail);
		inView = detail.inView;
	};
</script>

<section id="hero" class="relative mx-auto mt-32 max-w-7xl px-6 text-center md:px-8">
	<div
		class="backdrop-filter-[12px] group inline-flex h-7 -translate-y-4 animate-fade-in items-center justify-between gap-1 rounded-full border border-white/5 bg-white/10 px-3 text-xs transition-all ease-in hover:cursor-pointer hover:bg-white/20 dark:text-black"
	>
		<AnimatedShinyText class="inline-flex items-center justify-center">
			<span>{$_('heroReleaseNotice')}</span>
			{' '}
			<ArrowRightIcon
				class="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
			/>
		</AnimatedShinyText>
	</div>
	<h1
		class="-translate-y-4 animate-fade-in text-balance bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] dark:from-white dark:to-white/40 sm:text-6xl md:text-7xl lg:text-8xl"
	>
		{$_('heroTitleOnTop')}
		<br class="hidden md:block" />
		{' '}
		{$_('heroTitleOnBottom')}
	</h1>
	<p
		class="mb-12 -translate-y-4 animate-fade-in text-balance text-lg tracking-tight text-gray-400 opacity-0 [--animation-delay:400ms] md:text-xl"
	>
		{$_('heroSubtitle')}
	</p>

	<a href="/prompts">
		<Button
			class="mb-5 -translate-y-4 animate-fade-in gap-1 rounded-lg text-white opacity-0 ease-in-out [--animation-delay:600ms] dark:text-black"
		>
			{$_('heroButton')}
			<ArrowRightIcon
				class="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
			/>
		</Button>
	</a>

	<div class="flex flex-wrap items-center justify-around space-y-3">
		<AnimatedBeamMultipleInput />
		<OrbitingCircles />
	</div>
</section>
