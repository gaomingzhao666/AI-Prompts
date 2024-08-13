<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Languages } from 'lucide-svelte';

	let position = 'bottom';
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button variant="outline" builders={[builder]} size="icon">
			<Languages class="h-[1.2rem] w-[1.2rem]" />
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content>
		<DropdownMenu.RadioGroup bind:value={position}>
			<DropdownMenu.RadioItem value="top">English</DropdownMenu.RadioItem>
			<DropdownMenu.RadioItem value="bottom">简体中文</DropdownMenu.RadioItem>
			<DropdownMenu.RadioItem value="right">日本語</DropdownMenu.RadioItem>
		</DropdownMenu.RadioGroup>
	</DropdownMenu.Content>
</DropdownMenu.Root>
