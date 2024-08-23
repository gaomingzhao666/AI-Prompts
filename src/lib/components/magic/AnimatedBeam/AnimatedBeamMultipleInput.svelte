<script lang="ts">
	// Scroll down to see the original Component
	import { cn } from '$lib/utils'
	import AnimatedBeam from '$lib/components/magic/AnimatedBeam/AnimatedBeam.svelte'
	import Circle from '$lib/components/magic/AnimatedBeam/Circle.svelte'
	import Gemini from '$lib/imgs/Gemini.svg'
	import GPT from '$lib/imgs/GPT.svg'
	import Claude from '$lib/imgs/Claude.svg'
	import Llama from '$lib/imgs/Llama.svg'
	import star from '$lib/imgs/star.png'

	let containerRef
	// Circles
	let div1Ref
	let div2Ref
	let div3Ref
	let div4Ref
	let div6Ref
	let div7Ref
	let className: any = ''
	export { className as class }
</script>

<div
	bind:this={containerRef}
	class={cn(
		'relative flex h-[400px] w-[500px] items-center justify-center overflow-hidden rounded-3xl border bg-background p-10 shadow dark:shadow-[#090909]',
		className
	)}
>
	<!--  Gradient Line -->
	<div
		class="absolute right-5 top-0 h-px w-1/2 bg-gradient-to-l from-transparent via-white/30 via-10% to-transparent"
	/>
	<!-- Main Component  -->

	<div class="flex h-full w-full max-w-lg flex-row items-center justify-between gap-10">
		<div class="flex flex-col justify-center gap-2">
			<!-- Div 1 -->
			<Circle>
				<img src={Gemini} width="40" height="40" alt="Gemini" bind:this={div1Ref} />
			</Circle>
			<!-- Div 2 -->
			<Circle>
				<img src={GPT} width="40" height="40" alt="GPT" bind:this={div2Ref} />
			</Circle>
			<!-- Div 3 -->
			<Circle>
				<img src={Claude} width="40" height="40" alt="Claude" bind:this={div3Ref} />
			</Circle>
			<!-- Div 4 -->
			<Circle>
				<img src={Llama} width="40" height="40" alt="Llama" bind:this={div4Ref} />
			</Circle>
		</div>
		<div class="flex flex-col justify-center">
			<!-- Div 6 -->
			<Circle>
				<img src={star} width="40" height="40" alt="AI Prompts logo" bind:this={div6Ref} />
			</Circle>
		</div>
		<div class="flec-col flex justify-center">
			<!-- Div 7 -->
			<Circle>
				<svg
					bind:this={div7Ref}
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-user"
					><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle
						cx="12"
						cy="7"
						r="4"
					/></svg
				>
			</Circle>
		</div>
	</div>

	<AnimatedBeam bind:containerRef bind:fromRef={div1Ref} bind:toRef={div6Ref} />
	<AnimatedBeam bind:containerRef bind:fromRef={div2Ref} bind:toRef={div6Ref} />
	<AnimatedBeam bind:containerRef bind:fromRef={div3Ref} bind:toRef={div6Ref} />
	<AnimatedBeam bind:containerRef bind:fromRef={div4Ref} bind:toRef={div6Ref} />
	<AnimatedBeam bind:containerRef bind:fromRef={div6Ref} bind:toRef={div7Ref} />
</div>
