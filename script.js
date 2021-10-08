const buttonCalc = document.getElementById('calcular');

const name = document.getElementById('nome').value;
const weight = document.getElementById('peso').value;
const height = document.getElementById('altura').value;
const result = document.getElementById('resultado');

if (name != '' && weight != '' && height != '') {
  const imcValue = (weight / height ** 2).toFixed(1);

  let situation = '';

  if (imcValue < 18.5) {
    situation = 'Abaixo do peso';
  } else if (imcValue < 25) {
    situation = 'Peso ideal';
  } else if (imcValue < 30) {
    situation = 'Levemente acima do peso';
  } else if (imcValue < 35) {
    situation = 'Obesidade nível I';
  } else if (imcValue < 40) {
    situation = 'Obesidade nível II';
  } else {
    situation = 'Obesidade nível III';
  }
}
