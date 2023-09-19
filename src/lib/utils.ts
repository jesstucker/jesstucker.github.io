export function formatTimer(sec: number) {
    const min = Math.floor(sec / 60);
    const seconds = Math.floor(sec - min * 60);
    return `${String(min).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}