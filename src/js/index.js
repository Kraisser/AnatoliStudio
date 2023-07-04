import 'normalize.css';

import '../scss/common/common.scss';

import '../scss/header.scss';
import '../scss/main.scss';
import '../scss/footer.scss';

import Swiper, {Navigation, Pagination} from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';

import './svg-anim/svg-animation';
import smoothScroll from './modules/smooth-scroll';
import activeLinksController from './modules/active-links-controller';
import navScroll from './modules/nav-scroll';

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

const navSelectorList = [document.querySelector('.main-menu')];

const activeLinksControl = activeLinksController(navSelectorList, 'active');

const observedTargets = document.querySelectorAll('.main-menu a');

observedTargets.forEach((item) => {
	const id = item.getAttribute('href').slice(1);
	navScroll(id, activeLinksControl);
});

const smoothLinks = document.querySelectorAll('a[href^="#"]');
smoothScroll(smoothLinks, activeLinksControl);
