// Listens for keyboard events on all pages
chrome.runtime.onInstalled.addListener(() => {
  console.log('Fullscreen on F10 extension installed');
});

chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.scripting.executeScript({
    target: { tabId: activeInfo.tabId },
    func: listenForF10
  });
});

function listenForF10() {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'F11') {
      event.preventDefault();  // Prevent any default behavior of F10
      triggerFullscreen();
    }
  });
}

// Function to trigger fullscreen
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
