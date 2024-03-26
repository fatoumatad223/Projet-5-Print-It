// Tableau d'image : [ 0, 1, 2, 3] 
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

const arrow = document.querySelectorAll(".arrow")

arrow.forEach((arrow) => {
	arrow.addEventListener('click' , (e) => {
		const calcNextSlide = e.target.id === "arrow-right" ? 1 : -1
	})
})