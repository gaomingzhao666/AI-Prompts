<script lang="ts">
	// Scroll down to see the original Component
	import { cn } from '$lib/utils';
	import { Languages } from 'lucide-svelte';
	import AnimatedBeam from '$lib/components/magic/AnimatedBeam/AnimatedBeam.svelte';
	import Circle from '$lib/components/magic/AnimatedBeam/Circle.svelte';
	let containerRef;
	// Circles
	let div1Ref;
	let div2Ref;
	let div3Ref;
	let div4Ref;
	let div5Ref;
	let div6Ref;
	let div7Ref;
	let className: any = '';
	export { className as class };
</script>

<div
	bind:this={containerRef}
	class={cn(
		'relative flex h-[400px] w-[500px] items-center justify-center overflow-hidden rounded-lg border bg-background p-10  dark:shadow-[#090909] md:shadow-xl',
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
				<img
					src="/src/lib/imgs/Gemini.svg"
					width="40"
					height="40"
					alt="Gemini"
					bind:this={div1Ref}
				/>
			</Circle>
			<!-- Div 2 -->
			<Circle>
				<svg
					bind:this={div2Ref}
					xmlns="http://www.w3.org/2000/svg"
					width="40"
					height="40"
					preserveAspectRatio="xMidYMid"
					viewBox="0 0 256 260"
					><path
						fill="#fff"
						d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z"
					/></svg
				>
			</Circle>
			<!-- Div 3 -->
			<Circle>
				<svg
					bind:this={div3Ref}
					xmlns="http://www.w3.org/2000/svg"
					shape-rendering="geometricPrecision"
					text-rendering="geometricPrecision"
					image-rendering="optimizeQuality"
					fill-rule="evenodd"
					clip-rule="evenodd"
					viewBox="0 0 512 512"
					><rect fill="#CC9B7A" width="512" height="512" rx="104.187" ry="105.042" /><path
						fill="#1F1F1E"
						fill-rule="nonzero"
						d="M318.663 149.787h-43.368l78.952 212.423 43.368.004-78.952-212.427zm-125.326 0l-78.952 212.427h44.255l15.932-44.608 82.846-.004 16.107 44.612h44.255l-79.126-212.427h-45.317zm-4.251 128.341l26.91-74.701 27.083 74.701h-53.993z"
					/></svg
				>
			</Circle>
			<!-- Div 4 -->
			<Circle>
				<img src="/src/lib/imgs/Llama.svg" width="40" height="40" alt="Llama" bind:this={div4Ref} />
			</Circle>
		</div>
		<div class="flex flex-col justify-center">
			<!-- Div 6 -->
			<Circle>
				<img
					src="/src/lib/imgs/star.png"
					width="40"
					height="40"
					alt="AI Prompts logo"
					bind:this={div6Ref}
				/>
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
