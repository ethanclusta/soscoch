<script>
	import '../app.css';
</script>

<div class="py-10 px-16 lg:px-20">
	<h1 class="text-red-400 font-sos text-7xl">Sôs Coch</h1>
	<h1 class="text-white font-sos text-7xl">Sinema <span class="text-3xl text-green-500">at the Tabernacle</span></h1>
	<div class="flex flex-col lg:flex-row gap-8 w-full mt-5">
		<div class="flex flex-col lg:flex-row gap-8 w-full">
			<slot />
		</div>
	</div>
</div>
