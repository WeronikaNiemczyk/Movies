import { fetchMoviesByID } from './fetchMovies';
import { paginator } from './moviesContainer';

let pageNumber = 1;
export const renderPopularMovies = async movies => {
  const videoSection = document.querySelector('.movie__list');
  const prevPage = document.querySelector('#prevQuery');
  const nextPage = document.querySelector('#nextQuery');
  const paginatorPopular = document.querySelector('.paginatorPopular');
  const paginatorQuery = document.querySelector('.paginatorQuery');

  prevPage.style.display = 'none';
  nextPage.style.display = 'none';
  paginator(100, pageNumber);
  paginatorQuery.style.display = 'none';
  paginatorPopular.style.display = 'flex';
  const moviePromises = movies.results.map(async movie => {
    const movieDetails = await fetchMoviesByID(movie.id);
    const genres = movieDetails.genres.map(genre => genre.name).join(', ');

    return `
      <li class="movie-card">
        <div class="card">
          <a href="${movie.poster_path}" data-movie-id="${movie.id}">
            <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}" />
          </a>
          <div class="info">
            <p class="info-item">
              <b>${movie.title}</b>
            </p>
            <div class="details">
              <p class="info-item">
                <b>${genres} | ${movie.release_date.slice(0, 4)}</b>
              </p>
            </div>
          </div>
        </div>
      </li>`;
  });

  const movieHTMLs = await Promise.all(moviePromises);
  const moviesHTMLString = movieHTMLs.join('');
  videoSection.innerHTML = moviesHTMLString;
};
