<script>
	import { onMount } from "svelte";
    import { writable } from "svelte/store";
    const audio = writable()

    let songs = [
        {
            src: "",
            title: ""
        }
    ]

    let fetchingSongs = Promise.resolve([])
    let userInteraction = false;

    onMount(() => {
        fetchingSongs = 
            fetch('https://jt-music.s3.amazonaws.com/')
            .then(res => res.text())
            .then(xml => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(xml, "application/xml");
                songs = [...doc.querySelectorAll('Contents')].map(el => {
                    const songName = el.querySelector('Key')?.textContent
                    return {
                        title: songName,
                        src: `https://jt-music.s3.amazonaws.com/${songName}`
                    }
                }).toSorted((a, b) => a.title.localeCompare(b.title, undefined, {
                            numeric: true,
                            sensitivity: 'base'
                        })
                )
            })

            if ("mediaSession" in navigator) {
                navigator.mediaSession.metadata = new MediaMetadata({
                    title: "",
                    artist: "Jess",
                    album: "",
                    artwork: [
                    {
                        src: "https://dummyimage.com/512x512",
                        sizes: "512x512",
                        type: "image/png",
                    },
                    ],
                });

                navigator.mediaSession.setActionHandler("play", () => play())
                navigator.mediaSession.setActionHandler("pause", () => pause())
                navigator.mediaSession.setActionHandler("stop", () => {
                    /* Code excerpted. */
                });
                // navigator.mediaSession.setActionHandler("seekbackward", () => {
                //     /* Code excerpted. */
                // });
                // navigator.mediaSession.setActionHandler("seekforward", () => {
                //     /* Code excerpted. */
                // });
                // navigator.mediaSession.setActionHandler("seekto", () => {
                //     /* Code excerpted. */
                // });
                navigator.mediaSession.setActionHandler("previoustrack", () => {
                    prev();
                    navigator.mediaSession.metadata.title = songs[$playIndex].title;
                });
                navigator.mediaSession.setActionHandler("nexttrack", () => {
                    next();
                    navigator.mediaSession.metadata.title = songs[$playIndex].title;
                });
                // navigator.mediaSession.setActionHandler("skipad", () => {
                //     /* Code excerpted. */
                // });
                // navigator.mediaSession.setActionHandler("togglecamera", () => {
                //     /* Code excerpted. */
                // });
                // navigator.mediaSession.setActionHandler("togglemicrophone", () => {
                //     /* Code excerpted. */
                // });
                // navigator.mediaSession.setActionHandler("hangup", () => {
                //     /* Code excerpted. */
                // });
                // const actionHandlers = [
                //     // play
                //     [
                //         "play",
                //             async () => {
                //             // play our audio
                //             // await audioEl.play();
                //             // set playback state
                            
                //             navigator.mediaSession.playbackState = "playing";
                //             // update our status element
                //             navigator.mediaSession.metadata.title = songs[$playIndex].title;

                //             // updateStatus(allMeta[index], "Action: play  |  Track is playing…");
                //         },
                //     ],
                //     [
                //         "pause",
                //         () => {
                //             // pause out audio
                //             // audioEl.pause();
                //             // set playback state
                //             navigator.mediaSession.playbackState = "paused";
                //             // update our status element
                //             // updateStatus(allMeta[index], "Action: pause  |  Track has been paused…");
                //         },
                //     ],
                // ];

                // for (const [action, handler] of actionHandlers) {
                //     try {
                //         navigator.mediaSession.setActionHandler(action, handler);
                //     } catch (error) {
                //         console.log(`The media session action "${action}" is not supported yet.`);
                //     }
                // }
        }
    })

    const playIndex = writable(0);

    const player = writable({
        title: "",
        duration: 0.000000,
        paused: true,
        volume: 1,
        src: "",
        status: "",
    });

    const currentTime = writable(0);

    $: console.log(
        $player,
        $currentTime,
        $player.status
    )

    const next = () => {
        songs.length - 1 === $playIndex
            ? $playIndex = 0
            : $playIndex = $playIndex + 1;
    }

    const prev = () => {
        $playIndex === 0
            ? $playIndex = songs.length - 1
            : $playIndex = $playIndex - 1;
    }

    const pause = () => $player.paused = true;
    const play = () => $player.paused = false;

    const selectSong = i => {
        userInteraction = true;
        $playIndex = i;
        $player.paused = false;
    }

    $: $player.title = songs[$playIndex].title;

    

</script>

<audio
	bind:this={$audio}
	bind:duration={$player.duration}
	bind:currentTime={$currentTime}
	bind:paused={$player.paused}
	bind:volume={$player.volume}
    on:loadstart={() => $player.status = 'loading'}
    on:loadeddata={() => userInteraction && $audio.play()}
    on:play={() => $player.paused = false}
    on:pause={() => $player.paused = true}
    on:progress={() => $player.status = 'downloading'}
	on:waiting={() => $player.status = 'waiting'}
	on:timeupdate={() => $player.status = 'playing'}
	on:seeking={() => $player.status = 'seeking'}
	on:ended={() => $player.status = 'ended'}
	src={songs[$playIndex].src}
    controls
></audio>
<div>
    <div>STATUS: {$player.status}</div>
    <div>TITLE: {$player.title}</div>
    <div>DURATION: {$player.duration}</div>
    <div>CURRENT TIME: {$currentTime}</div>
    <div>IS PAUSED: {$player.paused}</div>
    <div>VOLUME: {$player.volume}</div>
    <div>PLAY INDEX: {$playIndex}</div>
</div>

<button class="next" on:click={next}>Next</button>

<div>
    {#await fetchingSongs then foo}
        {#each songs as song,i}
            <div on:click={() => selectSong(i)}
                on:keypress={()=>null}
                class="song"
                role="button"
                tabindex=0
            >{song.title}</div>
        {/each}
    {/await}
</div>

<style>
    .song {
        cursor: pointer;
    }
    .song:focus {
        outline: 1px solid #000;
    }
    .song:focus-visible {
        outline: 1px solid #000;
    }
    .next {
        margin-top: 1rem;
    }
</style>