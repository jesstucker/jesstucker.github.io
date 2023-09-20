<script lang="ts">
	import {
		currentTime,
		songDuration,
		formattedTimer
	} from '$lib/stores'

	export let progress:number;

	let scrubberPosition = 0;
	let scrubberWidth = 0;

	const syncTracking = (e:MouseEvent) => {
		scrubberPosition = ( e.offsetX / scrubberWidth ) * 100
	}
	const hideTracking = () => {
		scrubberPosition = 0
	}
	const updatePlayPosition = () => {
		$currentTime = $songDuration * (scrubberPosition / 100)
	}
</script>

<div id="progress-bar-cont" class="relative">
	<div id="bar" style="width: {progress}%" class="absolute">
	</div>
	<div class="scrubber absolute " 
		bind:offsetWidth={scrubberWidth}
		on:mousemove={syncTracking} 
		on:mouseleave={hideTracking} 
		on:click={updatePlayPosition}>
			<div class="to-position" style="width: {scrubberPosition}%"></div>
	</div>
	<div class="flex absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none ">
		{$formattedTimer}
	</div>
</div>

<style>
	#progress-bar-cont {
		width: 100%;
		/* display: flex; */
		cursor: pointer;
		height: 1rem;
	}

	#bar {
		width: 0%;
		height: 100%;
		/* background: linear-gradient(to right, #FBF71955, #FBF719); */
		background-color: #FFC0CB99;
	}

	.scrubber {
		content: '';
		position: relative;
		display: flex;
		background-color: transparent;
		width: 100%;
		height: 100%;
	}

	.scrubber .to-position {
		content: '';
		top: 0;
		left: 0;
		height: 100%;
		background-color: #FFC0CB99;
	}
</style>