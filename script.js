function afficherPhraseAleatoireBad() {
  const nombreAleatoireBad = Math.floor(Math.random() * listePhrasesBad.length);
  const phraseAleatoireBad = listePhrasesBad[nombreAleatoireBad];
      // Return the generated phrase
        return phraseAleatoireBad;
        }



function afficherPhraseAleatoireNeutral() {
  const nombreAleatoireNeutral = Math.floor(Math.random() * listePhrasesNeutral.length);
  const phraseAleatoireNeutral = listePhrasesNeutral[nombreAleatoireNeutral];
      // Return the generated phrase
        return phraseAleatoireNeutral;
        }



function afficherPhraseAleatoirePositive() {
  const nombreAleatoirePositive = Math.floor(Math.random() * listePhrasesPositive.length);
  const phraseAleatoirePositive = listePhrasesPositive[nombreAleatoirePositive];
      // Return the generated phrase
        return phraseAleatoirePositive;
        }



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

const listePhrasesPositive = [
  "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "Success is having what you want. Happiness is wanting what you have. - W. P. Kinsella",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "Don't wait for the perfect conditions to start. Start now with what you have. - Napoleon Hill",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "If you want to succeed, learn to be alone with your thoughts. - Robin Sharma",
  "The secret of happiness, you will find, is to accept yourself. - Maxwell Maltz",
  "Life is made of fleeting opportunities seized by bold minds. - Unknown",
  "Success is the key to happiness. If you love what you are doing, you will be successful. - Albert Schweitzer"
];


// Utiliser fetch pour charger le contenu de header.html
fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('headerContainer').innerHTML = data;
  });


function afficherCitation(phrase) {
  // Cacher le texte descriptif
  document.querySelector('.bodytext').classList.add('hidden');
  // Remplacer le contenu de la citation
  document.getElementById('phrase').innerHTML = phrase;
  // Afficher la citation
  document.getElementById('phrase').classList.remove('hidden');
  };

