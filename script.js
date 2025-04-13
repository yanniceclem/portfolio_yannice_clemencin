console.log("Script chargé !");
/*navbar*/
const menuBurger = document.querySelector(".menu-burger")
const navLinks = document.querySelector(".nav-links")

menuBurger.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu')
})
/*navbar*/

/* ************************************************************************************************************************************************************************************************************** */

/*skillbar*/

document.addEventListener("DOMContentLoaded", function () {
    let progressBars = document.querySelectorAll(".progress");

    progressBars.forEach(bar => {
        let targetWidth = bar.style.width;
        bar.style.width = "0%";

        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 500);
    });
});

/*skillbar*/

/* ************************************************************************************************************************************************************************************************************** */

/*carousel*/

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

if (prevBtn) prevBtn.addEventListener('click', slidePrécédante);
if (nextBtn) nextBtn.addEventListener('click', slideSuivant);


let currentIndex = 0;
let slides = document.querySelectorAll('.slidec');
let totalSlides = slides.length;
let interval;
let restartTimeout;

function afficherSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
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
    }, 3000);
}

function resetAutoScroll() {
    clearInterval(interval);  // Stop l'auto-scroll

    // Annule le redémarrage précédent s'il y en a un
    clearTimeout(restartTimeout);

    // Redémarre l'auto-scroll après 20 secondes
    restartTimeout = setTimeout(() => {
        startAutoScroll();
    }, 20000);
}

// Initialisation du carrousel
afficherSlide(currentIndex);
startAutoScroll();

// Ajouter des événements pour les boutons
document.querySelector('.prevBtn').addEventListener('click', slidePrécédante);
document.querySelector('.nextBtn').addEventListener('click', slideSuivant);


/*carousel*/

/* ************************************************************************************************************************************************************************************************************** */

/*formulaire*/

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".formulaire form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Empêche l'envoi par défaut

        const formData = new FormData(form);
        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                form.innerHTML = "<p style='color: green; text-align: center;'>Message envoyé avec succès !</p>";
            } else {
                form.innerHTML = "<p style='color: red; text-align: center;'>Erreur lors de l'envoi.</p>";
            }
        }).catch(error => {
            form.innerHTML = "<p style='color: red; text-align: center;'>Erreur réseau.</p>";
        });
    });
});

/*formulaire*/
/* ************************************************************************************************************************************************************************************************************** */
/*copier*/

function copierTexte(element) {
    const texte = element.innerText;

    navigator.clipboard.writeText(texte)
        .then(() => {
          alert("Texte copié dans le presse-papiers !");
        })
        .catch(err => {
          console.error("Erreur lors de la copie : ", err);
        });
}

/*copier*/console.log("Script chargé !");
/*navbar*/
const menuBurger = document.querySelector(".menu-burger")
const navLinks = document.querySelector(".nav-links")

menuBurger.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu')
})
/*navbar*/

/* ************************************************************************************************************************************************************************************************************** */

/*skillbar*/

document.addEventListener("DOMContentLoaded", function () {
    let progressBars = document.querySelectorAll(".progress");

    progressBars.forEach(bar => {
        let targetWidth = bar.style.width;
        bar.style.width = "0%";

        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 500);
    });
});

/*skillbar*/

/* ************************************************************************************************************************************************************************************************************** */

/*carousel*/

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

if (prevBtn) prevBtn.addEventListener('click', slidePrécédante);
if (nextBtn) nextBtn.addEventListener('click', slideSuivant);


let currentIndex = 0;
let slides = document.querySelectorAll('.slidec');
let totalSlides = slides.length;
let interval;
let restartTimeout;

function afficherSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
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
    }, 3000);
}

function resetAutoScroll() {
    clearInterval(interval);  // Stop l'auto-scroll

    // Annule le redémarrage précédent s'il y en a un
    clearTimeout(restartTimeout);

    // Redémarre l'auto-scroll après 20 secondes
    restartTimeout = setTimeout(() => {
        startAutoScroll();
    }, 20000);
}

// Initialisation du carrousel
afficherSlide(currentIndex);
startAutoScroll();

// Ajouter des événements pour les boutons
document.querySelector('.prevBtn').addEventListener('click', slidePrécédante);
document.querySelector('.nextBtn').addEventListener('click', slideSuivant);


/*carousel*/

/* ************************************************************************************************************************************************************************************************************** */

/*formulaire*/

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".formulaire form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Empêche l'envoi par défaut

        const formData = new FormData(form);
        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                form.innerHTML = "<p style='color: green; text-align: center;'>Message envoyé avec succès !</p>";
            } else {
                form.innerHTML = "<p style='color: red; text-align: center;'>Erreur lors de l'envoi.</p>";
            }
        }).catch(error => {
            form.innerHTML = "<p style='color: red; text-align: center;'>Erreur réseau.</p>";
        });
    });
});

/*formulaire*/
/* ************************************************************************************************************************************************************************************************************** */
/*copier*/

function copierTexte(element) {
    const texte = element.innerText;

    navigator.clipboard.writeText(texte)
        .then(() => {
          alert("Texte copié dans le presse-papiers !");
        })
        .catch(err => {
          console.error("Erreur lors de la copie : ", err);
        });
}

