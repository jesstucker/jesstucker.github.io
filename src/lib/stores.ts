import { writable, get } from "svelte/store";

export const volume = writable(0.5);
export const playing = writable(false);

export const togglePlay = () => {
    get(playing)
        ? get(track).audioFile.pause()
        : get(track).audioFile.play();
    playing.update(p => !p);
}

export const track = writable({
    audioFile: "",
    title: "loading...",
    artist: "",
    album: "",
    albumArt: "",
    duration: "00:00",
    elapsed: "00:00",
    progress: 0,
    // playing: false,
    shuffle: false,
    repeat: false,
    volume: 0.5,
});