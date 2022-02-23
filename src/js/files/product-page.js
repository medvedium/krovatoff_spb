import Swiper, { Navigation, Pagination } from 'swiper'
document.addEventListener('DOMContentLoaded', () => {
	const heroBlock = document.querySelector('.product-hero-main')

	if (heroBlock) {
		heroBlock.addEventListener('click', () => {
			const getActiveSlide = function (selector) {
				let activeSlide = 0
				for (let i = 0; i < selector.length; i++) {
					if (selector[i].classList.contains('swiper-slide-active')) {
						activeSlide = i
					}
				}
				return activeSlide
			}

			const heroSlides = document.querySelectorAll('.product-hero-main .swiper-slide')
			const heroModal = document.querySelector('.hero-popup')

			let activeSlide = getActiveSlide(heroSlides)

			heroModal.querySelector('.swiper-wrapper').innerHTML = heroBlock.querySelector('.swiper-wrapper').innerHTML

			new Swiper('.hero-popup__slider', {
				modules: [Pagination, Navigation],
				initialSlide: activeSlide,
				observer: true,
				observeParents: true,
				slidesPerView: 1,
				// spaceBetween: 30,
				speed: 500,
				pagination: {
					el: '.hero-popup .swiper-pagination',
					type: 'fraction'
				},
				loop: true,
				navigation: {
					prevEl: '.hero-popup-prev',
					nextEl: '.hero-popup-next'
				},
				on: {}
			})
		})
	}
})
