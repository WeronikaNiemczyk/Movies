import Notiflix from 'notiflix';
const moviesListQ = document.querySelector('.library-queue');
const modal = document.querySelector('.modal-window');

const manageQueue = event => {
  if (event.target.id === 'queue-button') {
    const movieId = event.target.getAttribute('data-movie-id');

    if (typeof Storage !== 'undefined') {
      const moviesInQueue = localStorage.getItem('queue');

      let queue = moviesInQueue ? JSON.parse(moviesInQueue) : [];

      const isMovieAlreadyAdded = queue.some(movie => movie.id === movieId);
      if (event.target.classList.contains('add')) {
        if (!isMovieAlreadyAdded) {
          queue.push({ id: movieId });
          localStorage.setItem('queue', JSON.stringify(queue));
          Notiflix.Notify.success('Video has been added to the queued list');
        } else {
          Notiflix.Notify.warning('This video is already in your queue.');
        }
      } else if (event.target.classList.contains('remove')) {
        if (isMovieAlreadyAdded) {
          queue = queue.filter(movie => movie.id !== movieId);
          localStorage.setItem('queue', JSON.stringify(queue));
          Notiflix.Notify.info('Video has been removed from the queued list');
          if (JSON.parse(moviesInQueue).length === 1) {
            moviesListQ.innerHTML = `<img src="https://i.pinimg.com/originals/4a/06/ef/4a06efb5a2f39feaa2f81b9f3d179a94.gif"/>`;
          } else {
          }
        } else {
          Notiflix.Notify.warning('This video is not in your queue.');
        }
      }
    } else {
      Notiflix.Notify.failure('Your browser does not support Local Storage.');
    }
  }
};

modal.addEventListener('click', manageQueue);
