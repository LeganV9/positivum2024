const bouton = document.getElementById("mon-bouton");

bouton.addEventListener("click", function() {
  const elementLi = event.target.parentNode;
  const index = elementLi.parentNode.children.indexOf(elementLi);
  const phrase = elementLi.textContent;

  // Affichez la phrase sélectionnée
  alert(phrase);
  console.log(phrase);

  // Optionnel : afficher la phrase dynamiquement
  const elementTexte = document.getElementById("texte-selectionne");
  elementTexte.textContent = phrase;
});
