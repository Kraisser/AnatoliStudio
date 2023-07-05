export default function burger(burgerWrapper, burgerBut) {
	const toggleMenu = () => {
		if (!burgerBut.classList.contains('burger-active')) {
			burgerOpen();
		} else {
			burgerClose();
		}
	};

	const burgerOpen = () => {
		// console.log('open');
		burgerBut.classList.remove('burger-closed');
		burgerBut.classList.add('burger-active');

		burgerWrapper.classList.add('burger-menu-active');
	};

	const burgerClose = (e, but) => {
		// console.log('e.target === but: ', e.currentTarget);
		// if (e.target === but) {
		// 	return;
		// }
		// console.log('close');
		burgerBut.classList.remove('burger-active');
		burgerBut.classList.add('burger-closed');

		burgerWrapper.classList.remove('burger-menu-active');
	};

	burgerBut.addEventListener('click', toggleMenu);
	burgerWrapper.addEventListener('click', (e) => burgerClose(e, burgerBut));
}
