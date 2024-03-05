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

const listePhrasesNeutral = [
  "Perseverance is not a long race; it's a lot of short races one after the other. - Walter Elliot",
  "Don't worry that the world owes you something. It owes you nothing. It was here before you. - Mark Twain",
  "It's during our darkest moments that we must focus to see the light. - Aristotle Onassis",
  "Success is going from failure to failure without losing your enthusiasm. - Winston Churchill",
  "It's in our decisions that our destiny is shaped. - Tony Robbins",
  "People who succeed have one thing in common: they know why they get up in the morning. - Unknown",
  "Perseverance is the key to success. - Paramahansa Yogananda",
  "The true measure of a man is not how he behaves in moments of comfort and convenience, but how he stands at times of controversy and challenges. - Martin Luther King Jr.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Don't look back, you're not going that way. - Unknown"
  ];

function afficherPhraseAleatoireBad() {
  const nombreAleatoire = Math.floor(Math.random() * listePhrasesBad.length);
  const phraseAleatoire = listePhrasesBad[nombreAleatoire];

function afficherPhraseAleatoireNeutral() {
  const nombreAleatoire = Math.floor(Math.random() * listePhrasesNeutral.length);
  const phraseAleatoire = listePhrasesNeutral[nombreAleatoire];

function afficherPhraseAleatoirePositive() {
  const nombreAleatoire = Math.floor(Math.random() * listePhrasesPositive.length);
  const phraseAleatoire = listePhrasesPositive[nombreAleatoire];

  // Affichez la phrase aléatoire
  alert(phraseAleatoire);
}

// Utiliser fetch pour charger le contenu de header.html
fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('headerContainer').innerHTML = data;
  });
