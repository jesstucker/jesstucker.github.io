<script>
	import { onMount } from "svelte";
    import { 
        playIndex,
        audio,
        player,
        currentTime,
        songDuration,
        next,
        prev,
        play,
        pause,
        togglePlay,
        songs,
		userInteraction,
    } from '$lib/stores'
                
    let fetchingSongs = Promise.resolve([{
        title: '',
        src: ''
    }])

    onMount(() => {
        fetchingSongs = 
            fetch('https://jt-music.s3.amazonaws.com/')
            .then(res => res.text())
            .then(xml => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(xml, "application/xml");
                $songs = [...doc.querySelectorAll('Contents')]
                    .map(el => {
                        const songName = el.querySelector('Key')?.textContent
                        return {
                            title: songName,
                            src: `https://jt-music.s3.amazonaws.com/${songName}`
                        }
                    })
                    .toSorted((a, b) => 
                        b.title.localeCompare(a.title, undefined, {
                                numeric: true,
                                sensitivity: 'base',
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

            navigator.mediaSession.setActionHandler("play", () => togglePlay())
            navigator.mediaSession.setActionHandler("pause", () => togglePlay())
            navigator.mediaSession.setActionHandler("stop", () => pause())
            navigator.mediaSession.setActionHandler("seekbackward", null);
            navigator.mediaSession.setActionHandler("seekforward", null)
            navigator.mediaSession.setActionHandler("seekto", () => null)
            navigator.mediaSession.setActionHandler("previoustrack", () => {
                prev();
                navigator.mediaSession.metadata.title = $songs[$playIndex].title;
            });
            navigator.mediaSession.setActionHandler("nexttrack", () => {
                next();
                navigator.mediaSession.metadata.title = $songs[$playIndex].title;
            });
        }
    })
</script>

{#await fetchingSongs}
    <div>Loading...</div>
{:then whatever }
    <audio
        bind:this={$audio}
        bind:duration={$songDuration}
        bind:currentTime={$currentTime}
        bind:paused={$player.paused}
        bind:volume={$player.volume}
        on:loadstart={() => $userInteraction && play()}
        on:loadeddata={() => { $userInteraction && play() }}
        on:play={() => $player.paused = false}
        on:pause={() => $player.paused = true}
        on:progress={() => { $userInteraction && play() }}
        on:waiting={() => $player.status = 'waiting'}
        on:timeupdate={() => $player.status = 'playing'}
        on:seeking={() => $player.status = 'seeking'}
        on:ended={next}
        src={$songs[$playIndex].src}
        preload="auto"
        autoplay={true}
    ></audio>
{/await}