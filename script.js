const listePhrasesBad = document.getElementById("liste-bad");
const boutonBad = document.getElementById("bouton-bad");

bouton.addEventListener("click", function() {
  const nombreAleatoire = Math.floor(Math.random() * listePhrases.children.length);
  const phraseAleatoire = listePhrases.children[nombreAleatoire].textContent;

  // Affichez la phrase aléatoire
  alert(phraseAleatoire);
  console.log(phraseAleatoire);

  // Optionnel : afficher la phrase dynamiquement
  const elementTexte = document.getElementById("texte-selectionne");
  elementTexte.textContent = phraseAleatoire;
});



// Utiliser fetch pour charger le contenu de header.html
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('headerContainer').innerHTML = data;
    });
