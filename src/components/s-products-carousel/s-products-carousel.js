import Swiper, { Navigation } from 'swiper';
const sProductsCarsousel = () => {
	const sections = document.querySelectorAll('.s-products-carousel');
	sections.forEach($section => {
		const $prev = $section.querySelector('.js-prev');
		const $next = $section.querySelector('.js-next');
		console.log($next)
		// eslint-disable-next-line no-unused-vars
		const swiper = new Swiper($section.querySelector('.s-products-carousel__swiper'), {
			modules: [Navigation],
			navigation: {
				nextEl: $next,
				prevEl: $prev
			},
			breakpoints: {
				320: {
					slidesPerView: 1
				},
				480: {
					slidesPerView: 2
				},
				768: {
					slidesPerView: 3
				},
				992: {
					slidesPerView: 4
				}
			}
		});
	})
}
sProductsCarsousel()
