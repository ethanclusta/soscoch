<script>
	import Film from '../lib/Film.svelte';
	import Partners from '../lib/Partners.svelte';

	import { db } from '../config/firebase';
	import { doc, setDoc } from 'firebase/firestore';

	/** @type {import('./$types').PageData} */
	export let data;
	const posts = data.posts;

	export let email = '';

	let loading = false;
	let success = false;

	const add = async () => {
		loading = true;
		await setDoc(doc(db, 'signups', email), {
			email: email,
			source: 'Sos Coch',
			createDate: Date.now()
		}).then(() => {
			loading = false;
			success = true;
		});
	};

	const subscribe = () => {
		if (email.length > 0 && email.length < 50) {
			add();
		}
	};
</script>

<div class="flex flex-col bg-zinc-200 gap-3 divide-y-4 w-full lg:w-1/2 p-6">
	<div class="w-full text-3xl font-bold text-black">ON THIS WEEK</div>
	{#each posts as film (film.id)}
		<Film info={film} />
	{/each}
</div>
<div class="flex flex-col bg-zinc-200 gap-3 w-full lg:w-1/2 p-6 h-fit">
	<div class="w-full text-3xl font-bold text-black">INFO</div>
	<div class="font-semibold text-xl bg-zinc-100 p-3 shadow-md">
		Sôs Coch Sinema is a community cinema project currently operating at <span
			class="underline cursor-pointer">MOMA Machynlleth's Tabernacle</span
		> venue, Wales.
	</div>
	<div class="p-3 flex flex-col gap-2 bg-zinc-100 shadow-md">
		<div class="text-sm">
			Sôs Coch Sinema launches an initial eight week season of screenings at The Tabernacle
			commencing Sat 2nd September until Sat 29th October 2022.
		</div>
		<div class="text-sm">
			We hope to garner enough interest in a community cinema in Machynlleth to be able to continue.
		</div>
		<div class="text-sm">
			Screenings will be every Thursday and Saturday during September and October and will include a
			weekly Sports Action screening, a contemporary or 'world cinema' title, a horror night and a
			cinefile selection under 'Keith Turbo presents…' - with variations of this as the season
			progresses.
		</div>
	</div>
	<div class="flex flex-col gap-2 bg-zinc-300 shadow-md text-lg p-3">
		<div>
			<span class="font-semibold">All tickets £5.00</span><br />Doors open half an hour before
			screening commences<br />Tickets available on the door (card & cash)<br />General admission
			(seating isn't numbered)
		</div>
		<div class="text-sm">
			Please note: programming is subject to change due to unforeseen circumstances so we advise you
			to check this website for latest updates.
		</div>
	</div>
	<div class="p-3 bg-zinc-100 shadow-md">
		<div class="font-semibold">
			Sôs Coch Sinema at The Tabernacle<br />
			Heol Penrallt<br />
			Machynlleth<br />
			SY20 8AJ
		</div>
	</div>
	<div class="p-3 bg-zinc-100 flex flex-col gap-2 shadow-md">
		<div class="font-semibold text-lg">Sign up to Stiwdio Dyfi's weekly newsletter:</div>
		<div class="h-12 text-sm">
			{#if !success}
				<div class="flex">
					<input
						type="text"
						bind:value={email}
						placeholder="Your email"
						class="p-2 border w-2/3 lg:w-1/2 outline-none rounded-l-md border-red-500"
					/>
					{#if !loading}
						<button on:click={subscribe} class="bg-red-500 text-white rounded-r-md p-2"
							>Subscribe</button
						>
					{:else}
						<button class="bg-red-500 text-white rounded-r-md p-2">loading...</button>
					{/if}
				</div>
			{:else}
				<div class="mt-2">
					<span class="p-2 bg-red-500 text-white rounded-md border border-[#D32D7D]"
						>You're subscribed, thanks!</span
					>
				</div>
			{/if}
		</div>
	</div>
	<div class="w-full text-3xl font-bold text-black mt-3">OUR PARTNERS</div>
	<div>Sôs Coch Sinema has received funding and support from the following:</div>
	<Partners />
    <div class="text-sm text-gray-700 text-right">Website made by <a href="https://clusta.live" target="_blank">Clusta.</a></div>
</div>
