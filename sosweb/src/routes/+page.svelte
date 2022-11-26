<script>
	import Film from '../lib/Film.svelte';
	import Partners from '../lib/Partners.svelte';

	import { db } from '../config/firebase';
	import { doc, setDoc } from 'firebase/firestore';
	// import Modal from '../lib/Modal.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	const posts = data.posts;
	const pageOne = posts.slice(0, 14);
	const pageTwo = posts.slice(15);

	let page = 1;
	const setPage = () => {
		page = page === 1 ? 2 : 1;
	};

	export let email = '';

	let loading = false;
	let success = false;

	const add = async () => {
		loading = true;
		email = email.trim();
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

	// let showModal = false;
	// const toggleModal = () => {
	// 	showModal = !showModal;
	// };
</script>

<!-- {#if showModal}
 <Modal on:click={toggleModal} />
{/if} -->
<div class="flex flex-col bg-zinc-200 gap-3 divide-y-4 w-full lg:w-1/2 p-3 lg:p-6">
	<div class="w-full flex flex-row justify-between">
		<div class="text-3xl font-bold text-black">FILMS SCREENED</div>
		<div on:click={setPage} class="text-sm text-zinc-600 hover:text-black cursor-pointer">
			page {page === 1 ? '2' : '1'}
		</div>
	</div>
	{#if page === 1}
		{#each pageOne as film, i (film.id)}
			<!-- {#if i === 4}
		<div class="w-full text-3xl font-bold text-black">COMING UP</div>
		{/if} -->
			<Film info={film} />
		{/each}
	{/if}
	{#if page === 2}
		{#each pageTwo as film, i (film.id)}
			<!-- {#if i === 4}
		<div class="w-full text-3xl font-bold text-black">COMING UP</div>
		{/if} -->
			<Film info={film} />
		{/each}
	{/if}
</div>
<div class="flex flex-col bg-zinc-200 gap-3 w-full lg:w-1/2 p-3 lg:p-6 h-fit">
	<div class="w-full text-3xl font-bold text-black">INFO</div>
	<!-- <div on:click={toggleModal} class="bg-red-500 text-white font-bold text-xl p-3 text-center cursor-pointer">WIN 4 FREE TICKETS TO SÔS COCH SINEMA</div> -->
	<div class="font-semibold text-xl bg-zinc-100 p-3 shadow-md">
		Sôs Coch Sinema is a community cinema project which operated from <a
			href="https://moma.cymru"
			target="_blank"
			class="underline cursor-pointer">MOMA Machynlleth's Tabernacle</a
		> venue, Wales, running between September 3rd and October 29th, 2022.
	</div>
	<div class="flex flex-col gap-2 bg-zinc-300 shadow-md text-lg p-3">
		<div>
			<span class="font-semibold">Tickets £5.00<br />Under 15s £3.00</span><br />Doors open half an
			hour before screening commences<br />Tickets available on the door (card & cash)<br />General
			admission (seating isn't numbered)
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
	<hr class="opacity-90" />
	<p class="text-[0.7rem] text-slate-700">
		Sôs Coch Sinema is a project by Stiwdio Dyfi CIC.<br />Company No 13843739 registered in England
		and Wales<br />205 Y Plas Aberystwyth Road Machynlleth Powys SY20 8ER United Kingdom<br
		/>stiwdiodyfi@gmail.com
	</p>
	<div class="text-sm text-gray-700 text-right">
		Website made by <a href="https://clusta.live" target="_blank">Clusta.</a>
	</div>
</div>
