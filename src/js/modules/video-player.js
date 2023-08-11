export default function videoPlayer(video, playBut) {
	const restart = () => {
		playBut.addEventListener('click', play, {once: true});
		video.removeEventListener('click', pause);
		video.classList.remove('player-active');
		playBut.classList.remove('video-active');
	};

	const play = () => {
		video.play();
		video.classList.add('player-active');
		playBut.classList.add('video-active');
		video.addEventListener('click', pause, {once: true});
	};

	const pause = () => {
		video.pause();
		video.classList.remove('player-active');
		playBut.classList.remove('video-active');
		playBut.addEventListener('click', play, {once: true});
	};

	playBut.addEventListener('click', play, {once: true});

	video.addEventListener('ended', () => {
		restart();
		video.src = video.currentSrc;
	});
}
