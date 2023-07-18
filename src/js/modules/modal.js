import {disablePageScroll, enablePageScroll} from 'scroll-lock';

const triggers = document.querySelectorAll('.cases-slide-item');
const modalOverflow = document.querySelector('.slider-modal-overflow');
const modalWrapper = document.querySelector('.slider-modal-wrapper');
const modalCloseIcon = modalOverflow.querySelector('.modal-close-icon');
const loadingSpinner = `<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						style="margin: auto; background: none; display: block; shape-rendering: auto"
						width="50px"
						height="50px"
						viewBox="0 0 100 100"
						preserveAspectRatio="xMidYMid"
					>
						<circle
							cx="50"
							cy="50"
							fill="none"
							stroke="#ffffff"
							stroke-width="8"
							r="35"
							stroke-dasharray="164.93361431346415 56.97787143782138"
						>
							<animateTransform
								attributeName="transform"
								type="rotate"
								repeatCount="indefinite"
								dur="1.4s"
								values="0 50 50;360 50 50"
								keyTimes="0;1"
							></animateTransform>
						</circle>
					</svg>`;

triggers.forEach((item) => {
	item.addEventListener('click', (e) => toggleModal(item, true));
});

modalCloseIcon.addEventListener('click', (e) => toggleModal(e, false));
modalOverflow.addEventListener('click', (e) => {
	if (e.target === modalOverflow) {
		toggleModal(e, false);
	}
});

function toggleModal(target, open) {
	if (open) {
		modalOverflow.classList.add('slider-modal-opened');
		disablePageScroll(modalWrapper);
		setupImage(target);
	} else {
		enablePageScroll(modalWrapper);
		modalOverflow.classList.remove('slider-modal-opened');
		modalOverflow.addEventListener(
			'transitionend',
			(e) => {
				modalWrapper.innerHTML = loadingSpinner;
			},
			{once: true}
		);
	}
}

function setupImage(target) {
	const img = target.querySelector('.cases-slide-item img');
	if (img) {
		const imgCopy = document.createElement('img');
		const path = img.getAttribute('src');
		const alt = img.getAttribute('alt');

		imgCopy.src = path;
		imgCopy.alt = alt;

		imgCopy.onload = () => {
			modalWrapper.innerHTML = '';
			modalWrapper.insertAdjacentElement('beforeend', imgCopy);
			imgTransition(imgCopy);
		};

		imgCopy.onerror = () => toggleModal(target, false);
	} else {
		toggleModal(target, false);
	}
}

function imgTransition(img) {
	modalOverflow.addEventListener(
		'transitionend',
		(e) => {
			img.classList.add('loaded');
		},
		{once: true}
	);
}
