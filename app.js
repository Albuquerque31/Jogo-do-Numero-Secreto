/* let titulo = document.querySelector('h1');// criar variavel para alter titulo e colocar nome da tag 'h1'
titulo.innerHTML = 'Jogo do número secreto'; //

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número ente 1 e 10'; */

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;



function exibirTextoNaTela(tag , texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak (texto, 'Brazilian Portuguese Female',{reate:1.2});
}

function exibirFraseIncial () {
    exibirTextoNaTela('h1' , 'Jogo do número secreto');
    exibirTextoNaTela('p' , 'Escolha um número ente 1 e 10');
}

exibirFraseIncial();

function verificarChute() {     // Mas o que é uma função? Independente da linguagem de programação, sempre que pensamos em uma função, pensamos em um trecho de código que executa uma ação ou tem alguma responsabilidade.
    let chute = document.querySelector('input').value;// para pegar o valor de um campo de de input temos que usar .value do paramentro.
    console.log(numeroSecreto == chute);
    let palavraTentativas = tentativas > 1? 'tentaivas':'tentativa';
    let mensagemTentativas = `Laura, você é incrivel, acertou o numero com ${tentativas} ${palavraTentativas} !!!!`;
    document.getElementById('reiniciar').removeAttribute('disabled');

        if (numeroSecreto == chute) {
        exibirTextoNaTela('h1' , 'Acertou, Parabéns!!!');
        exibirTextoNaTela('p' , mensagemTentativas);
    } else {
        if (numeroSecreto > chute) {
            exibirTextoNaTela('h1' , 'Errou, Tente mais uma vez!!!');
            exibirTextoNaTela('p' , 'Laura, O numero secreto é maior!!!!');
            
        } else {
            exibirTextoNaTela('h1' , 'Errou, Tente mais uma vez!!!');
            exibirTextoNaTela('p' , 'Laura, O numero secreto é menor!!!!');
            
        }

        tentativas++
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random () * numeroLimite + 1);//Ao gerar o número aleatório, queremos que a função nos retorne esse número que terá valor entre 1 e 10. Para garantir esse comportamento, precisamos informar que queremos este retorno utilizando a palavra reservada return na linha 16, antes de toda a expressão matemática.
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados =[];
    }
     if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
     } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
     }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = ''; 
}



function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    document.querySelector('input').value;
    console.log('Jogo reiniciado. Novo número secreto gerado.');
    exibirFraseIncial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

