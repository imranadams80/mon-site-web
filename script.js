
document.getElementById("monBouton").addEventListener("click", function() {
    const texte = document.getElementById("texteAffiché");
    texte.classList.toggle("cache"); // Affiche ou cache le texte
});
document.getElementById("mBouton").addEventListener("click", function() {
    const texte = document.getElementById("texte");
    texte.classList.toggle("cache"); // Affiche ou cache le texte
});
