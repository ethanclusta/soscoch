<script>
	import '../app.css';
</script>

<div class="relative flex flex-col my-10 mx-8 lg:mx-20">
	<div class="absolute right-0 top-0 text-white/80 hover:text-white cursor-pointer">Cymru</div>
	<h1 class="text-red-400 font-sos text-5xl lg:text-7xl">Sôs Coch</h1>
	<h1 class="text-white font-sos text-5xl lg:text-7xl">
		Sinema <span class="text-xl lg:text-2xl text-green-500">at the Tabernacle</span>
	</h1>
	<div class="mt-5 flex flex-col lg:flex-row gap-8">
		<slot />
	</div>
</div>
