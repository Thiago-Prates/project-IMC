const calculate = document.getElementById('calcular');

function calculateImc() {
  const name = document.getElementById('nome').value;
  const height = document.getElementById('altura').value;
  const weight = document.getElementById('peso').value;
  const result = document.getElementById('resultado');
  const resultName = document.getElementById('resultName');
  const resultText = document.getElementById('resultText');

  if (name !== '' && height !== '' && weight !== '') {
    const imc = (weight / height ** 2).toFixed(2);
    const minWeight = (18.5 * height ** 2).toFixed(2);
    const maxWeight = (25 * height ** 2).toFixed(2);

    let classification;

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

    resultName.textContent = `Olá, ${name}!`;
    resultText.textContent = `Você está com ${weight}kg e ${height}m, seu  IMC é ${imc}.
                              Atualmente, você está ${classification}`;
    resultIdealWeigth.textContent = `Procure manter seu peso entre ${minWeight}kg e ${maxWeight}kg`;
  } else {
    // Caso o usuario não preencha os input's limpar o resultName e resultText e no result informar o problema
    result.textContent = 'Para calcular o seu IMC , preencha todos os campos.';

    resultName.textContent = '';
    resultText.textContent = '';
  }
}

calculate.addEventListener('click', calculateImc);
