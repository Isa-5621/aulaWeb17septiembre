const obj ={
    name: "John",
    age: 25,
    eyeColor: "blue",
    gender: "male",
    info: function(){
        return this.name + " is " + this.age + "years old"
    }
}
console.log(obj.name)
obj.name = "mary"
obj.gender = "female"
console.log(obj)

function display (a,b){
    return a + ' is ' + b 
}

console.log(display(obj.name, obj.age))
console.log(obj.info())
let condition = obj.age >18
console.log(condition)




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
   console.log(result)
}
 )}