<script>
	import { onMount } from "svelte";
	import { track, playing, togglePlay } from '$lib/stores'
	import Notecard from "$lib/components/Notecard.svelte";
	import AudioPlayer from "$lib/components/AudioPlayer/AudioPlayer.svelte";
	import Controls from '$lib/components/AudioPlayer/Controls.svelte';
	import ProgressBarTime from "$lib/components/AudioPlayer/ProgressBarTime.svelte";
	
	let fetchingSongs = Promise.resolve([])
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

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="$$$$$$" />
</svelte:head>

<section>
	<!-- <Notecard>
		<div slot="title">$$$</div>
		<div slot="body">
			$$$$$$$$$$$$$$ $$$$$$$$$$$$$$$$$$$$$ $$$$$$$$$$$$$$ $$$$$$$$$$$$$$$ $$$$$$$$$$$$$$ $$$$$$$$$$ $$$$$$$$$$$$ $$$$$$$$$$$$$ $$$$$$$$$$$$$ $$$$$$$$$$$$$$$$ $$$$$$$$$$$$ $$$$$$$$$$$$$ $$$$$$$$$$$$$ $$$$$$$$$$$ $$$$$$$$$$ $$$$$ $ $$$$$$$$$$$$$$$$ $$$$$$$$$$$ $$$$$ $$$$ $$$$ $$$$$$$$$ $$$$$$$ $$$$$$$$$ $$$$$$$ $$$$$$$$$$$$$$$ $$$$$$$$$$$ $$$$$$ $$$$$ $$$$ $ $$$ $$$$$$ $$$$$$$$$ $$$$$$$$$$$$$$$$ $$$$$$$$$$$$ $$$$$$$ $$$$$$$$
		</div>
	</Notecard> -->
	<Notecard>
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
	</Notecard>
	
</section>

<style>

</style>
