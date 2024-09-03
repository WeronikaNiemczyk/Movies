import { fetchMoviesByID } from './fetchMovies';
import { generateMoviesMarkup, generateModalMarkup } from './markup';

const modalWindow = document.querySelector('.modal-window');
const innerModalContent = document.querySelector('.inner-modal-content');
const modalOverlay = document.querySelector('.modal-overlay');
const moviesListW = document.querySelector('.library-watched');

const closeModal = () => {
  modalWindow.classList.add('hidden');
  modalOverlay.classList.remove('active');
};

export const showWatched = async () => {
  const moviesListQ = document.querySelector('.library-queue');
  const moviesInStorageW = localStorage.getItem('watched');
  const moviesListW = document.querySelector('.library-watched');
  moviesListQ.style.display = 'none';
  moviesListW.style.display = 'flex';
  if (moviesInStorageW && JSON.parse(moviesInStorageW).length > 0) {
    const watched = JSON.parse(moviesInStorageW);

    try {
      const movieDetails = await Promise.all(watched.map(movie => fetchMoviesByID(movie.id)));
      const moviesMarkup = generateMoviesMarkup(movieDetails);
      moviesListW.innerHTML = moviesMarkup;
    } catch (error) {
      console.error(error);
    }
  } else {
    moviesListW.innerHTML = `<img src="https://i.pinimg.com/originals/4a/06/ef/4a06efb5a2f39feaa2f81b9f3d179a94.gif"/>`;
  }
};

const showWatchedButton = document.querySelector('.header-library-button-watched');
showWatchedButton.addEventListener('click', showWatched);

const handleWatchedItemClick = async e => {
  e.preventDefault();

  const target = e.target.closest('a');
  if (target) {
    const movieId = target.dataset.movieId;

    try {
      const movieDetails = await fetchMoviesByID(movieId);
      const modalContent = generateModalMarkup(movieId, movieDetails);
      innerModalContent.innerHTML = modalContent;
      modalWindow.classList.remove('hidden');
      modalOverlay.classList.add('active');
      modalOverlay.addEventListener('click', () => {
        closeModal();
      });

      const closeModalButton = document.querySelector('#close-modal');
      closeModalButton.addEventListener('click', () => {
        closeModal();
      });
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  }
};

moviesListW.addEventListener('click', handleWatchedItemClick);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});
if (
  showWatchedButton.addEventListener('click', () => {
    moviesListW.innerHTML = `<img src="https://i.pinimg.com/originals/4a/06/ef/4a06efb5a2f39feaa2f81b9f3d179a94.gif"/>`;
  })
);
