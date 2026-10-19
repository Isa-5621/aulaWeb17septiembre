
const input = document.querySelector('input')
let values =['+','-','.','*','/','√']
input.focus()
function calculate(operation){
   document.querySelector('form').addEventListener('submit', (e) => {
   e.preventDefault();
   if(values.includes(operation) && values.includes(input.value.charAt(input.value.length - 1))){
      // Prevents to add a symbol twice through the buttons
         operation = undefined
         return 0;
   }
   document.querySelector('input').addEventListener('beforeinput', (e) => {

      if(values.includes(e.data) && values.includes(input.value.charAt(input.value.length - 1))){
         // Prevents to add a symbol twice through the input
         e.preventDefault()
      }
     if (isNaN(e.data) && !values.includes(e.data)) {
      e.preventDefault();
     }
   })

const num1 =  (document.getElementById('1').value)
const resulttxt = document.getElementById('result')
let result = 0

let start = input.selectionStart
let end = input.selectionEnd


if(operation === "openParen"){
   input.value = input.value.slice(0, start) + "()" + input.value.slice(end)
   input.setSelectionRange(start + 1, end + 1)
   input.focus()
   operation = undefined
}
if (!isNaN(operation) || isNaN(operation) && values.includes(operation)){
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
  // eqution must be declared at the end of the function
let equation = input.value.split("") 
console.log(equation.join(""))

if (operation === '=') {
   let parenth = 0
   for (let i=0; i < equation.length; i++){
      if (equation[i] === '('){
         parenth++
      } else if (equation[i] === ')'){
         parenth--
      }
      if (equation[i] === '√'){
         equation[i] = 'Math.sqrt('
      }
      if (i === equation.lenght  && parenth === 0){
         equation.push(')')
      }
   }
   console.log(equation.join(""))
   result = eval(equation.join(""))
}
resulttxt.innerHTML = result
})}
