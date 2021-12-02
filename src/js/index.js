// import Swiper from 'swiper'
// import 'swiper/css/bundle'

const heroSlider = new Swiper('.hero-slider', {
	slidesPerView: 1,
	sliderPerGroup: 1,
	spaceBetween: 30,
	pagination: {
		el: '.hero__slider .swiper-pagination'
	},
	loop: true,
	autoplay: {
		delay: 4000
	}
})

const popularSwiper = new Swiper('.popular__slider', {
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

const premiumSwiper = new Swiper('.premium__slider', {
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

const catalogToggle = document.querySelector('.dropdown-catalog-activate')
const dropdownCatalog = document.querySelector('.dropdown-catalog')

if (catalogToggle) {
	catalogToggle.addEventListener('click', () => {
		dropdownCatalog.classList.add('active')
		document.body.style.overflow = 'hidden'
		document.body.style.paddingRight = '14px'

		dropdownCatalog.querySelector('.dropdown-catalog__close').addEventListener('click', () => {
			dropdownCatalog.classList.remove('active')
			document.body.style.overflow = 'auto'
		})
	})
}
