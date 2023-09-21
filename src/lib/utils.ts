export function formatTimer(sec: number) {
    const min = Math.floor(sec / 60);
    const seconds = Math.floor(sec - min * 60);
    return `${String(min).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

export function debounce(func, timeout = 300){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }
