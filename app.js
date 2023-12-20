//lista entra como uma variavel
let listaDeNumerosSorteados = [] ;
let numeroLimite = 100;

//variaveis
let tentativa = 1;
let numeroAleatorio = gerarNumeroAleatorio();

//funções
function exibirTextoNaTela (tag, texto) {
  let campo = document.querySelector (tag);
  campo.innerHTML = texto;
}

function gerarNumeroAleatorio () {
  let numeroEscolido =  parseInt (Math.random () * numeroLimite + 1 );
  let quantidadeDeNumerosNaLista = listaDeNumerosSorteados.length;
  if (quantidadeDeNumerosNaLista == numeroLimite){
    listaDeNumerosSorteados = [];
  }
  if (listaDeNumerosSorteados.includes(numeroEscolido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolido);
    console.log (listaDeNumerosSorteados);
    return numeroEscolido;
  }
}

function limparCampo() {
  chute = document.querySelector ("input");
  chute.value = "";
}

function mensagemInicial() {
  exibirTextoNaTela("h1" , "Tente descobrir qual numero eu estou pensando");
  exibirTextoNaTela("p" , "digite um numero de 1 a 100");
}

function reiniciarJogo() {
  
  numeroAleatorio = gerarNumeroAleatorio();
  tentativa = 1;
  mensagemInicial();
  limparCampo();
  document.getElementById ("reiniciar").setAttribute("disabled",true);
}

//corpo------------------------------------------------------------------

mensagemInicial();

function verificarChute () {
  let chute = document.querySelector("input").value; 
  if (chute == numeroAleatorio) {
    let palavraTentativa = (tentativa > 1) ? "tentativas" : "tentativa";
    let mensagemTentativa = `Você descobriu o numero secreto com ${tentativa} ${palavraTentativa}`;
    exibirTextoNaTela ("h1" , mensagemTentativa);
    exibirTextoNaTela ("p", " ");
    
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else { if (chute > numeroAleatorio)
    {
    
      exibirTextoNaTela("p" , "O numero secreto é menor");
       
    } else {exibirTextoNaTela ("p" , "O numero secreto é maior.");}
  }
  tentativa ++;
  console.log (numeroAleatorio);
  limparCampo();
}
