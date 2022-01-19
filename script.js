window.alert('Página ainda em construção! JavaScript ainda não inserido')
var zero = document.querySelector("div.zero")
var um = document.querySelector("div.um")
var dois = document.querySelector("div.dois")
var tres = document.querySelector("div.tres")
var quatro = document.querySelector("div.quatro")
var cinco = document.querySelector("div.cinco")
var seis = document.querySelector("div.seis")
var sete = document.querySelector("div.sete")
var oito = document.querySelector("div.oito")
var nove = document.querySelector("div.nove")

zero.addEventListener("click", zero)
um.addEventListener("click", um)
dois.addEventListener("click", dois)
tres.addEventListener("click", tres)
quatro.addEventListener("click", quatro)
cinco.addEventListener("click", cinco)
seis.addEventListener("click", seis)
sete.addEventListener("click", sete)
oito.addEventListener("click", oito)
nove.addEventListener("click", nove)

var numero = null

function zero(){
    numero = "0"
    var visor = document.querySelector("div.calculadora-visor")
    visor.innerHtml = `${numero}`
    console.log(numero)
}
function um(){
    numero = "1"
}
function dois(){
    numero = "2"
}
function tres(){
    numero = "3"
}
function quatro(){
    numero = "4"
}
function cinco(){
    numero = "5"
}
function seis(){
    numero = "6"
}
function sete(){
    numero = "7"
}
function oito(){
    numero = "8"
}
function nove(){
    numero = "9"
}
console.log("oi")