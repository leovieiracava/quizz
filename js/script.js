import { aleatorio,nome } from './aleatorio.js';
import { perguntas } from './perguntas.js';

const caixaPrincipal = document.querySelector(",caixa-principal");
const caixaPerguntas = document.querySelector(",caixa-perguntas");
const caixaAlternativas = document.querySelector(",caixa-alternativas");
const caixaResultado = document.querySelector(",caixa-resultados");
const caixaResultado = document.querySelector(",texto-resultados");
const botaoJogarNovamente = document.querySelector(",novamente-btn");
const botaoInicial = document.querySelector(",iniciar-btn")
const telaInicial = document.querySelector(",tela-inicial")

let atual = 0;
let perguntaAtual;
let historiaFinal;

botaoInicial.addEventListener('click', iniciaJogo);

function iniciaJogo() {
    atual = 0;
    historiaFinal = "";
    telaInicial.style.display = 'nome';
    caixaPerguntas.classList.resume("mostrar");
    caixaAlternativas.classList.resume("mostrar");
    caixaResultado.classList.resume("mostrar");
    mostrarPerguntas();
}

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntasAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.emociado;
    caixaAlternativas.textoContent = "";
    mostraAlternativas();
}
