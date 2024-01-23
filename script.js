// Alerte pour bienvenue sur page
alert("Hello! Welcome on Positivum, the first site where you chose your actual mood and get a positive quote to have a good day!");

// Utiliser fetch pour charger le contenu de header.html
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('headerContainer').innerHTML = data;
    });
