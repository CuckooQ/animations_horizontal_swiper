import Swiper from 'swiper';

function setSwiper() {
  new Swiper(".horizontal-swiper .swiper-container", {
    direction: "horizontal",
    autoplay: true,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    pagination: {
      el: ".horizontal-swiper .swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".horizontal-swiper .swiper-next",
      prevEl: ".horizontal-swiper .swiper-prev"
    }
  });
}

function init() {
  setSwiper();
}

init();