function calculer() {
  array = document.querySelector("input");
  for (I = 0; I < array.length; I++) {
    if (array[I].value.length == 0) array[I].value = 0;
    if (isNaN(array[I].value)) {
      alert(array[I].value + " Ce n'est pas un nombre !");
      break;
    }
  }

  if (I < array.length) return;
  TA =
    parseFloat(masseSalariale.value) *
    parseFloat(alsace.value);
    TA * 0.013;

  const totalTA = (resultatTA.innerText = TA.toFixed(0) + " €"); // Taxe apprentissage resultat
  console.log("totalTA : " + totalTA); // affichage total TA

  const totalSolde = (resultatSolde.innerText =
    ((parseInt(totalTA) * 13) / 100).toFixed(0) + " €");
  console.log("totalSolde : " + totalSolde); // Affichage total du solde (13%)

  const totalFinancement = (resultatFinancement.innerText =
    ((parseInt(totalTA) * 87) / 100).toFixed(0) + " €");
  console.log("totalFinancement : " + totalFinancement); // Affichage total du financement (87%)
}

const alsace = document.querySelector("#alsaceValue");

function changeValue() {
  // Checked for alsace value
  if (alsace.checked) {
    alsace.setAttribute("value", "0.0044");
    calculer();
    console.log("checked");
  } else {
    alsace.setAttribute("value", "0.0068");
    calculer();
    console.log("unchecked");
  }
}
