export default function burger(burgerWrappers, burgerBut) {
	const toggleMenu = () => {
		if (!burgerBut.classList.contains('burger-active')) {
			burgerOpen();
		} else {
			burgerClose();
		}
	};

	const burgerOpen = () => {
		burgerBut.classList.remove('burger-closed');
		burgerBut.classList.add('burger-active');

		burgerWrappers.forEach((item) => {
			item.classList.add('burger-menu-active');
		});
	};

	const burgerClose = () => {
		burgerBut.classList.remove('burger-active');
		burgerBut.classList.add('burger-closed');

		burgerWrappers.forEach((item) => {
			item.classList.remove('burger-menu-active');
		});
	};

	burgerBut.addEventListener('click', toggleMenu);
	// burgerWrapper.addEventListener('click', (e) => burgerClose(e, burgerBut));
}
