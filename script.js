fetch("liste-bad.html")
  .then(response => response.text())
  .then(html => {
    const documentHtml = new DOMParser().parseFromString(html, "text/html");
    const listePhrasesBad = documentHtml.getElementById("liste-bad");

    // Vous pouvez maintenant accéder à la liste des phrases
    console.log(listePhrasesBad.children);
  });


function afficherPhraseAleatoire() {
  const listePhrasesBad = document.getElementById("liste-bad");
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
