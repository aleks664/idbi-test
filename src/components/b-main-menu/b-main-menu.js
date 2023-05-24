const mainMenuToggle = (selector) => {
	const buttons = document.querySelectorAll(selector);
	buttons.forEach($btn => {
		const $menu = document.getElementById('main-menu');
		const $html = document.querySelector('html');
		$btn.addEventListener('click', (e) => {
			e.preventDefault();
			$btn.classList.toggle('is-active');
			$menu.classList.toggle('is-open');
			$html.classList.toggle('is-menu-open');
		});
	});
}
mainMenuToggle('[data-menu-toggle]');
