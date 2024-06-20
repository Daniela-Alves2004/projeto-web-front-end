
var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];


var botao = document.querySelector(".botao-enviar");
var botaoPesquisa = document.querySelector(".botao-pesquisa");
var formulario = document.querySelector(".formulario-admin");

botao.addEventListener("click", function(event){
    event.preventDefault();
    enviarFormulario();
    mostrarLista();
   
});

botaoPesquisa.addEventListener("click", function(event){
    pesquisarCampo()
   
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
    mostrarLista();
}

function mostrarLista() {
    console.log(usuarios);

    var itemLista = document.querySelector(".mostrar-lista ul");

    itemLista.innerHTML = '';

    usuarios.forEach(function(usuarios) {
        var li = document.createElement("li");
        
        var idSpan = document.createElement("span");
        idSpan.textContent = `ID: ${usuarios.id}`;        

        var nomeSpan = document.createElement("span");
        nomeSpan.textContent = `Nome: ${usuarios.nome}`;
        nomeSpan.style.marginLeft = "30px"; 
        
        var emailSpan = document.createElement("span");
        emailSpan.textContent = `Email: ${usuarios.email}`;
        emailSpan.style.marginLeft = "30px"; 

        var dataSpan = document.createElement("span");
        dataSpan.textContent = `Data de envio: ${usuarios.data}`;
        dataSpan.style.marginLeft = "30px";

        li.appendChild(idSpan);
        li.appendChild(nomeSpan);
        li.appendChild(emailSpan);
        li.appendChild(dataSpan);
        itemLista.appendChild(li);
    });
}


function pesquisarCampo (){
    
    var buscaNome = document.getElementById("busca");

    var index = usuarios.findIndex(usuario => usuario.nome === buscaNome.value);
    
    if (index !== -1) {
        alert("Nome encontrado! " + usuarios[index].nome)
        
    } else {
        alert("Nome não encontrado!");
    }
}

function excluirTodos() {
    localStorage.clear();
    alert("Lista excluída com sucesso!");
    usuarios = [];
}


function excluirUm() {
    var idEcluir = prompt("Digite o id do usuário que deseja excluir");
    var id = parseInt(idEcluir);
    
    var index = usuarios.findIndex(usuario => usuario.id === id);
    
    if (index !== -1) {
        usuarios.splice(index, 1);
        localStorage.removeItem(id.toString());
        alert("Usuário excluído com sucesso!");
        mostrarLista();
    } else {
        alert("Usuário não encontrado!");
    }
}
function limparFormulario(){
    document.getElementById("formulario-admin").reset();
}
