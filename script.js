function calculer() {

  array = document.querySelector("#masseSalariale");
  for (I = 0; I < array.length; I++) {
    if (array[I].value.length == 0) array[I].value = 0;
  }

  if (I < array.length) return;
  TA = parseFloat(masseSalariale.value) * parseFloat(alsace.value);
  TA * 0.013;

  const totalTA = (resultatTA.innerText = TA.toFixed(0) + " €"); // Taxe apprentissage resultat
  // console.log("totalTA : " + totalTA); // affichage total TA

  const totalSolde = (resultatSolde.innerText =
    ((parseInt(totalTA) * 13) / 100).toFixed(0) + " €"); // Solde resultat
  // console.log("totalSolde : " + totalSolde); // Affichage total du solde (13%)

  const totalFinancement = (resultatFinancement.innerText =
    ((parseInt(totalTA) * 87) / 100).toFixed(0) + " €"); // total financement resultat
    if (isNaN(!resultatFinancement.textContent) ) {
      resultatFinancement.textContent = '0 €'
    } 
      // return resultatFinancement.innerText = '0 €'
      console.log(" TEXTCONTENT " + resultatFinancement.textContent)
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

function mykeyUp() {
  document.querySelector("#masseSalariale");
  // instantCalcul()
  calculer();
}