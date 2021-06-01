const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
const thisYear = document.querySelector('.this-year');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

thisYear.textContent = new Date().getFullYear();
