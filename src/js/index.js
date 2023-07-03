import 'normalize.css';

import '../scss/common/common.scss';

import '../scss/header.scss';
import '../scss/main.scss';

import Swiper, {Navigation, Pagination} from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
// import 'swiper/scss/pagination';

const casesSlider = new Swiper('.cases-slider', {
	slideClass: 'cases-slide-item',
	slidesPerView: 3,
	spaceBetween: 30,
	navigation: {
		nextEl: '.cases-button-next',
		prevEl: '.cases-button-prev',
	},
	pagination: {
		el: '.cases-pagination',
		bulletClass: 'cases-pagination-bullet',
		bulletActiveClass: 'cases-pagination-bullet-active',
		type: 'bullets',
		clickable: true,
	},
	modules: [Navigation, Pagination],
});
