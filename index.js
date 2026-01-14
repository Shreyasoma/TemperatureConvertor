let input = document.getElementById('input');
let celsius = document.getElementById('celsius');
let fahrenheit = document.getElementById('fahrenheit');
let submit = document.getElementById('submit');
let res = document.getElementById('res');

submit.onclick = function () {
  if (input.value === '') {
    res.textContent = 'Please enter a temperature value!';
    return;
  }

  let temp = Number(input.value);

  if (celsius.checked) {
    let converted = (temp * 9) / 5 + 32;
    res.textContent = converted + 'F';
  } else if (fahrenheit.checked) {
    let converted = ((temp - 32) * 5) / 9;
    res.textContent = converted + 'C';
  } else {
    res.textContent = 'Please select a conversion type!';
  }
};
