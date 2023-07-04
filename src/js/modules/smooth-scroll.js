export default function smoothScroll(allAnchorLinks, activeLinksController) {
	if (allAnchorLinks) {
		allAnchorLinks.forEach((item) => {
			item.addEventListener('click', (e) => {
				e.preventDefault();

				const id = item.getAttribute('href').slice(1);

				activeLinksController(id);

				document.querySelector(`#${id}`).scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				});
			});
		});
	}
}
