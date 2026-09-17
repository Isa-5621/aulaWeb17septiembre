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

/// SOMA ///

function somar(){

const numero1 = Number (document.getElementById('1').value)
const numero2 = Number ( document.getElementById('2').value)
const resulttxt = document.getElementById('result')

   const c = numero1 + numero2
   resulttxt.innerHTML = c
}
  ///RESTA///

function restar(){

const numero1 = Number (document.getElementById('1').value)
const numero2 = Number ( document.getElementById('2').value)
const resulttxt = document.getElementById('result')

   const c = numero1 - numero2
   resulttxt.innerHTML = c
}

   /// MULTIPLICAR ///

function multiplicar(){

const numero1 = Number (document.getElementById('1').value)
const numero2 = Number ( document.getElementById('2').value)
const resulttxt = document.getElementById('result')

   const c = numero1 * numero2
   resulttxt.innerHTML = c
}

   /// DIVIDIR ///

function dividir(){

const numero1 = Number (document.getElementById('1').value)
const numero2 = Number ( document.getElementById('2').value)
const resulttxt = document.getElementById('result')

   const c = numero1 / numero2
   resulttxt.innerHTML = c
}


