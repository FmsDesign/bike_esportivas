//link menu

const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

//ativar itens do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);

  if (elemento) {
    elemento.checked = true;
  }
}
parametros.forEach(ativarProduto);

//perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");

  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

//alterar imagem

const galeria = document.querySelectorAll(".nimbus-img img");
const galeriaConatiner = document.querySelector(".nimbus-img");

function trocarImg(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 950px)").matches;

  if (media) {
    galeriaConatiner.prepend(img);
  }
}
function eventoClick(img) {
  img.addEventListener("click", trocarImg);
}

galeria.forEach(eventoClick);

// Plugin animação

if (window.SimpleAnime) {
  new SimpleAnime();
}
