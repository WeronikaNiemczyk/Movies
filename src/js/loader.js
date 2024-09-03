function loaderOn() {
  document.getElementById('loader').style.display = 'flex';
}

function loaderOff() {
  document.getElementById('loader').style.display = 'none';
}

document.getElementById('searchForm').addEventListener('submit', function (event) {
  event.preventDefault;
  loaderOn();

  setTimeout(function () {
    loaderOff();
  }, 1000);
});

loaderOn();
setTimeout(function () {
  loaderOff();
}, 1000);
