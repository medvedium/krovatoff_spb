import "../scss/style.scss";
import './sliders.js'
import './catalog-filter.js'

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

const deliveryMenu = document.querySelector('.delivery__menu')
const deliveryTabContent = document.querySelectorAll('.delivery__tab-content')
const deliveryDescriptionItems = document.querySelectorAll('.delivery__description-content')

if (deliveryMenu) {
	deliveryMenu.addEventListener('click', (e) => {
		const {target} = e

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
		}
	})
}

const paymentMenu = document.querySelector('.payment__menu')
const paymentTabContent = document.querySelectorAll('.payment__tab-content')

if (paymentMenu) {
	paymentMenu.addEventListener('click', (e) => {
		const {target} = e

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
	})
}
