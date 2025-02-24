// Função de converter metro quadrado para metro cúbico

function converterMetroQuadradoParaCubico() {
  // pegar os valores dos inputs
  const a = parseFloat(document.getElementById('aInput').value);
  const b = parseFloat(document.getElementById('bInput').value);
  const c = parseFloat(document.getElementById('cInput').value);

  // Verificar se os valores são números válidos
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert('Por favor, insira valores válidos para a, b e c');
    return;
  }

  // Calcular o volume em metro cúbico
  const volumeCubico = a * b * c;

  // Exibir o resultado
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `O volume em metro cúbico é: ${volumeCubico} m³`;
}

// fazer calcular
const botaoConverter = document.getElementById('calcular');
botaoConverter.addEventListener('click', converterMetroQuadradoParaCubico);