<script lang="ts">
	import { cn } from '$lib/utils'

	let className: any = ''
	export { className as class }
</script>

<div
	class={cn(
		'z-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] transition-all duration-200 dark:bg-background dark:hover:border-cyan-300 dark:hover:bg-[#051a22]',
		className
	)}
>
	<slot></slot>
</div>
