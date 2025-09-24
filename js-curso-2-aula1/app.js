<<<<<<< HEAD
=======
// let numeroSecreto = parseInt(Math.random() * 11)
// let tentativas = 1
// let chute

// alert('Boas vindas ao jogo do número secreto')

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

>>>>>>> 9d2922e7b57a4db457c94efa6fef1714074e2d18
let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    console.log(numeroSecreto);
    console.log('O botão foi clicado!');
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}