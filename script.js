const header = document.querySelector('.header');
const navbar = document.querySelector('.navbar');
const menu = document.querySelector('.menu');

header.addEventListener('click', e => {
	if ( e.target.classList.contains('menu') ) {
		e.target.classList.toggle("fa-times");
		navbar.classList.toggle('aktif');
	}
	else {
		menu.classList.remove("fa-times");
		navbar.classList.remove('aktif');
	}
});