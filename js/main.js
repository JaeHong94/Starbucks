const badgeEl = document.querySelector('header .badges');
const fadeEls = document.querySelectorAll('.visual .fade-in');
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
const spyEls = document.querySelectorAll('section.scroll-spy');
const toTopEl = document.querySelector('#to-top');

let isHidePromotion = false;

window.addEventListener(
  'scroll',
  _.throttle(function () {
    if (window.scrollY > 500) {
      // Badge hide
      gsap.to(badgeEl, 0.4, {
        opacity: 0,
        display: 'none',
      });
      // to-top visible
      gsap.to(toTopEl, 0.4, {
        x: 0,
        opacity: 1,
      });
    } else {
      // Badge visible
      gsap.to(badgeEl, 0.4, {
        opacity: 1,
        display: 'block',
      });
      // to-top hide
      gsap.to(toTopEl, 0.4, {
        x: 100,
        opacity: 0,
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

new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true,
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next',
  },
});

new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next',
  },
});

promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    // Hide
    promotionEl.classList.add('hide');
  } else {
    // Visible
    promotionEl.classList.remove('hide');
  }
});

function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay),
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);

spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl,
    triggerHook: 0.8,
  })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

toTopEl.addEventListener('click', function () {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});
