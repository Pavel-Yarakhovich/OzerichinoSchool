const safetyArts = document.querySelectorAll('.safety');
const expandBtns = document.querySelectorAll('.expand');

console.log(safetyArts, expandBtns);

expandBtns.forEach((btn, i) => {
	console.log(btn, i);
	btn.addEventListener('click', () => {
		safetyArts[i].classList.toggle('safety-expanded');
	if (safetyArts[i].classList.contains('safety-expanded')) {
		expandBtns[i].innerHTML = 'свернуть';
	} else {
		expandBtns[i].innerHTML = 'развернуть';
	}
	})
})