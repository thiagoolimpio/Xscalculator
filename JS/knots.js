const knotsInput = document.getElementById("knots");
const converterButton = document.getElementById("converter");
const resultadoElement = document.getElementById("resultado");

converterButton.addEventListener("click", (e) => {
  e.preventDefault(); // Adicione essa linha
  const knots = parseFloat(knotsInput.value);
  const kmh = knots * 1.852;
  resultadoElement.textContent = `${knots} knots é igual a ${kmh.toFixed(
    2
  )} km/h`;
});
