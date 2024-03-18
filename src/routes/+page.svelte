<script lang="ts">
	import type { PageData } from './$types';
	import { get } from 'svelte/store';

	export let data: PageData;

	$: ({ testDB } = data);
</script>

<section>
	<h1>Welcome to SvelteKit</h1>
	{#each testDB as dbentry}
		<p>{dbentry.name}</p>
	{/each}
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</section>
