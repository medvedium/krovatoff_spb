import noUiSlider from '../../node_modules/nouislider'

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
