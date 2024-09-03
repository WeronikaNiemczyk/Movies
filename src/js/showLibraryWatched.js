import { showWatched } from './watchedLibrary';
import { showQueued } from './queuedLibrary';

const showWatchedButton = document.querySelector('.header-library-button-watched');
const showQueuedButton = document.querySelector('.header-library-button-queue');
function activateTab(tabName) {
  if (tabName === 'watched') {
    showWatchedButton.classList.add('active');
    showQueuedButton.classList.remove('active');
    showWatched();
  } else if (tabName === 'queued') {
    showQueuedButton.classList.add('active');
    showWatchedButton.classList.remove('active');
    showQueued();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  activateTab('watched');
});

showWatchedButton.addEventListener('click', () => {
  activateTab('watched');
});

showQueuedButton.addEventListener('click', () => {
  activateTab('queued');
});

const moviesInStorage = localStorage.getItem('watched');

if (JSON.parse(moviesInStorage).length != 0) {
  const moviesListW = document.querySelector('.library-watched');
  moviesListW.style.display = 'flex';
  const travolta = document.querySelector('.container-trevolta');
  travolta.style.display = 'none';
  document.addEventListener('DOMContentLoaded', showWatched);
}
