import videojs from 'video.js';
import {disablePageScroll, enablePageScroll} from 'scroll-lock';

const slideTriggers = document.querySelectorAll('.cases-slide-item');
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

let activePlayer;

slideTriggers.forEach((item) => {
	item.addEventListener('click', () => toggleModal(item, true));
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
		activePlayer = setupVideo(target);
	} else {
		if (activePlayer) {
			activePlayer.dispose();
		}

		enablePageScroll(modalWrapper);
		modalOverflow.classList.remove('slider-modal-opened');

		modalOverflow.addEventListener(
			'transitionend',
			() => {
				modalWrapper.innerHTML = loadingSpinner;
			},
			{once: true}
		);
	}
}

function setupVideo(target) {
	const fullSrc = target.dataset.videoSrc.split('.');
	const [videoName, videoExt] = [fullSrc[0], fullSrc[1]];
	const aspectRatio = countAspectRatio();
	const videoPath = `${videoName}${aspectRatio}.${videoExt}`;

	modalWrapper.innerHTML = `
	<div class="slide-video-wrapper">
		<video class="vjs-modal-custom video-js vjs-default-skin" id="video-js-modal">
			<source
				src="${videoPath}"
				type="video/mp4"
			/>
			<p>Your browser does not support HTML5 video</p>
		</video>
	</div>
	`;

	// modalWrapper.querySelector('.video-js')
	const activePlayer = videojs('video-js-modal', {
		controls: true,
		autoplay: false,
		preload: 'auto',
		fluid: true,
		notSupportedMessage: 'There was an error uploading the video, please try again later',
	});

	return activePlayer;
}

function countAspectRatio() {
	const screenWidth = window.innerWidth;
	const screenHeight = window.innerHeight;
	const aspectRatio = Math.abs(screenWidth / screenHeight);

	if (aspectRatio < 0.68) {
		return '9x16';
	} else if (aspectRatio >= 0.68 && aspectRatio < 0.9) {
		return '4x5';
	} else if (aspectRatio >= 0.9 && aspectRatio < 1.39) {
		return '1x1';
	} else {
		return '16x9';
	}
}
