/*navbar*/
const menuBurger = document.querySelector(".menu-burger")
const navLinks = document.querySelector(".nav-links")

menuBurger.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu')
})
/*navbar*/

/* ************************************************************************************************************************************************************************************************************** */

/*carousel*/

let currentIndex = 0;
let slides = document.querySelectorAll('.slidec');
let totalSlides = slides.length;
let interval;

function afficherSlide(index) {
    // Cacher tous les textes
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Afficher le texte actif
    slides[index].classList.add('active');
}

function slideSuivant() {
    currentIndex = (currentIndex + 1) % totalSlides;
    afficherSlide(currentIndex);
    resetAutoScroll();
}

function slidePrécédante() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    afficherSlide(currentIndex);
    resetAutoScroll();
}

function startAutoScroll() {
    interval = setInterval(() => {
        slideSuivant();
    }, 3000); // 3000 ms = 3 secondes
}

function resetAutoScroll() {
    clearInterval(interval);
    startAutoScroll();
}

// Initialiser le carrousel
afficherSlide(currentIndex);
startAutoScroll();

// Ajouter des événements pour les boutons
document.querySelector('.prev').addEventListener('click', () => {
    slidePrécédante();
});

document.querySelector('.next').addEventListener('click', () => {
    slideSuivant();
});

/*carousel*/

/* ************************************************************************************************************************************************************************************************************** */
