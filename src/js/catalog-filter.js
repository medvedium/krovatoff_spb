import noUiSlider from '../../node_modules/nouislider'

if (document.querySelector('#slider')) {
	noUiSlider.create(document.querySelector('#slider'), {
		start: [1200, 5000],
		connect: true,
		range: {
			min: 1000,
			max: 5000
		}
	})
}