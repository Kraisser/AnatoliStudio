import anime from 'animejs/lib/anime.es.js';

const butsBackground = document.querySelectorAll('.contact-but-gradient-radius');

const defaultGradient = {
	first: 'rgba(244, 202, 54,1)',
	second: 'rgba(244, 54, 225,1)',
};
const secondGradient = {first: 'rgba(255,255,255,1)', second: 'rgba(255,255,255,1)'};

const animCallback = (el, direction) => {
	anime({
		targets: defaultGradient,
		first: secondGradient.first,
		second: secondGradient.second,
		update: function (a) {
			const color1 = a.animations[0].currentValue;
			const color2 = a.animations[1].currentValue;
			el.style.background = `linear-gradient(135deg, ${color1} 0, ${color2} 100%)`;
		},
		direction: direction,
		easing: 'easeInOutQuad',
		duration: 3000,
	});
};

// butsBackground.forEach((but) => {
// 	but.addEventListener(
// 		'mouseenter',
// 		() => {
// 			animCallback(but, 'normal');
// 		},
// 		{once: true}
// 	);
// 	but.addEventListener('mouseleave', () => {
// 		animCallback(but, 'reverse');
// 	});
// });
