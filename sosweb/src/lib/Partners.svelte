<script>
    import Lottery from '$lib/assets/Lottery.png';
	import MTC from '$lib/assets/MachCouncil.png';
	import PAVO from '$lib/assets/PAVO.png';
	import Powys from '$lib/assets/PowysCouncil.png';
	import UKGov from '$lib/assets/UKGov.png';
	import Vis from '$lib/assets/VisImpact.png';
	import Vid from '$lib/assets/Videndum.png';
</script>
<div class="flex flex-col md:flex-row lg:flex-col xl:flex-row flex-wrap gap-2 mt-2">
    <div class="flex gap-2">
        <div class="flex place-content-center h-14">
            <img class="h-full" alt="Lottery" src={UKGov} />
        </div>
        <div class="flex h-14">
            <img class="h-full" alt="Lottery" src={Powys} />
        </div>
    </div>
    <div class="flex gap-2">
        <div class="flex h-14 place-content-center">
            <img class="h-full" alt="Lottery" src={Lottery} />
        </div>
        <div class="flex place-content-center h-14">
            <img class="h-full" alt="Lottery" src={MTC} />
        </div>
        <div class="flex place-content-center h-14">
            <img class="h-full" alt="Lottery" src={PAVO} />
        </div>
    </div>
    <div class="flex gap-2">
        <div class="flex place-content-center h-14">
            <img class="h-full" alt="Lottery" src={Vis} />
        </div>
        <div class="flex h-14">
            <img class="h-full" alt="Lottery" src={Vid} />
        </div>
    </div>
</div>