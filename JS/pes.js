const pesInput = document.getElementById("pes");
const converterButton = document.getElementById("converter");
const resultadoElement = document.getElementById("resultado");

converterButton.addEventListener("click", (e) => {
  const pes = parseFloat(pesInput.value);
  const metros = pes / 3.28084;
  resultadoElement.textContent = `${pes} pés é igual a ${metros.toFixed(
    2
  )} metros`;
});
