<script lang="ts">
	import { Motion, useAnimation, animate } from 'svelte-motion';
	import {
		Languages,
		TrashIcon,
		Building2,
		LayoutGridIcon,
		UserCircleIcon,
		ChevronRightIcon,
		BellIcon
	} from 'lucide-svelte';
	import { cn } from '$lib/utils';

	//  List Items
	let items = [{ name: 'English' }, { name: 'Japanese' }, { name: 'Chinese' }];
	let svgControls = useAnimation();
	let isOpen = false;

	//  Ui List
	let list = {
		visible: {
			clipPath: 'inset(0% 0% 0% 0% round 12px)',
			transition: {
				type: 'spring',
				bounce: 0
			}
		},
		hidden: {
			clipPath: 'inset(10% 50% 90% 50% round 12px)',
			transition: {
				duration: 0.3,
				type: 'spring',
				bounce: 0
			}
		}
	};
	//  Li Items
	let variants = {
		visible: (i) => ({
			opacity: 1,
			scale: 1,
			filter: 'blur(0px)',
			transition: {
				duration: 0.3,
				delay: i * 0.15
			}
		}),
		hidden: {
			opacity: 0,
			scale: 0.3,
			filter: 'blur(20px)'
		}
	};
</script>

<nav class={cn('relative z-50 mx-auto w-full max-w-[200px] space-y-2')}>
	<Motion
		whileTap={{
			scale: 0.97
		}}
		let:motion
	>
		<button
			use:motion
			on:click={() => (isOpen = !isOpen)}
			class="flex items-center justify-between rounded-xl border border-neutral-800 bg-neutral-900 p-2.5 outline-none"
		>
			<Languages />
		</button>
		<Motion animate={isOpen ? 'visible' : 'hidden'} variants={list} initial="hidden" let:motion>
			<ul
				use:motion
				class={cn(
					'absolute right-0 z-[1]  space-y-3 rounded-xl border border-neutral-800 bg-neutral-900 p-5',
					isOpen ? 'pointer-events-auto' : 'pointer-events-none'
				)}
			>
				{#each items as item, i}
					<Motion
						custom={i + 1}
						{variants}
						initial="hidden"
						animate={isOpen ? 'visible' : 'hidden'}
						let:motion
					>
						<li use:motion>
							<a
								href="/"
								class={cn(
									'group flex items-center gap-2 rounded-md border border-transparent text-lg text-neutral-400 hover:text-neutral-300 focus-visible:border-neutral-800 focus-visible:text-neutral-300 focus-visible:outline-none'
								)}
							>
								<span class="flex items-center gap-1 text-sm font-medium">
									{item.name}
								</span>
							</a>
						</li>
					</Motion>
				{/each}
			</ul>
		</Motion>
	</Motion>
</nav>
