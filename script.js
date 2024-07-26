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

// Mes éléments pour les flèches 
const bannerImg = document.querySelector('.banner-img'); // Images	
const arrowLeft = document.querySelector('.arrow_left'); // Flèche gauche
const arrowRight = document.querySelector('.arrow_right'); // Flèche droite
const mesSlides = slides.length; // La taille de mon tableau
let i = 0; // i = indice et l'indice d'un tableau commence toujours à 0


// Gestionnaire d'événement clic gauche
arrowLeft.addEventListener("click", function () {
	const dots = document.querySelectorAll('.dot');
	dots[i].classList.remove("dot_selected")																				// On retire la selection sur le bullet point d'avant 
	i--;
	if (i === -1) {
		i = mesSlides -1
	}

	bannerImg.src = "./assets/slideshow/" + slides[i].image																	// On va chercher nos images en fonction de l'endroit où l'on se trouve avec [i]
	dots[i].classList.add("dot_selected")																					// On va chercher nos dots en fonction de l'endroit où l'on se trouve avec [i]

	const tagLine = document.querySelector('.tagLine'); 																	// Textes sous l'image
	tagLine.innerHTML = slides[i].tagLine																					// On ajoute le texte avec innerHTML en fonction de l'endroit où l'on se trouve avec [i]
})


// Gestionnaire d'événement clic droit
arrowRight.addEventListener("click", function () {
	const dots = document.querySelectorAll('.dot');
	dots[i].classList.remove("dot_selected")
	i++;
	if (i === mesSlides) {
		i = 0
	}
	bannerImg.src = "./assets/slideshow/" + slides[i].image
	dots[i].classList.add("dot_selected")

	const tagLine = document.querySelector('.tagLine'); // Textes sous l'image
	tagLine.innerHTML = slides[i].tagLine
})


// Fonction points d'indicateur
function points () { 
	const dots = document.querySelector('.dots');
	for (let j = 0; j < slides.length; j++) {
		const dot = document.createElement("div")
		dot.classList.add("dot")
		dots.appendChild(dot);
	}
	document.querySelector(".dot").classList.add("dot_selected") 
}

points()

// Ne pas donner le m nom a la variable et a la fonction