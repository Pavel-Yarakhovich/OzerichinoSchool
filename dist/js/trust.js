const trustLink = document.getElementById('trust');
const closeTrustBtn = document.querySelector('.trust__info_close');
const trustPopUp = document.getElementById('trust_pop-up');

trustLink.addEventListener('click', (e) => {
	e.preventDefault();
	trustPopUp.classList.add('trust-visible');
});
closeTrustBtn.addEventListener('click', () => {
	trustPopUp.classList.remove('trust-visible');
});