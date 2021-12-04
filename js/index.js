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

var deliveryMenu = document.querySelector('.delivery__menu');
var deliveryTabContent = document.querySelectorAll('.delivery__tab-content');
var deliveryDescriptionItems = document.querySelectorAll('.delivery__description-content');

if (deliveryMenu) {
  deliveryMenu.addEventListener('click', function (e) {
    var target = e.target;

    if (target.dataset.tab === 'delivery') {
      document.querySelectorAll('.delivery__tab').forEach(function (item) {
        if (item.classList.contains('active')) {
          item.classList.remove('active');
        }

        if (item.dataset.tab === 'delivery') {
          item.classList.add('active');
        }
      });
      deliveryTabContent.forEach(function (item) {
        if (item.dataset.content !== 'delivery' && item.classList.contains('active')) {
          item.classList.remove('active');
        } else {
          item.classList.add('active');
        }
      });
      deliveryDescriptionItems.forEach(function (item) {
        if (item.dataset.content !== 'delivery' && item.classList.contains('active')) {
          item.classList.remove('active');
        } else {
          item.classList.add('active');
        }
      });
    } else if (target.dataset.tab === 'refund') {
      document.querySelectorAll('.delivery__tab').forEach(function (item) {
        if (item.classList.contains('active')) {
          item.classList.remove('active');
        }

        if (item.dataset.tab === 'refund') {
          item.classList.add('active');
        }
      });
      deliveryTabContent.forEach(function (item) {
        if (item.dataset.content !== 'refund' && item.classList.contains('active')) {
          item.classList.remove('active');
        } else {
          item.classList.add('active');
        }
      });
      deliveryDescriptionItems.forEach(function (item) {
        if (item.dataset.content !== 'refund' && item.classList.contains('active')) {
          item.classList.remove('active');
        } else {
          item.classList.add('active');
        }
      });
    }
  });
}