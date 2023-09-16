import { writable, get } from "svelte/store";

export const volume = writable(0.5);
export const playing = writable(false);

export const togglePlay = () => {
    get(playing)
        ? get(track).audioFile.pause()
        : get(track).audioFile.play();
    playing.update(p => !p);
}

interface Track {
    audioFile: HTMLAudioElement,
    title: string,
    duration: string,
    elapsed: string,
    progress: number,
}

export const track = writable<Track>({
    audioFile: '',
    title: "loading...",
    duration: "00:00",
    elapsed: "00:00",
    progress: 0,
});