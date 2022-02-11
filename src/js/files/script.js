// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from './functions.js'
// Подключение списка активных модулей
import { flsModules } from './modules.js'

import noUiSlider from 'nouislider'
import * as flsFunctions from './functions.js'
// flsFunctions.menuInit();

if (document.querySelector('#slider')) {
	noUiSlider.create(document.querySelector('#slider'), {
		start: [5000, 350000],
		connect: true,
		range: {
			min: 0,
			max: 400000
		},
		step: 5
	})
}

if (document.querySelector('#slider-2')) {
	noUiSlider.create(document.querySelector('#slider-2'), {
		start: [100, 220],
		connect: true,
		range: {
			min: 90,
			max: 250
		},
		step: 5
	})
}

if (document.querySelector('#slider-3')) {
	noUiSlider.create(document.querySelector('#slider-3'), {
		start: [50, 100],
		connect: true,
		range: {
			min: 50,
			max: 110
		},
		step: 5
	})
}

const catalogForm = document.querySelector('#catalog-form')
if (catalogForm) {
	catalogForm.addEventListener('click', (event) => {
		const { target } = event
		if (target.classList.contains('jsCloseCategory')) {
			target.parentNode.classList.toggle('is-open')
		}
	})
}

const catalogToggle = document.querySelector('.dropdown-catalog-activate')
const dropdownCatalog = document.querySelector('.dropdown-catalog')

if (catalogToggle) {
	catalogToggle.addEventListener('click', () => {
		dropdownCatalog.classList.toggle('active')
		document.body.style.overflow = 'hidden'
		document.body.style.paddingRight = '14px'

		if (window.innerWidth > 1150) {
			flsFunctions.menuClose()
		}

		dropdownCatalog.querySelector('.dropdown-catalog__close').addEventListener('click', () => {
			dropdownCatalog.classList.remove('active')
			document.body.style.overflow = 'auto'
		})
	})
}

const deliveryMenu = document.querySelector('.delivery__menu')
const deliveryTabContent = document.querySelectorAll('.delivery__tab-content')
const deliveryDescriptionItems = document.querySelectorAll('.delivery__description-content')

if (deliveryMenu) {
	deliveryMenu.addEventListener('click', (e) => {
		const { target } = e

		if (!target.classList.contains('active')) {
			if (target.dataset.tab === 'delivery') {
				document.querySelectorAll('.delivery__tab').forEach((item) => {
					if (item.classList.contains('active')) {
						item.classList.remove('active')
					}
					if (item.dataset.tab === 'delivery') {
						item.classList.add('active')
					}
				})

				deliveryTabContent.forEach((item) => {
					if (item.dataset.content !== 'delivery' && item.classList.contains('active')) {
						item.classList.remove('active')
					} else {
						item.classList.add('active')
					}
				})
				deliveryDescriptionItems.forEach((item) => {
					if (item.dataset.content !== 'delivery' && item.classList.contains('active')) {
						item.classList.remove('active')
					} else {
						item.classList.add('active')
					}
				})
				if (document.querySelector('.delivery__cards').classList.contains('active')) {
					document.querySelector('.delivery__cards').classList.remove('active')
				}
				document.querySelector('.callback').style.display = 'block'
				document.querySelector('.callback--refund').style.display = 'none'
			} else if (target.dataset.tab === 'refund') {
				document.querySelectorAll('.delivery__tab').forEach((item) => {
					if (item.classList.contains('active')) {
						item.classList.remove('active')
					}
					if (item.dataset.tab === 'refund') {
						item.classList.add('active')
					}
				})
				deliveryTabContent.forEach((item) => {
					if (item.dataset.content !== 'refund' && item.classList.contains('active')) {
						item.classList.remove('active')
					} else {
						item.classList.add('active')
					}
				})
				deliveryDescriptionItems.forEach((item) => {
					if (item.dataset.content !== 'refund' && item.classList.contains('active')) {
						item.classList.remove('active')
					} else {
						item.classList.add('active')
					}
				})
				if (!document.querySelector('.delivery__cards').classList.contains('active')) {
					document.querySelector('.delivery__cards').classList.add('active')
				}
				document.querySelector('.callback').style.display = 'none'
				document.querySelector('.callback--refund').style.display = 'block'
			}
		}
	})
}

const paymentMenu = document.querySelector('.payment__menu')
const paymentTabContent = document.querySelectorAll('.payment__tab-content')

if (paymentMenu) {
	paymentMenu.addEventListener('click', (e) => {
		const { target } = e

		if (!target.classList.contains('active')) {
			if (target.dataset.tab === 'cash') {
				document.querySelectorAll('.payment__tab').forEach((item) => {
					if (item.classList.contains('active')) {
						item.classList.remove('active')
					}
					if (item.dataset.tab === 'cash') {
						item.classList.add('active')
					}
				})

				paymentTabContent.forEach((item) => {
					if (item.dataset.content !== 'cash' && item.classList.contains('active')) {
						item.classList.remove('active')
					} else {
						item.classList.add('active')
					}
				})
			} else if (target.dataset.tab === 'company') {
				document.querySelectorAll('.payment__tab').forEach((item) => {
					if (item.classList.contains('active')) {
						item.classList.remove('active')
					}
					if (item.dataset.tab === 'company') {
						item.classList.add('active')
					}
				})
				paymentTabContent.forEach((item) => {
					if (item.dataset.content !== 'company' && item.classList.contains('active')) {
						item.classList.remove('active')
					} else {
						item.classList.add('active')
					}
				})
			}
		}
	})
}

const openCategory = document.querySelector('.jsOpenCategory')
const catalogCategory = document.querySelector('.jsCatalogCategory')
const catalogCategoryClose = document.querySelector('.jsCatalogCategoryClose')

if (openCategory) {
	openCategory.addEventListener('click', () => {
		catalogCategory.classList.toggle('active')

		catalogCategoryClose.addEventListener('click', () => {
			catalogCategory.classList.remove('active')
		})
	})
}
