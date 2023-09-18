<script lang="ts">
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
	progressPercent,
	songDuration,
 } from '$lib/stores'
	import Notecard from "$lib/components/Notecard.svelte";
	import ProgressBarTime from "$lib/components/AudioPlayer/ProgressBarTime.svelte";
	import Ap2 from "$lib/components/AP2.svelte";
	
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
	<Notecard>
		<div slot="title">
			<!-- Head's up: Default Audio Player is invisible, but it needs loading  -->
			<Ap2 />
			<div class="flex justify-end space-x-2 mb-1">
				<button class="player" on:click={prev}>Prev</button>
				<button class="player" on:click={play}>Play</button>
				<button class="player" on:click={next}>Next</button>
			</div>
			<div class="">
				<ProgressBarTime progress={$progressPercent}/>
			</div>
				<div class="flex justify-end">
					{$currentTime} / { $songDuration }
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
	
</section>

<style>
	.scrubber {
		width: 100%;
		height: 40px;
		background-color: grey;
		position: relative;
	}

	.scrubber .to-position {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		background-color: red;
	}

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
		background-color: #fff;
		cursor: pointer;
	}
	button.player:hover {
		background-color: #FBF71955;
	}

</style>
