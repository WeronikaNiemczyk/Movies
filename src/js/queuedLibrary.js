import { fetchMoviesByID } from './fetchMovies';
import { generateMoviesMarkup, generateModalMarkup } from './markup';

const moviesListQ = document.querySelector('.library-queue');

const modalWindow = document.querySelector('.modal-window');
const innerModalContent = document.querySelector('.inner-modal-content');
const modalOverlay = document.querySelector('.modal-overlay');

const closeModal = () => {
  modalWindow.classList.add('hidden');
  modalOverlay.classList.remove('active');
};
export const showQueued = async () => {
  const moviesListW = document.querySelector('.library-watched');
  const moviesListQ = document.querySelector('.library-queue');

  const moviesInStorageQ = localStorage.getItem('queue');

  moviesListW.style.display = 'none';
  moviesListQ.style.display = 'flex';

  if (moviesInStorageQ) {
    const queue = JSON.parse(moviesInStorageQ);

    try {
      const movieDetails = await Promise.all(queue.map(movie => fetchMoviesByID(movie.id)));
      const moviesMarkup = generateMoviesMarkup(movieDetails);
      moviesListQ.innerHTML = moviesMarkup;
    } catch (error) {
      console.error(error);
    }
  } else {
    moviesListQ.innerHTML = `<img src="https://i.pinimg.com/originals/4a/06/ef/4a06efb5a2f39feaa2f81b9f3d179a94.gif"/>`;
  }
};

const handleQueuedItemClick = async e => {
  e.preventDefault();
  const target = e.target.closest('a');
  if (target) {
    const movieId = target.dataset.movieId;

    try {
      const movieDetails = await fetchMoviesByID(movieId);
      const modalContent = generateModalMarkup(movieDetails, movieId);

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

moviesListQ.addEventListener('click', handleQueuedItemClick);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

const showQueuedButton = document.querySelector('.header-library-button-queue');
showQueuedButton.addEventListener('click', showQueued);

if (
  showQueuedButton.addEventListener('click', () => {
    moviesListQ.innerHTML = `<img src="https://i.pinimg.com/originals/4a/06/ef/4a06efb5a2f39feaa2f81b9f3d179a94.gif"/>`;
  })
);
