const headerScroll = () => {
	const $header = document.querySelector('.s-header');
	const $headerFixedBlock = $header.querySelector('.s-header__container');
	let headerBottom = $header.offsetTop + $headerFixedBlock.offsetHeight;
	let flag = false;
	$header.style.removeProperty('height');
	$header.style.height = `${$headerFixedBlock.offsetHeight}px`;

	const onScroll = () => {
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		if (scrollTop > headerBottom) {
			if (!flag) {
				flag = true
				$header.classList.add('is-fixed');
				$headerFixedBlock.style.animationName = 'fadeInDown';
			}
		} else if (flag) {
			$headerFixedBlock.style.animationName = 'hideInUp';
			$header.classList.remove('is-fixed');
			flag = false;
		}
	}
	window.addEventListener('scroll', () => onScroll());

	window.addEventListener('resize', () => {
		$header.style.removeProperty('height');
		$header.classList.remove('is-fixed');
		headerBottom = $header.offsetTop + $headerFixedBlock.offsetHeight;
		flag = false;
		headerBottom = $header.offsetTop + $headerFixedBlock.offsetHeight;
		$header.style.height = `${$headerFixedBlock.offsetHeight}px`;
		onScroll()
	});
};
headerScroll()
