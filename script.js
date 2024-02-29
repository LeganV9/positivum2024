const listePhrasesBad = [
  "Challenges are what make life interesting. Overcoming them is what makes life meaningful. - Joshua J. Marine",
  // Ajoute d'autres citations négatives ici
];

function afficherPhraseAleatoire() {
  const nombreAleatoire = Math.floor(Math.random() * listePhrasesBad.length);
  const phraseAleatoire = listePhrasesBad[nombreAleatoire];

  // Affichez la phrase aléatoire
  alert(phraseAleatoire);
}

// Utiliser fetch pour charger le contenu de header.html
fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('headerContainer').innerHTML = data;
  });
