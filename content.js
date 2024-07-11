document.addEventListener('visibilitychange', () => {
  const video = document.querySelector('video');
  if (document.visibilityState === 'hidden') {
      if (video) {
          video.pause();
      }
  } else if (document.visibilityState === 'visible') {
      if (video) {
          video.play();
      }
  }
});
