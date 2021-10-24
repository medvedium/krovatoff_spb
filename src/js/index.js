// import Swiper from 'swiper'
// import 'swiper/css/bundle'

const popularSwiper = new Swiper('.popular__slider', {
	slidesPerView: 4,
	navigation: {
		nextEl: '.popular__slider .swiper-button-next',
		prevEl: '.popular__slider .swiper-button-prev'
	},
	pagination: {
		el: '.popular__slider .swiper-pagination',
		type: 'bullets'
	},
	spaceBetween: 20
})
const premiumSwiper = new Swiper('.premium__slider', {
	slidesPerView: 4,
	navigation: {
		nextEl: '.premium__slider .swiper-button-next',
		prevEl: '.premium__slider .swiper-button-prev'
	},
	pagination: {
		el: '.premium__slider .swiper-pagination',
		type: 'bullets'
	},
	spaceBetween: 20
})
