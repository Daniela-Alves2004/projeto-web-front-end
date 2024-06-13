var usuarios = "";


function cadastrarDados(){

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

        let li = document.createElement("li");

        let nomeValue = document.getElementById("nome").value;
        let emailValue = document.getElementById("email").value;
        let nomeValueUpper = nomeValue.toUpperCase();
        let emailValueUpper = emailValue.toUpperCase();

        let c1 = document.createTextNode(nomeValueUpper);
        let c2 = document.createTextNode(emailValueUpper);


        li.appendChild(c1);
        li.appendChild(c2);

        let itemLista = document.getElementById("itemLista");

        itemLista.appendChild(li);

        localStorage.setItem('nome',nome.value);
        localStorage.setItem('email',email.value);

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


function mostrarLista (){

    var lista = document.getElementById('lista');

    lista.innerHTML = '';

    var elementos = document.createElement('div');

    elementos.style.color = 'black';
    
    var nomeValor = localStorage.getItem(nome);
    var emailValor = localStorage.getItem(email);

    elementos.appendChild(nomeValor);
    elementos.appendChild(emailValor);
    lista.appendChild(elementos);


}