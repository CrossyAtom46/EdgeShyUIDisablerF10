document.addEventListener('keydown', (event) => {
  if (event.key === 'F10') {
    event.preventDefault();
    triggerFullscreen();
  }
});

function triggerFullscreen() {
  const doc = document.documentElement;
  if (doc.requestFullscreen) {
    doc.requestFullscreen();
  } else if (doc.webkitRequestFullscreen) {
    doc.webkitRequestFullscreen();
  } else if (doc.mozRequestFullScreen) {
    doc.mozRequestFullScreen();
  } else if (doc.msRequestFullscreen) {
    doc.msRequestFullscreen();
  }
}
