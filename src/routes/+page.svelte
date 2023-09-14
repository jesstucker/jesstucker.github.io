<script>
	// import Counter from './Counter.svelte';
	// import welcome from '$lib/images/svelte-welcome.webp';
	// import welcome_fallback from '$lib/images/svelte-welcome.png';
	import Notecard from "$lib/components/Notecard.svelte";
	import { onMount } from "svelte";
	import AudioPlayer from "$lib/components/AudioPlayer/AudioPlayer.svelte";
	
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
	<meta name="description" content="Jess Tucker" />
</svelte:head>

<section>
	Jess Tucker
	<Notecard>
		<div slot="title">Jess</div>
		<div slot="body">
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem officiis velit incidunt, dolorem ab perferendis repudiandae tempora aut minima quidem, quibusdam mollitia praesentium fugiat nobis itaque. Doloribus natus aliquid libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sunt non, voluptates necessitatibus sint exercitationem nesciunt et explicabo sit, dolores delectus praesentium labore! Unde a in praesentium necessitatibus. Ad, voluptates. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque dolores vero voluptates impedit quisquam nostrum reiciendis molestiae, odit provident maxime repellat amet est minima nihil sequi ratione facere dicta ipsum!
		</div>
	</Notecard>
	<Notecard>
		<div slot="title">Music</div>
		<div slot="body">
			{#await fetchingSongs then songs}
				<AudioPlayer audioData={songs}/>
			{/await}
		</div>
	</Notecard>
	
	<Notecard>
		<div slot="title">Songs</div>
		<div slot="body">
			{#await fetchingSongs then songs}
				{#each songs as song}
					<div>
						{song.name} - {song.url}
					</div>
				{/each}
			{/await}
		</div>
	</Notecard>
</section>

<style>

</style>
