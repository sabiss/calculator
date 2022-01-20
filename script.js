window.alert('Página ainda em construção! JavaScript ainda não inserido')
var numero_zero = document.querySelector("div.zero")
var numero_um = document.querySelector("div.um")
var numero_dois = document.querySelector("div.dois")
var numero_tres = document.querySelector("div.tres")
var numero_quatro = document.querySelector("div.quatro")
var numero_cinco = document.querySelector("div.cinco")
var numero_seis = document.querySelector("div.seis")
var numero_sete = document.querySelector("div.sete")
var numero_oito = document.querySelector("div.oito")
var numero_nove = document.querySelector("div.nove")

numero_zero.addEventListener("click", zero)
numero_um.addEventListener("click", um)
numero_dois.addEventListener("click", dois)
numero_tres.addEventListener("click", tres)
numero_quatro.addEventListener("click", quatro)
numero_cinco.addEventListener("click", cinco)
numero_seis.addEventListener("click", seis)
numero_sete.addEventListener("click", sete)
numero_oito.addEventListener("click", oito)
numero_nove.addEventListener("click", nove)

var numero = null
var visor = document.querySelector("div.calculadora-visor")

function verificar(digito, numero){
    if(numero == null){
        numero = digito
    }
    else{
        numero = numero + digito
    }
    return numero
}

function zero(){
    var mostrar_visor = verificar("0", numero)
    visor.innerHTML = mostrar_visor
    console.log(mostrar_visor)
}
function um(){
    let mostrar_visor = verificar("1", numero)
    visor.innerHTML = mostrar_visor
    console.log(numero)
}
function dois(){
    numero = "2"
    visor.innerHTML = numero
    console.log(numero)
}
function tres(){
    numero = "3"
    visor.innerHTML = numero
    console.log(numero)
}
function quatro(){
    numero = "4"
    visor.innerHTML = numero
    console.log(numero)
}
function cinco(){
    numero = "5"
    visor.innerHTML = numero
    console.log(numero)
}
function seis(){
    numero = "6"
    visor.innerHTML = numero
    console.log(numero)
}
function sete(){
    numero = "7"
    visor.innerHTML = numero
    console.log(numero)
}
function oito(){
    numero = "8"
    visor.innerHTML = numero
    console.log(numero)
}
function nove(){
    numero = "9"
    visor.innerHTML = numero
    console.log(numero)
}
console.log("oi")