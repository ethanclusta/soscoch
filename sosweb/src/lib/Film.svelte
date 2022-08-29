<script>
	export let info;

    const splitHtml = info.html.split('<p>');
    const titles = splitHtml[0];
	const para = splitHtml[1];
    const pText = para.slice(0, para.length - 4);

	const splitStr = pText.split(' ');
	const sliced = splitStr.slice(0, 60);
	const joined = splitStr.length < 60 ? sliced.join(' ') : sliced.join(' ') + '...';
    const full = pText;
</script>

<div class="w-full flex flex-col gap-2">
	<img class="w-full" alt={info.title} src={info.feature_image} />
	<div class="flex flex-col gap-1">
		<div class="font-sos text-red-500 text-2xl">{info.title}</div>
        {@html titles}
        <div class="my-2"><span class="bg-red-500 text-white font-bold p-2 text-sm">Book tickets</span></div>
		<p>
            {joined}
            {#if splitStr.length > 60}
            <span class="underline">more</span>
            {/if}
        </p>
	</div>
</div>
