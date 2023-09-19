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

<section class=" origin-top md:scale-150">
	<Notecard>
		<div slot="title">
			<!-- Head's up: Default Audio Player is invisible, but it needs loading  -->
			<Ap2 />
			<div class="controls-buttons flex justify-end my-1 space-x-1 mr-[0.125in] ">
				<button class="flex rotate-180 space-x-[3px] p-1" on:click={prev}>
					<div class="bar  origin-center"></div>
					<div class="triangle "></div>
				</button>
				<button on:click={togglePlay} class="px-3 py-1"> 
					<div class="triangle" class:playing={!$player.paused}></div>
				</button>
				<button class="flex space-x-[3px] p-1" on:click={next}>
					<div class="bar  origin-center"></div>
					<div class="triangle "></div>
				</button>
			</div>
			<div class="">
				<ProgressBarTime progress={$progressPercent}/>
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
	button {
		@apply  rounded-md m-0;
		background-color: #fffafa;
	}
	button:hover {
		background-color: #eeeeee;
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
