<script lang="ts">
	import { onMount } from 'svelte';

	import PlayList from './PlayList.svelte';
	import type { HTMLAudioElement } from './$types';
	import { track, playing, togglePlay } from '$lib/stores'

	interface AudioData {
		name: string;
		url: string;
	}

	let trackIndex = 0;
	let totalTrackTime = 0;

	export let audioData:AudioData[] = [];

	onMount( () => loadTrack() )
	
	const loadTrack = () => {
		$track.audioFile = new Audio(audioData[trackIndex].url);
		$track.audioFile.ontimeupdate = () => {
			$track.elapsed = formatTimer($track.audioFile.currentTime);
			$track.progress = $track.audioFile.currentTime * (100 / totalTrackTime);

			if( $track.audioFile.ended ){
				trackIndex = trackIndex + 1;
				loadTrack();
				$track.audioFile.play()
			}
		}

		$track.audioFile.onloadedmetadata = (e:HTMLAudioElement) => {
			totalTrackTime = $track.audioFile.duration;
			$track.duration = formatTimer(totalTrackTime);
		}

		$track.title = audioData[trackIndex].name;
	}

	function formatTimer(sec: number) {
		const min = Math.floor(sec / 60);
		const seconds = Math.floor(sec - min * 60);
		return `${String(min).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
	}

	// const togglePlay = () => {
	// 	$playing 
	// 		? $track.audioFile.pause()
	// 		: $track.audioFile.play();
	// 	$playing = !$playing;
	// }
	
	const rewindAudio = () => $track.audioFile.currentTime -= 10;
	const forwardAudio = () => $track.audioFile.currentTime += 10;
	// const adjustVol = () => $track.audioFile.volume = vol / 100; 
	
	
	// Playlist
	const handleTrack = (e) => {
		if (!$playing) {
			trackIndex = Number(e.detail.trackIndex);
			loadTrack();
			togglePlay(); // auto play
		} else {
			$playing = false;
			$track.audioFile.pause();
			trackIndex = Number(e.detail.trackIndex);
			loadTrack();
			togglePlay(); // auto play
		}
		// $track.audioFile.srcObj = null;
		// trackIndex = Number(e.detail.trackIndex)
		// loadTrack();
		// $track.audioFile.play();
	}

	const changeTrack = e => {
		trackIndex = Number(e.target.dataset.trackId);
		loadTrack();
		$track.audioFile.play();
	}

</script>


<main>
	<section id="player-cont">

		<!-- <VolumeSlider bind:vol on:input={adjustVol} />	 -->
	</section>

	<PlayList on:trackChange={handleTrack} {trackIndex} {audioData} />
</main>


<style>
	
</style>