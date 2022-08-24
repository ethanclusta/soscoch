<script>
	import Film from '../lib/Film.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
    const posts = data.posts;
</script>

<div class="flex flex-col bg-zinc-200 gap-4 divide-y-4 w-full lg:w-1/2 p-6">
    <div class="w-full text-3xl font-bold text-black">ON THIS WEEK</div>
	{#each posts as film (film.id)}
		<Film info={film} />
	{/each}
</div>
<div class="flex flex-col bg-zinc-200 gap-2 h-screen w-full lg:w-1/2 p-6">
	<div class="w-full text-3xl font-bold text-black">INFO</div>
</div>
