import { type Writable, writable, get, derived } from "svelte/store";
import { formatTimer } from "$lib/utils";


export const volume = writable(0.5);
export const playing = writable(false);

// export const togglePlay = () => {
//     get(playing)
//         ? get(track).audioFile.pause()
//         : get(track).audioFile.play();
//     playing.update(p => !p);
// }

interface Track {
    audioFile: HTMLAudioElement,
    title: string,
    duration: string,
    elapsed: string,
    progress: number,
}

// interface Songs {
//     title: string,
//     url: string,
// }

export const track = writable<Track>({
    audioFile: '',
    title: "loading...",
    duration: "00:00",
    elapsed: "00:00",
    progress: 0,
});


export const playIndex = writable(0);
export const audio = writable<HTMLAudioElement>()
export const player = writable({
    title: "",
    paused: true,
    volume: 1,
    src: "",
    status: "",
});

interface Song {
    title: string,
    src: string,
}

export const songs = writable<Song[]>([]);

export const currentTime = writable(0);
export const songDuration = writable(0.000000);

export const userInteraction = writable(false);

export const progressPercent = derived([currentTime, songDuration], ([$currentTime, $songDuration]) => 
    $currentTime * (100 / $songDuration)
);

export const formattedTimer = derived([currentTime, songDuration], ([$currentTime, $songDuration]) => 
    `${formatTimer($currentTime)} / ${formatTimer($songDuration)}`
);


export const next = () => 
    get(songs).length - 1 === get(playIndex)
        ? playIndex.set(0)
        : playIndex.update(p => p + 1);


export const prev = () =>
    get(playIndex) === 0
        ? playIndex.set(get(songs).length - 1)
        : playIndex.update(p => p - 1);


export const pause = () => {
    get(audio).pause();
    player.update(p => ({
        ...p,
        paused: true,
    }));
}

export const togglePlay = () =>
    get(player).paused
        ? play()
        : pause();

export const play = () => {
    get(audio).play();
    player.update(p => ({
        ...p,
        paused: false,
    }))}



export const selectSong = (i:number) => {
    player.update(p => ({
        ...p,
        title: get(songs)[i].title
    }));
    userInteraction.set(true);
    playIndex.set(i);
    // togglePlay();
}