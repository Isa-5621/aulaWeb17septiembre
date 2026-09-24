
function calculate(operation){
   document.querySelector('form').addEventListener('submit', function(e) {
      e.preventDefault();

const num1 = Number (document.getElementById('1').value)
const num2 = Number ( document.getElementById('2').value)
const resulttxt = document.getElementById('result')
let result = 0

if (operation === 'somar'){
   result = num1 + num2
}
 else if (operation === 'restar'){
   result = num1 - num2
}
 else if (operation === 'multiplicar'){
   result = num1 * num2
}
 else if (operation === 'dividir'){
   result = num1 / num2
}
   resulttxt.innerHTML = result
})
}

 ///////// Calculador 2.0

 /* else if (!isNaN(operation)){
  document.getElementById('1').value += operation
  operation = undefined
  console.log(operation) */
