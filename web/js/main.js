// Fonction pour l'animation de défilement fluide (smooth scrolling)
$(document).ready(function(){
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});

// Fonction pour la barre de progression de navigation
window.addEventListener('scroll', function () {
    const progressBar = document.getElementById('progress-bar');
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progressPercentage = (window.pageYOffset / scrollHeight) * 100;
    progressBar.style.width = progressPercentage + '%';
});

$(document).ready(function () {
    // Affiche la flèche de retour en haut lorsque l'utilisateur fait défiler vers le bas
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".scrollTop").fadeIn();
        } else {
            $(".scrollTop").fadeOut();
        }
    });

    // Fait défiler la page vers le haut avec un effet doux lorsqu'on clique sur la flèche
    $(".scrollTop").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 500);
    });
});
