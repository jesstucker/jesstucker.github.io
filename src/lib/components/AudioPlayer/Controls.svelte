<script>
	import { createEventDispatcher } from 'svelte';
	import Arrow from './Arrow.svelte';
	
	let dispatch = createEventDispatcher();
	
	const icons = {
		play: "https://freesvg.org/img/media-playback-start.png",
		pause: "https://freesvg.org/img/media-playback-pause.png",
		rewind: "https://freesvg.org/img/media-skip-backward.png",
		fwd: "https://freesvg.org/img/media-skip-forward.png"
	}
	
  export let pause=false;
	
</script>


<div id="btn-cont">
	<!-- <button id="rewind" on:click={() => dispatch('rewind')}>
		<img src={icons.rewind} alt="rewind"/>
	</button> -->
	<!-- <button id="play" on:click={() => dispatch('playPause')}>
		<img src={isPlaying ? icons.pause : icons.play} 
				 alt="play"/>
		<Arrow />
		
	</button> -->
	<button on:click={() => dispatch('playPause')}> 
			<div class="triangle" class:pause></div>
	</button>

	<!-- <button id="forward" on:click={() => dispatch('forward')}>
		<img src={icons.fwd} alt="forward"/>
	</button> -->
	<button class="flex">
		<div class="triangle"></div>
		<div class="triangle"></div>
	</button>
</div>

<style>
	#btn-cont {
		display: flex;
		justify-content: space-between;
	}

	button {
		border: none;
		padding: 0;
		margin: 0;
		background-color: transparent;
	}

	.triangle {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		height: 16px;
		border-color: transparent transparent transparent #202020;
		transition: 100ms border-width ease;
		will-change: border-width;
		cursor: pointer;
		border-style: solid;
		border-width: 8px 0 8px 12px;
	}
	.pause {
		border-style: double;
		border-width: 0px 0 0px 12px;
	}
</style>