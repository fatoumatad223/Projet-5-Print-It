/* Tableau d'image : [ 0, 1, 2, 3] */

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Je récupère mes éléments
const bannerImg = document.querySelector('.banner-img');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const mesSlides = slides.length;
const dots = document.querySelectorAll('.dot'); 
// L'indice d'un tableau commence toujours à 0
let i = 0; 

// Gestionnaire d'événement clic gauche
arrowLeft.addEventListener("click", function () {
	i--;
	if (i === -1) {
		i = mesSlides -1
	}
	bannerImg.src = "./assets/slideshow/" + slides[i].image
})

// Gestionnaire d'événement clic droit
arrowRight.addEventListener("click", function () {
	i++;
	if (i === mesSlides) {
		i = 0
	}
	bannerImg.src = "./assets/slideshow/" + slides[i].image
	
})

/* Fonction points d'indicateur
function dots () {
for (let indicateur = 0; index < slides.length; indicateur+++) {
const dot = document.createElement("div");
		dot.setAttribute("class", "dot");
		dots.appendChild(dot);
	}
}*/