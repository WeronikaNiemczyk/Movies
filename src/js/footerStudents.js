document.getElementById('openModal').addEventListener('click', function () {
  document.getElementById('studentModal').style.display = 'block';
  showStudent(currentIndex);
});

let currentIndex = 0;

function showStudent(index) {
  const cards = document.querySelectorAll('.student-card');
  cards.forEach(card => (card.style.display = 'none'));
  cards[index].style.display = 'flex';
}

function assignNavigationHandlers() {
  document.addEventListener('click', function (event) {
    if (event.target.matches('.modal-prev')) {
      currentIndex =
        currentIndex - 1 < 0
          ? document.querySelectorAll('.student-card').length - 1
          : currentIndex - 1;
      showStudent(currentIndex);
    } else if (event.target.matches('.modal-next')) {
      currentIndex = (currentIndex + 1) % document.querySelectorAll('.student-card').length;
      showStudent(currentIndex);
    } else if (
      event.target.matches('.btn-close') ||
      event.target === document.getElementById('studentModal')
    ) {
      document.getElementById('studentModal').style.display = 'none';
    }
  });
}

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    document.getElementById('studentModal').style.display = 'none';
  }
});

function initModal() {
  showStudent(currentIndex);
  assignNavigationHandlers();
}

initModal();
