<script lang="ts">
	import { onMount } from "svelte";
	import {
		songs,
		selectSong,
		player,
		playIndex,
		togglePlay,
		next,
		prev,
		progressPercent
	} from '$lib/stores';
	import Notecard from "$lib/components/Notecard.svelte";
	import ProgressBarTime from "$lib/components/ProgressBarTime.svelte";
	import AudioPlayer from "$lib/components/AudioPlayer.svelte";
	
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

	const isEnter = (e:KeyboardEvent) => e.key === 'Enter'
	const isSpace = (e:KeyboardEvent) => { e.preventDefault(); return e.key === ' ' }
	// const isNextKey = (e:KeyboardEvent) => console.log(e)

	$: $player.title = $songs[$playIndex]
						? $songs[$playIndex].title
						: '';

</script>

<!-- <svelte:window on:keypress={isNextKey}></svelte:window> -->

<svelte:head>
	<title>Hi</title>
	<meta name="description" content="$$$$$$" />
</svelte:head>

<section>
	<div class=" ">
		<Notecard >
			<div slot="title">
				<AudioPlayer />
				<!-- Head's up: Default Audio Player is invisible, but it needs loading  -->
				<div class="controls-buttons flex justify-center space-x-1 mb-[0.0625in]">
					<button class="flex rotate-180 space-x-[1px] px-2 py-1" on:click={prev} aria-label="Previous Track">
						<div class="bar  origin-center scale-75"></div>
						<div class="triangle scale-75"></div>
					</button>
					<button on:click={togglePlay} class="px-3 py-1" aria-label="Play"> 
						<div class="triangle" class:playing={!$player.paused}></div>
					</button>
					<button class="flex space-x-[1px] px-2  py-1" on:click={next} aria-label="Next Track">
						<div class="bar  origin-center scale-75"></div>
						<div class="triangle scale-75 "></div>
					</button>
				</div>

				<ProgressBarTime progress={$progressPercent}/>
			</div>

			<div slot="body">
				<div>
					{#each $songs as song,i}
						<div on:click={ () => selectSong(i)}
							on:keypress={ e => (isSpace(e) || isEnter(e)) && selectSong(i) }
							class="song"
							class:active={ i === $playIndex }
							role="button"
							tabindex=0
						>{song.title}</div>
					{/each}
				</div>
			</div>
		</Notecard>
	</div>
</section>

<style>
	button {
		@apply rounded-sm m-0;
		background-color: #fffafa;
	}
	button:hover {
		background-color: rgba(88, 215, 229, 0.104);
	}

	.song {
		padding: 0 0.125in;
	}

	.song:hover {
		background-color: #fbf719bc;
	}

	.song.active {
		background-color: #f8f6aa86;
		position: sticky;
		top: 0;
		bottom: 0;
	}

	.bar {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		height: 16px;
		border-color: transparent transparent transparent #202020;
		border-style: solid;
		border-width: 0 0 0 4px;
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
	.playing {
		border-style: double;
		border-width: 0px 0 0px 12px;
	}

</style>
