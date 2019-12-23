// const trustLink = document.getElementById('trust');
// const closeTrustBtn = document.querySelector('.trust__info_close');
// const trustPopUp = document.getElementById('trust_pop-up');
const safetyArts = document.querySelectorAll('.safety');
const expandBtns = document.querySelectorAll('.expand');

console.log(safetyArts, expandBtns);

// trustLink.addEventListener('click', (e) => {
// 	e.preventDefault();
// 	trustPopUp.classList.add('trust-visible');
// });
// closeTrustBtn.addEventListener('click', () => {
// 	trustPopUp.classList.remove('trust-visible');
// });

expandBtns.forEach((btn, i) => {
	console.log(btn, i);
	btn.addEventListener('click', () => {
		safetyArts[i].classList.toggle('safety-expanded');
	})
})