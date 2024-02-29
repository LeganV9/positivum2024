function afficherPhraseAleatoire() {
  const listePhrasesBad = document.getElementById("liste-bad);
  const nombreAleatoire = Math.floor(Math.random() * listePhrasesBad.children.length);
  const phraseAleatoire = listePhrasesBad.children[nombreAleatoire].textContent;

  // Affichez la phrase aléatoire
  alert(phraseAleatoire);
}



// Utiliser fetch pour charger le contenu de header.html
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('headerContainer').innerHTML = data;
    });
