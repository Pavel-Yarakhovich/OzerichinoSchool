// import simpleParallax from 'simple-parallax-js';

const mainMenu = document.querySelector('.header__main-menu');
const verticalMenu = document.querySelector('.header__vertical-menu');
const footer = document.querySelector('.footer');
let scroll = 0;


window.addEventListener('scroll', function() {
	let mainMenuCoords = mainMenu.getBoundingClientRect();
	let footerCoords = footer.getBoundingClientRect();
	console.log(footerCoords.y);
	console.log(window.innerHeight);
	if (mainMenuCoords.y < -62 && !(footerCoords.y < window.innerHeight)) {
		setTimeout(() => {
			verticalMenu.classList.add('header__vertical-menu-show');
		}, 150);
	} else {
		verticalMenu.classList.remove('header__vertical-menu-show');
	}
  });

