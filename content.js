const video = document.querySelector('video');

function handleVisibilityChange() {
    if (document.visibilityState === 'hidden') {
        if (video) video.pause();
    } else if (document.visibilityState === 'visible') {
        if (document.hasFocus() && video) video.play();
    }
}

function handleWindowBlur() {
    if (video) video.pause();
}

function handleWindowFocus() {
    if (document.visibilityState === 'visible' && video) video.play();
}

document.addEventListener('visibilitychange', handleVisibilityChange);
window.addEventListener('blur', handleWindowBlur);
window.addEventListener('focus', handleWindowFocus);
