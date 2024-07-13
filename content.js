const video = document.querySelector("video");
let scriptPaused = false;

function handleVisibilityChange() {
  if (document.visibilityState === "hidden") {
    if (video && !video.paused) {
      video.pause();
      scriptPaused = true;
    }
  } else if (document.visibilityState === "visible") {
    if (document.hasFocus() && video && scriptPaused) {
      video.play();
      scriptPaused = false;
    }
  }
}

function handleWindowBlur() {
  if (video && !video.paused) {
    video.pause();
    scriptPaused = true;
  }
}

function handleWindowFocus() {
  if (document.visibilityState === "visible" && video && scriptPaused) {
    video.play();
    scriptPaused = false;
  }
}

video.addEventListener("pause", () => {
  if (!scriptPaused) {
    scriptPaused = false;
  }
});

document.addEventListener("visibilitychange", handleVisibilityChange);
window.addEventListener("blur", handleWindowBlur);
window.addEventListener("focus", handleWindowFocus);
