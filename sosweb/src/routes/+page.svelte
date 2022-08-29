<script>
	import Film from '../lib/Film.svelte';
	import Partners from '../lib/Partners.svelte';

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
<div class="flex flex-col bg-zinc-200 gap-2 w-full lg:w-1/2 p-6 h-fit">
	<div class="w-full text-3xl font-bold text-black">INFO</div>
	<div class="font-semibold text-lg">
		Sôs Coch Sinema is a community cinema project currently operating at <span class="underline"
			>MOMA Machynlleth's Tabernacle</span
		> venue, Wales.
	</div>
	<div class="flex flex-col gap-2 bg-zinc-300 shadow-md text-lg p-3">
		<div>
			<span class="font-semibold">All tickets £5.00</span><br />Doors open half an hour before
			screening commences<br />Tickets available on the door (card & cash)<br />General admission
			(seating isn't numbered)
		</div>
		<div class="text-sm">
			Please note: programming is subject to change due to unforeseen circumstances so we advise you
			to check the website.
		</div>
	</div>
	<div class="w-full text-3xl font-bold text-black mt-3">OUR PARTNERS</div>
	<div>Sôs Coch Sinema has received funding and support from the following:</div>
	<Partners />
</div>
