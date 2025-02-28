const metrosInput = document.getElementById("metros");
const converterButton = document.getElementById("converter");
const resultadoElement = document.getElementById("resultado");

converterButton.addEventListener("click", (e) => {
  e.preventDefault();
  const metros = parseFloat(metrosInput.value);
  const pes = metros * 3.28084;
  resultadoElement.textContent = `${metros} metros é igual a ${pes.toFixed(
    2
  )} pés`;
});