/*copier*/console.log("Script chargé !");
/*navbar*/
const menuBurger = document.querySelector(".menu-burger")
const navLinks = document.querySelector(".nav-links")

menuBurger.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu')
})
/*navbar*/

/* ************************************************************************************************************************************************************************************************************** */

/*skillbar*/

document.addEventListener("DOMContentLoaded", function () {
    let progressBars = document.querySelectorAll(".progress");

    progressBars.forEach(bar => {
        let targetWidth = bar.style.width;
        bar.style.width = "0%";

        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 500);
    });
});

/*skillbar*/

/* ************************************************************************************************************************************************************************************************************** */

/*carousel*/

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

if (prevBtn) prevBtn.addEventListener('click', slidePrécédante);
if (nextBtn) nextBtn.addEventListener('click', slideSuivant);


let currentIndex = 0;
let slides = document.querySelectorAll('.slidec');
let totalSlides = slides.length;
let interval;
let restartTimeout;

function afficherSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
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
    }, 3000);
}

function resetAutoScroll() {
    clearInterval(interval);  // Stop l'auto-scroll

    // Annule le redémarrage précédent s'il y en a un
    clearTimeout(restartTimeout);

    // Redémarre l'auto-scroll après 20 secondes
    restartTimeout = setTimeout(() => {
        startAutoScroll();
    }, 20000);
}

// Initialisation du carrousel
afficherSlide(currentIndex);
startAutoScroll();

// Ajouter des événements pour les boutons
document.querySelector('.prevBtn').addEventListener('click', slidePrécédante);
document.querySelector('.nextBtn').addEventListener('click', slideSuivant);


/*carousel*/

/* ************************************************************************************************************************************************************************************************************** */

/*formulaire*/

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".formulaire form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Empêche l'envoi par défaut

        const formData = new FormData(form);
        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                form.innerHTML = "<p style='color: green; text-align: center;'>Message envoyé avec succès !</p>";
            } else {
                form.innerHTML = "<p style='color: red; text-align: center;'>Erreur lors de l'envoi.</p>";
            }
        }).catch(error => {
            form.innerHTML = "<p style='color: red; text-align: center;'>Erreur réseau.</p>";
        });
    });
});

/*formulaire*/
/* ************************************************************************************************************************************************************************************************************** */
/*copier*/

function copierTexte(element) {
    const texte = element.innerText;

    navigator.clipboard.writeText(texte)
        .then(() => {
          alert("Texte copié dans le presse-papiers !");
        })
        .catch(err => {
          console.error("Erreur lors de la copie : ", err);
        });
}

/*copier*/console.log("Script chargé !");
/*navbar*/
const menuBurger = document.querySelector(".menu-burger")
const navLinks = document.querySelector(".nav-links")

menuBurger.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu')
})
/*navbar*/

/* ************************************************************************************************************************************************************************************************************** */

/*skillbar*/

document.addEventListener("DOMContentLoaded", function () {
    let progressBars = document.querySelectorAll(".progress");

    progressBars.forEach(bar => {
        let targetWidth = bar.style.width;
        bar.style.width = "0%";

        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 500);
    });
});

/*skillbar*/

/* ************************************************************************************************************************************************************************************************************** */

/*carousel*/

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

if (prevBtn) prevBtn.addEventListener('click', slidePrécédante);
if (nextBtn) nextBtn.addEventListener('click', slideSuivant);


let currentIndex = 0;
let slides = document.querySelectorAll('.slidec');
let totalSlides = slides.length;
let interval;
let restartTimeout;

function afficherSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
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
    }, 3000);
}

function resetAutoScroll() {
    clearInterval(interval);  // Stop l'auto-scroll

    // Annule le redémarrage précédent s'il y en a un
    clearTimeout(restartTimeout);

    // Redémarre l'auto-scroll après 20 secondes
    restartTimeout = setTimeout(() => {
        startAutoScroll();
    }, 20000);
}

// Initialisation du carrousel
afficherSlide(currentIndex);
startAutoScroll();

// Ajouter des événements pour les boutons
document.querySelector('.prevBtn').addEventListener('click', slidePrécédante);
document.querySelector('.nextBtn').addEventListener('click', slideSuivant);


/*carousel*/

/* ************************************************************************************************************************************************************************************************************** */

/*formulaire*/

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".formulaire form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Empêche l'envoi par défaut

        const formData = new FormData(form);
        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                form.innerHTML = "<p style='color: green; text-align: center;'>Message envoyé avec succès !</p>";
            } else {
                form.innerHTML = "<p style='color: red; text-align: center;'>Erreur lors de l'envoi.</p>";
            }
        }).catch(error => {
            form.innerHTML = "<p style='color: red; text-align: center;'>Erreur réseau.</p>";
        });
    });
});

/*formulaire*/
/* ************************************************************************************************************************************************************************************************************** */
/*copier*/

function copierTexte(element) {
    const texte = element.innerText;

    navigator.clipboard.writeText(texte)
        .then(() => {
          alert("Texte copié dans le presse-papiers !");
        })
        .catch(err => {
          console.error("Erreur lors de la copie : ", err);
        });
}

/*copier*/
