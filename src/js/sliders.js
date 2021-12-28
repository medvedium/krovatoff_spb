import Swiper from 'swiper';

if (document.querySelector('.hero-slider')) {
	let heroSlider = new Swiper('.hero-slider', {
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
	})
}

if (document.querySelector('.popular__slider')) {
	let popularSlider = new Swiper('.popular__slider', {
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
	})
}

if (document.querySelector('.premium__slider')) {
	let premiumSlider = new Swiper('.premium__slider', {
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
		spaceBetween: 30
		// slidesPerColumn: 4
	})
}