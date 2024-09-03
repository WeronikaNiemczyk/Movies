const addToWatched = event => {
  const movieId = event.target.getAttribute('data-movie-id');

  if (typeof Storage !== 'undefined') {
    const moviesInStorage = localStorage.getItem('movies');
    let movies = [];

    if (moviesInStorage) {
      movies = JSON.parse(moviesInStorage);
    }

    movies.push({ id: movieId });

    localStorage.setItem('movies', JSON.stringify(movies));

    alert('Film został dodany do listy oglądanych!');
  } else {
    alert('Twoja przeglądarka nie obsługuje local storage.');
  }
};

document.addEventListener('click', () => {
  const watchedButton = document.querySelector('#watched-btn');
  watchedButton.addEventListener('click', addToWatched);
});
