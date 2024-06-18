
var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];


var botao = document.querySelector(".botao-enviar");
var formulario = document.querySelector(".formulario-admin");

botao.addEventListener("click", function(event){
    event.preventDefault();
    enviarFormulario();
    mostrarMensagens();
});

function enviarFormulario(){

    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var mensagemErro = document.getElementById("mensagemErro");

    mensagemErro.innerHTML = "";


    if(nome.value.length === 0 && email.value.length === 0 ){
        var divMensagem = document.createElement("div");
        divMensagem.style.backgroundColor = 'red';
        divMensagem.style.color = 'black';
        divMensagem.style.margin = '20px auto';
        divMensagem.style.height = '2rem';
        divMensagem.style.width = ' 20%';
        divMensagem.style.borderRadius = '20px';
        divMensagem.style.fontSize = '20px';
        divMensagem.style.textAlign = 'center';
        divMensagem.style.padding = '10px';
        const mensagem = document.createTextNode("É necessário informar o nome e o email");
        divMensagem.appendChild(mensagem);
        mensagemErro.appendChild(divMensagem);

    }else if(nome.value.length === 0) {

        var divMensagem = document.createElement("div");
        divMensagem.style.backgroundColor = 'red';
        divMensagem.style.color = 'black';
        divMensagem.style.margin = '20px auto';
        divMensagem.style.height = '2rem';
        divMensagem.style.width = ' 20%';
        divMensagem.style.borderRadius = '20px';
        divMensagem.style.fontSize = '20px';
        divMensagem.style.textAlign = 'center';
        divMensagem.style.padding = '10px';
        const mensagem = document.createTextNode("É necessário informar o nome ");
        divMensagem.appendChild(mensagem);
        mensagemErro.appendChild(divMensagem);

    }else if(email.value.length === 0 ){
        var divMensagem = document.createElement("div");
        divMensagem.style.backgroundColor = 'red';
        divMensagem.style.color = 'black';
        divMensagem.style.margin = '20px auto';
        divMensagem.style.height = '2rem';
        divMensagem.style.width = ' 20%';
        divMensagem.style.borderRadius = '20px';
        divMensagem.style.fontSize = '20px';
        divMensagem.style.textAlign = 'center';
        divMensagem.style.padding = '10px';
        const mensagem = document.createTextNode("É necessário informar o email ");
        divMensagem.appendChild(mensagem);
        mensagemErro.appendChild(divMensagem);
    }else{

        var id = usuarios.length + 1;
        var data = new Date();
        data = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`

        localStorage.setItem('nome',nome.value);
        localStorage.setItem('email',email.value);
        localStorage.setItem('id',id);
        localStorage.setItem('data',data);

        adicionar(id, nome.value, email.value, data);
        
        var divMensagem = document.createElement("div");
        divMensagem.style.backgroundColor = 'green';
        divMensagem.style.color = 'black';
        divMensagem.style.margin = '20px auto';
        divMensagem.style.height = '2rem';
        divMensagem.style.width = ' 20%';
        divMensagem.style.borderRadius = '20px';
        divMensagem.style.fontSize = '20px';
        divMensagem.style.textAlign = 'center';
        divMensagem.style.padding = '10px';
        const mensagem = document.createTextNode("Cadastro de dados realizado com sucesso!");
        divMensagem.appendChild(mensagem);
        mensagemErro.appendChild(divMensagem);

        
    }


}

function adicionar(id, nome, email,data) {

    //adicionar contato
    usuarios.push({id: id, nome: nome, email: email,data: data});
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

}

//mostrar dados no console
function mostrarMensagens() {
    console.log(usuarios);
}
