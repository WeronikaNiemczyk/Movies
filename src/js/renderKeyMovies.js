import { genresId } from './genres';
import { paginator } from './fetchKeyWords';
let page = 1;

export const renderKeyMovies = movies => {
  const prevPage = document.querySelector('#prevQuery');
  const nextPage = document.querySelector('#nextQuery');
  const paginatorPopular = document.querySelector('.paginatorPopular');
  const paginatorQuery = document.querySelector('.paginatorQuery');
  prevPage.style.display = 'none';
  nextPage.style.display = 'none';
  paginatorQuery.style.display = 'flex';
  paginatorPopular.style.display = 'none';
  paginator(movies.totalPages, page);

  return movies.results
    .map(({ id, poster_path, original_title, genre_ids, release_date }) => {
      let filmGenreId = '';
      if (genre_ids && genre_ids.length > 0) {
        filmGenreId = genresId
          .filter(({ id }) => genre_ids.includes(id))
          .map(({ name }) => name)
          .join(', ');
      } else {
        filmGenreId = 'Genre is not available';
      }
      return `
        <li class="movie-card">
          <div class="card">
            <a href="${poster_path}" data-movie-id="${id}">
              <img src="${
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : 'https://media.wired.com/photos/59326d5344db296121d6aee9/master/w_2240,c_limit/8552.gif'
              }" alt="${original_title}" />
            </a>
            <div class="info">
              <p class="info-item">
                <b>${original_title}</b>
              </p>
              <div class="details">
                <p class="info-item">
                  <b>${filmGenreId} | ${release_date.slice(0, 4)}</b>
                </p>
              </div>
            </div>
          </div>
        </li>`;
    })
    .join('');
};
