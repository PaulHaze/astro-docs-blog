document.querySelector('.hamburger').addEventListener('click', () => {
	document.querySelector('.hamburger-links').classList.toggle('hide');
	document.querySelector('.hamburger').classList.toggle('active');
});
