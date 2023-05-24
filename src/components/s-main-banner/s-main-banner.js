import Swiper, { Navigation, Autoplay } from 'swiper';
const sMainBanner = () => {
	const sections = document.querySelectorAll('.s-main-banner');
	sections.forEach($section => {
		const $prev = $section.querySelector('.swiper-button-prev');
		const $next = $section.querySelector('.swiper-button-next');
		// eslint-disable-next-line no-unused-vars
		const swiper = new Swiper($section.querySelector('.s-main-banner__swiper'), {
			modules: [Navigation, Autoplay],
			loop: true,
			navigation: {
				nextEl: $next,
				prevEl: $prev
			},
			autoplay: {
				delay: 5000
			}
		});
	})
}
sMainBanner()
