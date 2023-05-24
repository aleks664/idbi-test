import { getSiblings } from '../../base/js/core';

const imageHover = (selector) => {
	const pages = document.querySelectorAll(selector);
	pages.forEach($page => {
		$page.addEventListener('mouseenter', () => {
			const $img = document.getElementById($page.dataset.hoverImage);
			const siblElts = getSiblings($page);
			const siblImgs = getSiblings($img.closest('picture'));
			$img.classList.add('is-active');
			$page.classList.add('is-active');
			siblImgs.forEach($el => {
				$el.querySelector('img').classList.remove('is-active');
			});
			siblElts.forEach($el => {
				$el.classList.remove('is-active');
			});
		});
	});
}
imageHover('[data-hover-image]')
