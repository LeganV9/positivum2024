const listePhrasesBad = [
  "Challenges are what make life interesting. Overcoming them is what makes life meaningful. - Joshua J. Marine",
  "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
  "The greatest failure is the failure to try. - Chinese Proverb",
  "Your only limit is yourself. - Arnold Schwarzenegger",
  "Failures are the pillars of success. - Charles Chaplin",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Difficulty attracts the man of character because it is by tackling it that he realizes himself. - Johann Wolfgang von Goethe",
  "Every failure brings you closer to success. - Jack Canfield",
  "We can't fail without our consent. - Eleanor Roosevelt",
  "Success is falling nine times and getting up ten. - Jon Bon Jovi",
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
