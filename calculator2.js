
function calculate(operation){
   document.querySelector('form').addEventListener('submit', function(e) {
      e.preventDefault();
   document.querySelector('input').addEventListener('beforeinput', (e) => {
      const valid = ['/', '?']
     if (isNaN(e.data) && !['+', '-', '.'].includes(e.data)) {
      e.preventDefault();
     }
   })

const num1 =  (document.getElementById('1').value)
const num2 = Number ( document.getElementById('2').value)
const resulttxt = document.getElementById('result')
let result = 0
let values 

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
else if (!isNaN(operation)){
   document.getElementById('1').value += operation
   operation = undefined
}
else if(operation === '.'){
   document.getElementById('1').value += operation
   operation = undefined
}

resulttxt.innerHTML = result
})}

 ///////// Calculador 2.0


 