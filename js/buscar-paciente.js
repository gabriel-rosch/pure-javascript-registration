var botao = document.querySelector("#buscar-pacientes")

botao.addEventListener("click", function () {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");
    //evento executa após carregamento dados
    xhr.addEventListener("load", function () {
        if (xhr.status == 200) {
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            pacientes.forEach(paciente => {
                adicionarPacienteTabela(paciente);
            });
        }else{
            console.assert(xhr.responseText)
        }
    })
    xhr.send();
})