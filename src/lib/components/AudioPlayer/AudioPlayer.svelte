<script lang="ts">
	// import { audioData } from './audioData.js';
	import { onMount } from 'svelte';

	import TrackHeading from './TrackHeading.svelte';
	import ProgressBarTime from './ProgressBarTime.svelte';
	import Controls from './Controls.svelte';
	import VolumeSlider from './VolumeSlider.svelte';
	import PlayList from './PlayList.svelte';
	import type { HTMLAudioElement } from './$types';
	import { parse } from 'svelte/compiler';

	interface AudioData {
		name: string;
		url: string;
	}

	export let audioData:AudioData[] = [];
	let audioFile:HTMLAudioElement;
	let trackTitle = "loading...";
	let trackIndex = 0;
	let vol = 50;
	let totalTimeDisplay = "loading...";
	let currTimeDisplay = "00:00";
	let progress = 0;
	// let trackTimer = 0;
	let totalTrackTime = 0;
	let playing = false;
	let timer = 0;

	// let playing = {
	// 	src: '',
	// 	name: '',
	// 	duration: 0,
	// }

	onMount( ()=> loadTrack() )
	
	const loadTrack = () => {
		audioFile = new Audio(audioData[trackIndex].url);
		audioFile.ontimeupdate = () => currTimeDisplay = formatTimer(audioFile.currentTime);
		


		audioFile.onloadedmetadata = (e) => {
			totalTrackTime = audioFile.duration;
			totalTimeDisplay = formatTimer(totalTrackTime);
			console.log(e)
			updateTime();
		}
		trackTitle = audioData[trackIndex].name;
	}
	
	const autoPlayNextTrack = () => {
		if (trackIndex <= audioData.length-1) {
			trackIndex += 1;
			loadTrack();
			audioFile.play();
		} else {
			trackIndex = 0;
			loadTrack();
			audioFile.play();
		}
	}
	
	
	// Track Duration and Progress Bar
	
	// $: console.log(totalTrackTime)

	
	function formatTimer(sec: number) {
		const min = Math.floor(sec / 60);
		const seconds = Math.floor(sec - min * 60);
		return `${String(min).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
	}

	
	function updateTime() {
		progress = audioFile.currentTime * (100 / totalTrackTime);
		
		// currTimeDisplay = formatTimer(audioFile.currentTime);
		// totalTimeDisplay = formatTimer(totalTrackTime);
		
		if (audioFile.ended) {
			// toggleTimeRunning();
			playing = false;
			// clearInterval(trackTimer);
		}
	}
	
	// const toggleTimeRunning = () => trackTimer = setInterval(updateTime, 500);
	

	// Controls
	// $: console.log(`playing = ${playing}`)

	const togglePlay = () => {
		playing 
			? audioFile.pause()
			: audioFile.play();
		playing = !playing;
		// toggleTimeRunning()
	}

	// const play = () => {
	// 	audioFile.play();
	// 	timer = setInterval(updateTime, 500);
	// }

	// const pause = () => {
	// 	audioFile.pause();
	// 	clearInterval(timer);
	// }
	
	const rewindAudio = () => audioFile.currentTime -= 10;
	const forwardAudio = () => audioFile.currentTime += 10;
	const adjustVol = () => audioFile.volume = vol / 100; 
	
	
	// Playlist
	const handleTrack = (e) => {
		if (!playing) {
			trackIndex = Number(e.target.dataset.trackId);
			loadTrack();
			togglePlay(); // auto play
		} else {
			playing = false;
			audioFile.pause();
			trackIndex = Number(e.target.dataset.trackId);
			loadTrack();
			togglePlay(); // auto play
		}
	}

</script>


<main>
	<section id="player-cont">
		<TrackHeading {trackTitle} />

		<ProgressBarTime {currTimeDisplay} {totalTimeDisplay} {progress} />
		
		<Controls pause={playing} 
			on:rewind={rewindAudio}
			on:playPause={togglePlay}
			on:forward={forwardAudio} />
		
		<VolumeSlider bind:vol on:input={adjustVol} />	
	</section>

	<PlayList on:click={handleTrack} {audioData} />
</main>


<style>
	
</style>