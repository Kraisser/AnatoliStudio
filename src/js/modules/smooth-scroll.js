export default function smoothScroll(allAnchorLinks) {
	if (allAnchorLinks) {
		allAnchorLinks.forEach((item) => {
			item.addEventListener('click', (e) => {
				e.preventDefault();

				const id = item.getAttribute('href').slice(1);

				document.querySelector(`#${id}`).scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				});
			});
		});
	}
}
