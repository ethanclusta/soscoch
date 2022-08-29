<script>
	export let info;

    let showFull = false;

    const toggleShow = () => {
        showFull = !showFull;
        return;
    };

	const splitHtml = info.html.split('<p>');
	const titles = splitHtml[0];
	const para = splitHtml[1];
	const pText = para.slice(0, para.length - 4);

	const splitStr = pText.split(' ');
	const sliced = splitStr.slice(0, 60);
	const joined = splitStr.length < 60 ? sliced.join(' ') : sliced.join(' ') + '...';
	const full = pText;
</script>

<div class="w-full">
	<div class="w-full flex flex-col p-4 bg-gray-100 shadow-md">
		<img class="w-full" alt={info.title} src={info.feature_image} />
		<div class="flex flex-col gap-1">
			<div class="font-sos text-red-500 text-2xl">{info.title}</div>
			{@html titles}
			<div class="my-2">
				<span class="bg-red-500 text-white cursor-pointer font-bold p-2 text-sm">Book tickets</span>
			</div>
            {#if splitStr.length > 60 && showFull === false}
			<p>
				{@html joined}
				{#if splitStr.length > 60}
					<span on:click={toggleShow} class="underline cursor-pointer">more</span>
				{/if}
			</p>
            {:else}
            <p>
                {@html full}
                <span on:click={toggleShow} class="underline cursor-pointer">less</span>
            </p>
            {/if}
		</div>
	</div>
</div>
