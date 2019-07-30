var botaoAdicionarPaciente = document.querySelector("#adicionar-paciente")

botaoAdicionarPaciente.addEventListener("click",function(event){    
event.preventDefault();

    form = document.querySelector("#form-adiciona")
    var paciente = obtemPacienteDoFormulario(form);
    var erros = validaPaciente(paciente) 
    if(erros.length > 0){
        console.log(erros);
        
        exibeMensagemDeErro(erros);
        return
    }
    adicionarPacienteTabela(paciente)
    form.reset();
    var mensagemErro = document.querySelector("#menssagens-erro")
    mensagemErro.innerHTML = "";

});
function adicionarPacienteTabela(paciente){
    var tr = montaTr(paciente);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(tr);
}

function obtemPacienteDoFormulario(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}
function montaTr(paciente){
    var pacienteTr = document.createElement("tr")
    pacienteTr.classList.add("paciente")

    pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));    
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc,"info-Imc"));

    return pacienteTr;
}
function montaTd(dado, clase){
    var td = document.createElement("td")
    td.textContent = dado
    td.classList = clase
    return td
}
function validaPaciente(paciente){
    var erros = []
    if(!isPesoValido(paciente.peso) || paciente.peso.length == 0)erros.push("pesso inválido")
    if(paciente.nome.length == 0)erros.push("nome inválido")
    if(paciente.gordura.length == 0)erros.push("gordura inválida")
    if(!isAlturaValida(paciente.altura)||paciente.altura.length == 0)erros.push("altura inválida")
    
  
    return erros
    
    
}
function exibeMensagemDeErro(erros){
    var ul = document.querySelector("#menssagens-erro")
    ul.innerHTML = "";
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li)
    });
}