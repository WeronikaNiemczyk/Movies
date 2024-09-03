import { fetchPopularMovies } from './fetchMovies';
import { openModal } from './movieDetails-modal';
import { renderPopularMovies } from './renderPopularMovies';

const videoSection = document.querySelector('.movie__list');
const prevPage = document.querySelector('#prevPopular');
const nextPage = document.querySelector('#nextPopular');

const modalWindow = document.querySelector('.modal-window');
const modalOverlay = document.querySelector('.modal-overlay');

const ulTag = document.querySelector('.paginator-ul');
console.log(ulTag);

let pageNumber = 1;

const closeModal = () => {
  modalWindow.classList.add('hidden');
  modalOverlay.classList.remove('active');
};

fetchPopularMovies(pageNumber)
  .then(movies => renderPopularMovies(movies))
  .catch(err => console.error(err));

videoSection.addEventListener('click', async e => {
  e.preventDefault();
  const target = e.target.closest('a');
  if (target) {
    const movieId = target.dataset.movieId;
    openModal(movieId);
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

nextPage.addEventListener('click', async () => {
  try {
    pageNumber++;
    const movies = await fetchPopularMovies(pageNumber);
    videoSection.innerHTML = '';
    renderPopularMovies(movies);
  } catch (error) {
    console.error('Error fetching popular movies:', error);
  }
});

prevPage.addEventListener('click', async () => {
  try {
    if (pageNumber > 1) {
      pageNumber--;
      const movies = await fetchPopularMovies(pageNumber);
      videoSection.innerHTML = '';
      renderPopularMovies(movies);
    }
  } catch (error) {
    console.error('Error fetching popular movies:', error);
  }
});

export function paginator(totalPages, page) {
  let liTag = ``;
  let activeLi;
  let beforePages = page - 2;
  let afterPages = page + 2;

  if (page > 1) {
    prevPage.style.display = 'block';
  }

  if (page > 3 && !(window.innerWidth >= 320 && window.innerWidth <= 767)) {
    liTag += `<li class="numb" onclick="goToPage(1)"><span>1</span></li>`;
    liTag += `<li class="dots"><span>...</span></li>`;
  }

  if (beforePages < 1) {
    beforePages = 1;
  }
  if (afterPages > totalPages) {
    afterPages = totalPages;
  }

  for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
    if (page === pageLength) {
      activeLi = 'active';
    } else {
      activeLi = ``;
    }

    liTag += `<li class="numb ${activeLi}" onclick="goToPage(${pageLength})"><span>${pageLength}</span></li>`;
  }

  if (page < totalPages - 2 && !(window.innerWidth >= 320 && window.innerWidth <= 767)) {
    if (page < totalPages - 2) {
      liTag += `<li class="dots"><span>...</span></li>`;
    }
    liTag += `<li class="numb" onclick="goToPage(${totalPages})"><span>${totalPages}</span></li>`;
  }

  if (page < totalPages) {
    nextPage.style.display = 'block';
  }
  ulTag.innerHTML = liTag;
}

window.goToPage = function (number) {
  pageNumber = number;
  fetchPopularMovies(number)
    .then(movies => {
      renderPopularMovies(movies);

      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    })
    .catch(error => {
      console.error('Error fetching popular movies:', error);
    });
};
