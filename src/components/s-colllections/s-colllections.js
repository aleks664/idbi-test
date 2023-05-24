import Swiper from 'swiper';
const sCollections = () => {
	const sections = document.querySelectorAll('.s-collections');
	sections.forEach($section => {
		// eslint-disable-next-line no-unused-vars
		const swiper = new Swiper($section.querySelector('.s-collections__swiper'), {
			loop: true,
			slidesPerView: 1,
			spaceBetween: 0,
			breakpoints: {
				320: {
					slidesPerView: 2
				},
				560: {
					slidesPerView: 3
				},
				768: {
					slidesPerView: 4
				},
				992: {
					slidesPerView: 6
				}
			}
		});
	})
}
sCollections()
