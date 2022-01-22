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

function verificar(digito, numero){//verificar se já tem um algoritmo em NUMERO para concatenar ou não
    if(numero == null){
        numero = digito
    }
    else{
        numero = numero + digito
    }
    return numero
}

function zero(){
    let mostrar_visor = verificar("0", numero)
    numero = mostrar_visor
    visor.innerHTML = mostrar_visor
    console.log(mostrar_visor)
}
function um(){
    let mostrar_visor = verificar("1", numero)
    numero = mostrar_visor
    visor.innerHTML = mostrar_visor
    console.log(mostrar_visor)
}
function dois(){
    let mostrar_visor = verificar("2", numero)
    numero = mostrar_visor
    visor.innerHTML = mostrar_visor
    console.log(mostrar_visor)
}
function tres(){
    let mostrar_visor = verificar("3", numero)
    numero = mostrar_visor
    visor.innerHTML = mostrar_visor
    console.log(mostrar_visor)
}
function quatro(){
    let mostrar_visor = verificar("4", numero)
    numero = mostrar_visor
    visor.innerHTML = mostrar_visor
    console.log(mostrar_visor)
}
function cinco(){
    let mostrar_visor = verificar("5", numero)
    numero = mostrar_visor
    visor.innerHTML = mostrar_visor
    console.log(mostrar_visor)
}
function seis(){
    let mostrar_visor = verificar("6", numero)
    numero = mostrar_visor
    visor.innerHTML = mostrar_visor
    console.log(mostrar_visor)
}
function sete(){
    let mostrar_visor = verificar("7", numero)
    numero = mostrar_visor
    visor.innerHTML = mostrar_visor
    console.log(mostrar_visor)
}
function oito(){
    let mostrar_visor = verificar("8", numero)
    numero = mostrar_visor
    visor.innerHTML = mostrar_visor
    console.log(mostrar_visor)
}
function nove(){
    let mostrar_visor = verificar("9", numero)
    numero = mostrar_visor
    visor.innerHTML = mostrar_visor
    console.log(mostrar_visor)
}
console.log("oi")