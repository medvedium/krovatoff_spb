// import Swiper from 'swiper'
// import 'swiper/css/bundle'

const popularSwiper = new Swiper('.popular__slider', {
	slidesPerView: 4,
	navigation: {
		nextEl: '.popular_slider-next',
		prevEl: '.popular_slider-prev'
	},
	pagination: {
		el: '.popular__slider .swiper-pagination',
		type: 'bullets'
	},
	spaceBetween: 30
	// slidesPerColumn: 4
})

// const popularPrev = document.querySelector('')

const premiumSwiper = new Swiper('.premium__slider', {
	slidesPerView: 4,
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
