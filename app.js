function calcImc() {
  let select = dataSelect()
  let values = dataReplace(select[0], select[1]);
  let valuesConvert = dataConvert(values[0], values[1]);

  let imc = (valuesConvert[0] / (valuesConvert[1] * valuesConvert[1])).toFixed(2);
  let imcReplace = imc.toString().replace(".", ",");

  select[2].innerHTML = imcReplace;

  clearInput();
}

function dataSelect() {
  let weight = document.querySelector('#bodyWeight').value;
  let height = document.querySelector('#bodyHeight').value;
  let spanResult = document.querySelector('#result');

  return [weight, height, spanResult];
}

function dataReplace(weight, height) {
  let weightReplace = weight.toString().replace(",", ".");
  let heightReplace = height.toString().replace(",", ".");

  return [weightReplace, heightReplace];
}

function dataConvert(weight, height) {
  let weightConvert = parseFloat(weight);
  let heightConvert = parseFloat(height);
  
  return [weightConvert, heightConvert];
}

function clearInput() {
  document.querySelector('#bodyWeight').value = '';
  document.querySelector('#bodyHeight').value = '';
}