const imagem = document.getElementById("imagemPrincipal");

document.getElementById("btn1").addEventListener("click", () => {
  imagem.src = "imagens/html.jpg";
});
document.getElementById("btn2").addEventListener("click", () => {
  imagem.src = "imagens/css.png";
});
document.getElementById("btn3").addEventListener("click", () => {
  imagem.src = "imagens/js.png";
});
