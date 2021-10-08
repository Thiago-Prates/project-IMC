const calculate = document.getElementById('calcular');

function calculateImc() {
  const name = document.getElementById('nome').value;
  const height = document.getElementById('altura').value;
  const weight = document.getElementById('peso').value;
  const result = document.getElementById('resultado');

  if (name !== '' && height !== '' && weight !== '') {
    const imc = (weight / height ** 2).toFixed(2);

    let classification = '';

    if (imc < 18.5) {
      classification = 'abaixo do peso.';
    } else if (imc < 25) {
      classification = 'com o peso ideal.';
    } else if (imc < 30) {
      classification = 'levemente acima do peso.';
    } else if (imc < 35) {
      classification = 'com obesidade grau I.';
    } else if (imc < 40) {
      classification = 'com obesidade grau II.';
    } else {
      classification = 'com obesidade grau III.';
    }

    result.textContent = `Olá, ${name}! Você está com ${weight}kg e ${height}m, seu IMC é ${imc}. Atualmente, você está ${classification}`;
  } else {
    result.textContent = 'Para calcular o seu IMC , preencha todos os campos.';
  }
}

calculate.addEventListener('click', calculateImc);
