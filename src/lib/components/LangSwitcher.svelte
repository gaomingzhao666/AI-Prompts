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
		<DropdownMenu.RadioGroup>
			<DropdownMenu.Item on:click={() => locale.set('en')}>English</DropdownMenu.Item>
			<DropdownMenu.Item on:click={() => locale.set('cn')}>简体中文</DropdownMenu.Item>
			<DropdownMenu.Item on:click={() => locale.set('ja')}>日本語</DropdownMenu.Item>
		</DropdownMenu.RadioGroup>
	</DropdownMenu.Content>
</DropdownMenu.Root>
