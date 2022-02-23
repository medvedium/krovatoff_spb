/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Autoplay, Navigation, Pagination, Thumbs } from 'swiper'
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
// import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
import '../../scss/libs/swiper.scss'
// Полный набор стилей из node_modules
import 'swiper/css'

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.hero-slider')) {
		// Указываем скласс нужного слайдера
		new Swiper('.hero-slider', {
			modules: [Pagination],
			effect: 'fade',
			autoplay: {
				delay: 8000,
				disableOnInteraction: false
			},
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 30,
			speed: 800,
			pagination: {
				el: '.hero-slider .swiper-pagination',
				type: 'bullets'
			},
			loop: true,
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next'
			},
			on: {}
		})
	}

	if (document.querySelector('.popular__slider')) {
		let popularSlider = new Swiper('.popular__slider', {
			modules: [Pagination, Navigation],
			slidesPerView: 1,
			slidesPerGroup: 1,

			pagination: {
				el: '.popular__slider .swiper-pagination',
				type: 'bullets'
			},
			spaceBetween: 30,
			breakpoints: {
				560: {
					slidesPerView: 2,
					spaceBetween: 20
				},
				768: {
					slidesPerView: 3
				},
				1104: {
					slidesPerView: 4,
					slidesPerGroup: 4,
					spaceBetween: 30,
					navigation: {
						nextEl: '.popular_slider-next',
						prevEl: '.popular_slider-prev'
					}
				}
			}
		})
	}
	if (document.querySelector('.premium__slider')) {
		let premiumSlider = new Swiper('.premium__slider', {
			modules: [Pagination, Navigation],
			slidesPerView: 1,
			slidesPerGroup: 1,

			pagination: {
				el: '.premium__slider .swiper-pagination',
				type: 'bullets'
			},
			spaceBetween: 30,
			breakpoints: {
				560: {
					slidesPerView: 2,
					spaceBetween: 20
				},
				768: {
					slidesPerView: 3
				},
				1104: {
					slidesPerView: 4,
					slidesPerGroup: 4,
					spaceBetween: 30,
					navigation: {
						nextEl: '.premium_slider-next',
						prevEl: '.premium_slider-prev'
					}
				}
			}
		})
	}

	if (document.querySelector('.delivery__slider')) {
		new Swiper('.delivery__slider', {
			modules: [Pagination],
			slidesPerView: 1,
			spaceBetween: 20,
			pagination: {
				el: '.delivery__slider .swiper-pagination',
				type: 'bullets'
			},
			breakpoints: {
				700: {
					slidesPerView: 2
				},
				1150: {
					slidesPerView: 3
				},
				1500: {
					slidesPerView: 4
				}
			}
		})
	}

	const heroTrackSelector = document.querySelector('.product-hero-track__slider')
	const heroMainSelector = document.querySelector('.product-hero-main__slider')

	if (heroTrackSelector && heroMainSelector) {
		let heroTrackSlider = new Swiper(heroTrackSelector, {
			modules: [Autoplay],
			slidesPerView: 4,
			direction: 'horizontal',
			spaceBetween: 10,
			loop: true,
			autoplay: {
				delay: 5000
			},
			breakpoints: {
				651: {
					slidesPerView: 6
				},
				851: {
					slidesPerView: 4,
					spaceBetween: 20
				},
				1201: {
					direction: 'vertical',
					slidesPerView: 4
				}
			}
		})

		let heroMainSlider = new Swiper(heroMainSelector, {
			modules: [Thumbs],
			effect: 'cards',
			slidesPerView: 1,
			thumbs: {
				swiper: heroTrackSlider
			}
		})
	}

	if (document.querySelector('.accessories__slider')) {
		let premiumSlider = new Swiper('.accessories__slider', {
			modules: [Pagination, Navigation],
			slidesPerView: 1,
			slidesPerGroup: 1,

			pagination: {
				el: '.accessories .swiper-pagination',
				type: 'bullets'
			},
			spaceBetween: 30,
			breakpoints: {
				560: {
					slidesPerView: 2,
					spaceBetween: 20
				},
				768: {
					slidesPerView: 3
				},
				1104: {
					slidesPerView: 4,
					slidesPerGroup: 4,
					spaceBetween: 30,
					navigation: {
						nextEl: '.accessories__slider-next',
						prevEl: '.accessories__slider-prev'
					}
				}
			}
		})
	}

	if (document.querySelector('.product-parts__slider')) {
		let premiumSlider = new Swiper('.product-parts__slider', {
			modules: [Pagination, Navigation],
			slidesPerView: 1,
			slidesPerGroup: 1,

			pagination: {
				el: '.product-parts .swiper-pagination',
				type: 'bullets'
			},
			spaceBetween: 30,
			breakpoints: {
				560: {
					slidesPerView: 2,
					spaceBetween: 20
				},
				768: {
					slidesPerView: 3
				},
				1104: {
					slidesPerView: 4,
					slidesPerGroup: 4,
					spaceBetween: 30,
					navigation: {
						nextEl: '.product-parts__slider-next',
						prevEl: '.product-parts__slider-prev'
					}
				}
			}
		})
	}
}

// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders()

	let sliderScrollItems = document.querySelectorAll('.swiper_scroll')
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index]
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar')
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true
				}
			})
			sliderScroll.scrollbar.updateSize()
		}
	}
}

window.addEventListener('load', function (e) {
	// Запуск инициализации слайдеров
	initSliders()
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
})
