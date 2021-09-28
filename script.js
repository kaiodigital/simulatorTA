function calculer() {
  array = document.querySelector("input");
  for (I = 0; I < array.length; I++) {
    if (array[I].value.length == 0) array[I].value = 0;
    if (isNaN(array[I].value)) {
      alert(array[I].value + " n'est pas numérique !");
      break;
    }
  }

  if (I < array.length) return;
  TA =
    parseFloat(masseSalariale.value) *
    parseFloat(alsace.value) * // add variable pocur Alsace))
    0.13;

  const totalTA = resultatTA.innerText = TA.toFixed(2) + " €"; // Taxe apprentissage resultat
  console.log('totalTA : ' + totalTA); // affichage total TA

  const totalSolde = resultatSolde.innerText = ((parseInt(totalTA) * 13) / 100).toFixed(2) + " €";
  console.log('totalSolde : ' + totalSolde); // Affichage total du solde (13%)

  const totalFinancement = resultatFinancement.innerText = ((parseInt(totalTA) * 87) / 100).toFixed(2) + " €";
  console.log('totalFinancement : ' + totalFinancement); // Affichage total du financement (87%)

}

const alsace = document.querySelector("#alsaceValue");

function changeValue() {
  if (alsace.checked) {
    alsace.setAttribute("value", "0.44");
    console.log("checked");
  } else {
    alsace.setAttribute("value", "0.68");
    console.log("unchecked");
  }
}
