
const swiper = new Swiper('.slider-wrapper', {  // ✅ Corrected selector
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // ✅ Allows dots to be clickable
    dynamicBullets:true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  grabCursor: true, // ✅ Allows mouse drag/swipe
  spaceBetween: 30,
  keyboard: {
    enabled: true, // ✅ Enables arrow key navigation
    onlyInViewport: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,  // ✅ Fixed key name from "slidePerView" to "slidesPerView"
    },
    620: {
      slidesPerView: 2,  // ✅ Fixed key name
    },
    1024: {
      slidesPerView: 3,  // ✅ Fixed key name
    }
  }
});
