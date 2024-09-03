export const generateMoviesMarkup = movies => {
  return movies
    .map(movie => {
      const genres = movie.genres.map(genre => genre.name).join(', ');
      return `<li class="movie-card">
            <div class="card">
              <a href="${movie.poster_path}" data-movie-id="${movie.id}">
                <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${
        movie.title
      }"/>
              </a>
              <div class="info">
                <p class="info-item">
                  <b>${movie.title}</b>
                </p>
                <div class="details">
                  <p class="info-item">
                    <b>${genres} | ${movie.release_date.slice(0, 4)}</b>
                    <span class="modal-rates__vote">${movie.vote_average.toFixed(1)}</span>
                  </p>
                  
                </div>
              </div>
            </div>
          </li>`;
    })
    .join('');
};

// modalMarkup.js

export const generateModalMarkup = (movieDetails, movieId) => {
  return `
    <div>
      <img class="modal-image" src="https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}" alt="${movieDetails.title}" />
    </div>
    <div class="modal-description">
      <h1>${movieDetails.title}</h1>
      <div class="modal-rates">
        <div class="modal-rates__titles">
          <p>Vote/Votes</p>
          <p>Popularity</p>
          <p>Original Title</p>
          <p>Genre</p>
        </div>
        <div class="modal-rates__results">
          <p><span class="modal-rates__vote">${movieDetails.vote_average.toFixed(1)}</span> / <span class="modal-rates__allvotes">${movieDetails.vote_count}</span></p>
          <p>${movieDetails.popularity}</p>
          <p>${movieDetails.original_title}</p>
          <p>${movieDetails.genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </div>
      <div class="modal-about">
        <dt>ABOUT</dt>
        <dd>${movieDetails.overview}</dd>
      </div>
      <div class="modal-button-window">
        <button class="button-standard modal-button add" data-movie-id="${movieId}" type="button" id="watched-btn">ADD TO WATCHED</button>
        <button class="button-standard modal-button modal-button__queue remove" data-movie-id="${movieId}" type="button" id="queue-button">REMOVE FROM QUEUE</button>
      </div>
    </div>`;
};
