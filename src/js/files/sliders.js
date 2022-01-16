/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	if (document.querySelector('.hero-slider')) {
		new Swiper('.hero-slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Pagination],
			effect: 'fade',
			autoplay: {
				delay: 8000,
				disableOnInteraction: false,
			},
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 30,
			autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			pagination: {
				el: '.hero-slider .swiper-pagination',
				type: 'bullets'
			},
			// Arrows
			// navigation: {
			// 	nextEl: '.about__more .more__item_next',
			// 	prevEl: '.about__more .more__item_prev',
			// },
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			on: {

			}
		});
	}

	if (document.querySelector('.popular__slider')) {
		let popularSlider = new Swiper('.popular__slider', {
			modules: [Pagination, Navigation],
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
			modules: [Pagination, Navigation],
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
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});