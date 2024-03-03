
//SITE BOUTON SCROLL TO TOP
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btnScrollToTop").style.display = "block";
    } else {
        document.getElementById("btnScrollToTop").style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


//EFFET ZOOM IMAGE
       // Fonction pour activer l'animation lorsque l'élément est visible dans la vue
       function animateOnScroll(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('zoomIn');
                observer.unobserve(entry.target); // Arrête d'observer une fois que l'élément est visible
            }
        });
    }

    // Crée un observateur pour surveiller l'image
    const observer = new IntersectionObserver(animateOnScroll, { root: null, threshold: 0.5 });

    // Cible l'image et commence à observer
    const image = document.getElementById('carbonImage');
    observer.observe(image);


    //FOOTER EFFET
    document.getElementById("toggleButton").addEventListener("click", function() {
        var divElement = document.querySelector(".divfooterbottom div");
        divElement.classList.toggle("visible"); // Toggle entre ajouter ou supprimer la classe visible
    });