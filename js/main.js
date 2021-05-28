const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
const badgeEl = document.querySelector('header .badges');
const fadeEls = document.querySelectorAll('.visual .fade-in');

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

window.addEventListener(
  'scroll',
  _.throttle(function () {
    if (window.scrollY > 500) {
      // Badge hide
      gsap.to(badgeEl, 0.4, {
        opacity: 0,
        display: 'none',
      });
    } else {
      // Badge visible
      gsap.to(badgeEl, 0.4, {
        opacity: 1,
        display: 'block',
      });
    }
  }, 300)
);

fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 0.6, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});
