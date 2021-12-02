"use strict";

// import Swiper from 'swiper'
// import 'swiper/css/bundle'
var heroSlider = new Swiper('.hero-slider', {
  slidesPerView: 1,
  sliderPerGroup: 1,
  spaceBetween: 30,
  pagination: {
    el: '.hero-slider .swiper-pagination',
    type: 'bullets'
  },
  loop: true,
  autoplay: {
    delay: 8000
  }
});
var popularSwiper = new Swiper('.popular__slider', {
  slidesPerView: 4,
  slidesPerGroup: 4,
  navigation: {
    nextEl: '.popular_slider-next',
    prevEl: '.popular_slider-prev'
  },
  pagination: {
    el: '.popular__slider .swiper-pagination',
    type: 'bullets'
  },
  spaceBetween: 30
});
var premiumSwiper = new Swiper('.premium__slider', {
  slidesPerView: 4,
  slidesPerGroup: 4,
  navigation: {
    nextEl: '.premium_slider-next',
    prevEl: '.premium_slider-prev'
  },
  pagination: {
    el: '.premium__slider .swiper-pagination',
    type: 'bullets'
  },
  spaceBetween: 30 // slidesPerColumn: 4

});
var catalogToggle = document.querySelector('.dropdown-catalog-activate');
var dropdownCatalog = document.querySelector('.dropdown-catalog');

if (catalogToggle) {
  catalogToggle.addEventListener('click', function () {
    dropdownCatalog.classList.add('active');
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '14px';
    dropdownCatalog.querySelector('.dropdown-catalog__close').addEventListener('click', function () {
      dropdownCatalog.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  });
}