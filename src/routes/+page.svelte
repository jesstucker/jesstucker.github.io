<script>
	import { onMount } from "svelte";
	import { track, playing, togglePlay,
	songs,
	selectSong,
	player,
	playIndex,
	currentTime,
	play,
	next,
	prev,
 } from '$lib/stores'
	import Notecard from "$lib/components/Notecard.svelte";
	import AudioPlayer from "$lib/components/AudioPlayer/AudioPlayer.svelte";
	import Controls from '$lib/components/AudioPlayer/Controls.svelte';
	import ProgressBarTime from "$lib/components/AudioPlayer/ProgressBarTime.svelte";
	import Ap2 from "$lib/components/AP2.svelte";
	import Ap3 from "$lib/components/AP3.svelte";
	
	let fetchingSongs = Promise.resolve([{
		name: '',
		url: ''
	}])
	$: console.log(fetchingSongs)

	onMount(() => {
		fetchingSongs = fetch('https://jt-music.s3.amazonaws.com/')
			.then(res => res.text())
			.then(xml => {
				const parser = new DOMParser();
				const doc = parser.parseFromString(xml, "application/xml");
				return [...doc.querySelectorAll('Contents')].map(el => {
					const songName = el.querySelector('Key')?.textContent
					return {
						name: songName,
						url: `https://jt-music.s3.amazonaws.com/${songName}`
					}
				}).toSorted((a, b) => a.name.localeCompare(b.name, undefined, {
							numeric: true,
							sensitivity: 'base'
						})
				)
			})
	})

	$: $player.title = $songs[$playIndex]
						? $songs[$playIndex].title
						: '';

</script>

<svelte:head>
	<title>Hi</title>
	<meta name="description" content="$$$$$$" />
</svelte:head>

<section>
	<!-- <Notecard>
		<div slot="title">$$$</div>
		<div slot="body">
			$$$$$$$$$$$$$$ $$$$$$$$$$$$$$$$$$$$$ $$$$$$$$$$$$$$ $$$$$$$$$$$$$$$ $$$$$$$$$$$$$$ $$$$$$$$$$ $$$$$$$$$$$$ $$$$$$$$$$$$$ $$$$$$$$$$$$$ $$$$$$$$$$$$$$$$ $$$$$$$$$$$$ $$$$$$$$$$$$$ $$$$$$$$$$$$$ $$$$$$$$$$$ $$$$$$$$$$ $$$$$ $ $$$$$$$$$$$$$$$$ $$$$$$$$$$$ $$$$$ $$$$ $$$$ $$$$$$$$$ $$$$$$$ $$$$$$$$$ $$$$$$$ $$$$$$$$$$$$$$$ $$$$$$$$$$$ $$$$$$ $$$$$ $$$$ $ $$$ $$$$$$ $$$$$$$$$ $$$$$$$$$$$$$$$$ $$$$$$$$$$$$ $$$$$$$ $$$$$$$$
		</div>
	</Notecard> -->
	<!-- <Notecard>
		<div slot="title">
			<div class="flex justify-between">
				<div>{$track.elapsed} / {$track.duration}</div>

				<Controls pause={$playing} on:playPause={togglePlay} />
			</div>

			<ProgressBarTime progress={$track.progress}/>
		</div>
		<div slot="body">
			{#await fetchingSongs then songs}
				<AudioPlayer audioData={songs}/>
			{/await}
		</div> 
	</Notecard> -->
	<!-- <Ap3 /> -->
	<Notecard>
		<div slot="title">
			<!-- Head's up: Default Audio Player is invisible, but it needs loading  -->
			<Ap2 />
			<div class="flex justify-end space-x-2 mb-1">
				<button class="player" on:click={prev}>Prev</button>
				<button class="player" on:click={play}>Play</button>
				<button class="player" on:click={next}>Next</button>
			</div>
			<div class="flex justify-end">
				<!-- <div>{$track.elapsed} / {$track.duration}</div>

				<Controls pause={$playing} on:playPause={togglePlay} />
			</div>

			<ProgressBarTime progress={$track.progress}/> -->
			<div class="">
				{$currentTime} / { $player.duration }
			</div>
			<!-- {$player.title} -->
			</div>
		</div>
		<div slot="body">
			{#each $songs as song,i}
				<div on:click={() => selectSong(i)}
					on:keypress={()=>null}
					class="song"
					class:active={i === $playIndex}
					role="button"
					tabindex=0
				>{song.title}</div>
			{/each}
		</div>
	</Notecard>
	<!-- <Ap2 /> -->
	
</section>

<style>
	.song:hover {
		background-color: #FBF71955;
	}

	.song.active {
		background-color: #F8F5AA;
		position: sticky;
		top: 0;
		bottom: 0;
	}
	button.player {
		border: none;
		padding: 0.03125in;
		/* margin: 0; */
		background-color: #fff;
		cursor: pointer;
	}
	button.player:hover {
		background-color: #FBF71955;
	}

</style>
