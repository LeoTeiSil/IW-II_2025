// Seleciona os elementos
const lampada = document.getElementById("lampada");
const btnLigar = document.getElementById("ligar");
const btnDesligar = document.getElementById("desligar");

const statusLampada = document.createElement("p");
document.body.appendChild(statusLampada);

// Funções para ligar e desligar a lâmpada
function ligarLampada() {
  if (!estaLigada()) {
    lampada.src = "img/lamp_ligada.jpg";
    lampada.alt = "Lâmpada Ligada";
    atualizarEstado("ligada");
  }
}

function desligarLampada() {
  if (estaLigada()) {
    lampada.src = "img/lamp_desligada.jpg";
    lampada.alt = "Lâmpada Desligada";
    atualizarEstado("desligada");
  }
}

function estaLigada() {
  return lampada.src.includes("lamp_ligada.jpg");
}

function atualizarEstado(estado) {
  statusLampada.innerText = `A lâmpada está ${estado}.`;
  btnLigar.disabled = estado === "ligada";
  btnDesligar.disabled = estado === "desligada";
}

// Adiciona os eventos aos botões
btnLigar.addEventListener("click", ligarLampada);
btnDesligar.addEventListener("click", desligarLampada);

lampada.addEventListener("mouseover", ligarLampada);
lampada.addEventListener("mouseout", desligarLampada);

atualizarEstado("desligada");