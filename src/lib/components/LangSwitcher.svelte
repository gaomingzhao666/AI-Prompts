<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Languages } from 'lucide-svelte';
	import { locale } from 'svelte-i18n';

	let position = 'bottom';
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button variant="outline" builders={[builder]} size="icon">
			<Languages class="h-[1.2rem] w-[1.2rem]" />
		</Button>
	</DropdownMenu.Trigger>

	<DropdownMenu.Content class="mt-2 w-44 font-bold">
		<DropdownMenu.RadioGroup bind:value={position}>
			<DropdownMenu.RadioItem value="top" on:click={() => locale.set('en')}
				>English</DropdownMenu.RadioItem
			>
			<DropdownMenu.RadioItem value="bottom" on:click={() => locale.set('cn')}
				>简体中文</DropdownMenu.RadioItem
			>
			<DropdownMenu.RadioItem value="right" on:click={() => locale.set('ja')}
				>日本語</DropdownMenu.RadioItem
			>
		</DropdownMenu.RadioGroup>
	</DropdownMenu.Content>
</DropdownMenu.Root>
