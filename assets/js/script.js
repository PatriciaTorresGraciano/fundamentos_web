let nome =window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let mensagem = document.querySelector("#mensagem")
let nomeOk = false
let emailOk = false
let assuntoOk  = false
let mensagemOk = false
let mapa = document.querySelector("#mapa")

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length <3 ) {
       txtNome.innerHTML = "Nome Inválido"
       txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = "green"
        nomeOk = true
    }
}

function validaEmail () {
    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf("@") == -1 || email.value.indexOf(".com") ==-1) {
        txtEmail.innerHTML = "E-mail iválido"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")

    if (assunto.value.length >= 15) {
        txtAssunto.innerHTML = "Texto muito grande, digite no máximo 15 caracteres"
        txtAssunto.style.color = "red"
    } else {
        txtAssunto.innerHTML = "Assunto válido"
        txtAssunto.style.color = "green"
        assuntoOk = true
    }
}

function validaMensagem() {
    let txtMsg = document.querySelector("#txtMsg")

    if (mensagem.value.length >= 100) {
        txtMsg.innerHTML = "Mensagem muito grande, digite no máximo 100 caracteres"
        txtMsg.style.color = "red"
    } else {
        txtMsg.innerHTML = "Mensagem válida"
        txtMsg.style.color = "green"
        mensagemOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true && mensagemOk == true) {
        alert ("Formulário enviado com sucesso!")
    }else {
        alert("Preencha o formulário corretamente antes de enviar...")
    }
}

function mapaZoom() {
    mapa.style.width = "600px"
    mapa.style.height = "400px"
}

function mapaNormal() {
    mapa.style.width = "400px"
    mapa.style.height = "250px"
}