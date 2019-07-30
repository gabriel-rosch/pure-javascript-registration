
var titulo = document.querySelector(".titulo");
titulo.textContent = "GabrielRossh";

var pacientes = document.querySelectorAll(".paciente"); //Retorna todos pacientes

for (var i = 0; i < pacientes.length; i++) {
    
    var paciente = pacientes[i]

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var tdImc = paciente.querySelector(".info-imc");

    
    var dadosValidos = true;

    if (!isPesoValido(peso)) {
        console.log("peso Invalido!")
        dadosValidos = false
        paciente.classList.add("paciente-invalido") 
    }
    if (!isAlturaValida(altura)) {
        console.log("Altura invalida!")
        dadosValidos = false
        paciente.classList.add("paciente-invalido") 
    } 
    if (dadosValidos) {
        tdImc.textContent = calculaImc(peso,altura) //ToFixed, casas decimais
    } else {
        tdImc.textContent = "Peso Inválido!" 
    }
}
function calculaImc(peso,altura){
    var imc = 0;
    imc = peso /(altura * altura);
    return imc.toFixed(2);
}
function isPesoValido(peso){
    if(peso > 0 && peso < 1000  ){
        return true;
    }else{
        return false;
    }
}
function isAlturaValida(altura){
    if(altura > 0 && altura < 3.0){
        return true;
    }else{
        return false;
    }
}

