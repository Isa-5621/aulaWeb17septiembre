
const input = document.querySelector('input')
let values =['+','-','.','*','/','openParen']
input.focus()

function calculate(operation){
   document.querySelector('form').addEventListener('submit', (e) => {
   e.preventDefault();

   document.querySelector('input').addEventListener('beforeinput', (e) => {

      if(values.includes(e.data) && values.includes(input.value.charAt(input.value.length - 1))){
         e.preventDefault()
         console.log('includes')
      }
     if (isNaN(e.data) && !values.includes(e.data)) {
      e.preventDefault();
     }
   })

const num1 =  (document.getElementById('1').value)
const resulttxt = document.getElementById('result')
let result = 0
let equation = num1.split("")
let start = input.selectionStart
let end = input.selectionEnd


if(operation === "openParen"){
   input.value = input.value.slice(0, start) + "()" + input.value.slice(end)
   input.setSelectionRange(start + 1, end + 1)
   input.focus()
   operation = undefined
   console.log('paren')
}
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
else if (!isNaN(operation) || ['+','-','*','/'].includes(operation)){
  /* document.getElementById('1').value += operation*/
   input.value = input.value.slice(0, start) + operation + input.value.slice(end)
   input.setSelectionRange(start + 1, end + 1)
   input.focus()
   operation = undefined
}
else if(operation === '.'){
   document.getElementById('1').value += operation
   operation = undefined
}
 
else if (operation === '=') {
   result = eval(num1)
}
resulttxt.innerHTML = result
})}
