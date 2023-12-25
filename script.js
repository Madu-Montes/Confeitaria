const scrollToTopButton = document.getElementById("scrollToTopButton");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});



//animação 
window.sr = ScrollReveal({reset: true });

sr.reveal('.quemSomos, .galeria, .contato', {duration: 1500});

//botão subir ao topo
scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
});