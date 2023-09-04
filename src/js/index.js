import 'normalize.css';
import 'video.js/dist/video-js.css';

import '../scss/common/common.scss';

import '../scss/header.scss';
import '../scss/main.scss';
import '../scss/footer.scss';
import '../scss/modal.scss';
import '../scss/burger-menu.scss';
import '../scss/video-js-style.scss';

import Swiper, {Navigation, Pagination} from 'swiper';
import 'swiper/scss';

import './form/form-validation';
import './modules/modal';

import smoothScroll from './modules/smooth-scroll';
import activeLinksController from './modules/active-links-controller';
import navScroll from './modules/nav-scroll';
import burger from './modules/burger-menu';

// Burger
const burgerBut = document.querySelector('.burger-icon');
const burgerMenu = [
	document.querySelector('.header-content'),
	document.querySelector('.main-burger-menu'),
];

burger(burgerMenu, burgerBut);

new Swiper('.cases-slider', {
	slidesPerView: 1,
	spaceBetween: 30,
	breakpoints: {
		640: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
	},
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
	loop: true,
});

// Observer
const navSelectorList = [
	document.querySelector('.main-menu'),
	document.querySelector('.main-burger-menu'),
];

const activeLinksControl = activeLinksController(navSelectorList, 'active');

const observedTargetsId = document.querySelectorAll('.main-menu a');

observedTargetsId.forEach((item) => {
	const id = item.getAttribute('href').slice(1);
	navScroll(id, activeLinksControl);
});

// Smoothscroll
const smoothLinks = document.querySelectorAll('a[href^="#"]');
smoothScroll(smoothLinks, activeLinksControl);
