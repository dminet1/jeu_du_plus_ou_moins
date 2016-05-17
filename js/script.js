var proposition = document.getElementById("proposition");
var boutonGo = document.getElementById("boutonGo");
var resultat = document.getElementById("resultat");
var boutonReset = document.getElementById("boutonReset");
var reponse = Math.ceil(Math.random() * 100)

function verifier() {
    if (proposition.value < reponse) {
        resultat.innerHTML = "Insuffisant !";
    }
    if (proposition.value == reponse) {
        resultat.innerHTML = "Juste ce qu'il faut";
    }
    if (proposition.value > reponse) {
        resultat.innerHTML = "Trop !";
    }
}

function reset() {
  //proposition.value = 0;
  //resultat.innerHTML = "Appuyer sur Go pour voir le résultat";
  document.location.reload("true");
}

//boutonGo.onclick = verifier;
//boutonReset.onclick = reset;
