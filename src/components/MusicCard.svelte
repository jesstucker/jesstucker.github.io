<script context="module">
  // import fs from 'fs';
  // const MUSIC_DIR = './static/techno';
  // let musicList = []

  // const files = fs.readdirSync(MUSIC_DIR);

  // fs.writeFileSync(`${MUSIC_DIR}/musicList.json`, 
  // JSON.stringify(files.map(file => {
  //     return {"filename": file}
  //   })), (err) => {
  //   if (err) throw err;
  //   console.log('Data written to file'); 
  // })
  
</script>

<script>
    import { each } from 'svelte/internal';
    import { onMount } from 'svelte'
    import Notecard from './Notecard.svelte'
    let tracks = [],
		current_song,
		player,
		play,
		pause,
		next,
		currentTime=0,
		playSelected;
		

	onMount(async () => {
		// let boo = new Audio('./techno/;3-317235075.mp3')
		// boo.play()
		// console.log(boo.src)
		// tracks = await fetch('./techno/musicList.json')
		// 			.then(resp => resp.json())
		// 			.then(data => tracks = data.map(t => t.filename))
		await fetch('https://api.github.com/repos/jesstucker/jesstucker.github.io/contents/techno')
				.then(res => res.json())
				.then(data => tracks = data.map(t => t))

		current_song = 0;
		player = new Audio();
		player.src = tracks[current_song];

		play = function (){
			player.play();
		}

		pause = function (){
			player.pause();
		}

		next = function (){
			player.pause();
			player.src = tracks[++current_song];
			player.onload = () => player.play();
		}
		playSelected = function(song){
			player.pause();
			player.src = `./techno/${song}`;
			console.log(player.src)
			player.play();	
		}
	})
     // Contains Audio URLs 


    
    
    // const blah = preload()

</script>

<div>  </div>
<div></div>
<!-- <div on:click={next}>clickme</div> -->

<!-- <button on:click={play}>play</button> -->
<ul>
	{#each tracks as track}
		<li on:click={() => playSelected(track.path)}>
			{track.name}
    	</li>
	{/each}
</ul>