const menuItems = document.querySelectorAll('.menu-item');
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const logo = document.getElementById('logo');

// * Hamburger menu items event listener
menuItems.forEach((menuItem) => {
	menuItem.addEventListener('click', hamburgerDisappear);
});

// * Hamburger button event listener
btn.addEventListener('click', navToggle);

// * Hamburger Button/Menu Function
function navToggle() {
	btn.classList.toggle('open');
	menu.classList.toggle('flex');
	menu.classList.toggle('hidden');

	if (menu.classList.contains('flex')) {
		logo.classList.add('hidden');
	} else {
		logo.classList.remove('hidden');
	}
}

// * Hamburger Menu disappear on Hamburger Menu Item Click
function hamburgerDisappear() {
	btn.classList.toggle('open');
	menu.classList.toggle('flex');
	menu.classList.toggle('hidden');

	// if (menu.classList.contains('flex')) {
	// 	logo.setAttribute('src', './images/logo-bookmark-footer.svg');
	// } else {
	// 	logo.setAttribute('src', './images/logo-bookmark.svg');
	// }
}
