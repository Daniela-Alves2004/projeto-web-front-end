function popup() {
    var caixa = document.createElement("div");
    var text = document.createTextNode("Você efetuou o cadastro com sucesso");
    caixa.appendChild(text);
    caixa.classList.add("success-message");

    caixa.style.backgroundColor = "green";
    caixa.style.color = "white";
    caixa.style.padding = "15px";
    caixa.style.margin = "30px 40%";
    caixa.style.borderRadius = "5px";

    document.body.appendChild(caixa);
    console.log("pop up exibido");

    setTimeout(function() {
        document.body.removeChild(caixa);
        console.log("console removido");
        window.location.href = "./logar.html";
    }, 1000);
}

function cadastrar() {
    var nome = document.getElementById('nome');
    var email = document.getElementById('email');
    var idade = document.getElementById('idade');
    var senha = document.getElementById('senha');
    var confsenha = document.getElementById('confsenha');

    if (nome.value.length === 0) {
        alert('Informe um nome');
    } else if (email.value.length === 0) {
        alert('Informe um email');
    } else if (idade.value.length === 0) {
        alert('Informe uma idade');
    } else if (senha.value.length === 0) {
        alert('Informe uma senha');
    } else if (senha.value !== confsenha.value) {
        alert("As senhas não estão iguais");
    } else if (nome.value.length === 0 && senha.value.length === 0) {
        alert('Informe um e-mail e uma senha');
    } else {
        localStorage.setItem('nome', nome.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('idade', idade.value);
        localStorage.setItem('senha', senha.value);
        localStorage.setItem('confsenha', confsenha.value);

        popup();
    }
}

function popupLogar() {
    var caixa = document.createElement("div");
    var text = document.createTextNode("Você efetuou o login com sucesso");
    caixa.appendChild(text);
    caixa.classList.add("success-message");

    caixa.style.backgroundColor = "green";
    caixa.style.color = "white";
    caixa.style.padding = "15px";
    caixa.style.margin = "30px 40%";
    caixa.style.borderRadius = "5px";

    document.body.appendChild(caixa);
    console.log("pop up exibido");

    setTimeout(function() {
        document.body.removeChild(caixa);
        console.log("pop up removido");
        window.location.href = "./index.html";
    }, 1000);
}

function logar() {
    var storedEmail = localStorage.getItem('email');
    var storedSenha = localStorage.getItem('senha');

    var userEmail = document.getElementById('emailUsuario');
    var userSenha = document.getElementById('senhaUsuario');

    if ( userEmail.value ==  storedEmail && userSenha.value ==  storedSenha) {
        popupLogar();
    } else {
        alert('Erro ao fazer login');
    }
}