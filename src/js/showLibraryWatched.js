import { showWatched } from './watchedLibrary';
import { showQueued } from './queuedLibrary';
import { fetchMoviesByID } from './fetchMovies';

const showWatchedButton = document.querySelector('.header-library-button-watched');
const showQueuedButton = document.querySelector('.header-library-button-queue');
function activateTab(tabName) {
  const moviesListW = document.querySelector('.library-watched');
  const moviesListQ = document.querySelector('.library-queue');
  
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

// Funkcja inicjalizująca
document.addEventListener('DOMContentLoaded', () => {
  // Zaznaczenie domyślnej zakładki "Watched"
  activateTab('watched');
});

// Obsługa kliknięć na przyciski zakładek
showWatchedButton.addEventListener('click', () => {
  activateTab('watched');
});

showQueuedButton.addEventListener('click', () => {
  activateTab('queued');
});
f
const moviesInStorage = localStorage.getItem('watched');

if (JSON.parse(moviesInStorage).length != 0) {
  const moviesListW = document.querySelector('.library-watched');
  moviesListW.style.display = 'flex';
  const travolta = document.querySelector('.container-trevolta');
  travolta.style.display = 'none';
  document.addEventListener('DOMContentLoaded', showWatched);
}
console.log(JSON.parse(moviesInStorage).length);
