import Swiper from 'swiper'
// import 'swiper/css/bundle'

const popularSwiper = new Swiper('.popular__slider', {
	slidesPerView: 3,
	navigation: {
		nextEl: '.popular .swiper-button-next',
		prevEl: '.popular .swiper-button-prev'
	}
})
const premiumSwiper = new Swiper('.premium__slider', {
	slidesPerView: 3,
	navigation: {
		nextEl: '.premium .swiper-button-next',
		prevEl: '.premium .swiper-button-prev'
	}
})
