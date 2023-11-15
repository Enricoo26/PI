const cookieBox = document.querySelector(".wrapper"),
  botoes = document.querySelectorAll(".botao");

const executarCodigos = () => {
  if (document.cookie.includes("codinglab")) return;
  cookieBox.classList.add("show");

  botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
      cookieBox.classList.remove("show");

      if (botao.id == "aceitarBtn") {
        document.cookie = "cookieBy= codinglab; max-age=" + 60*60*24;
      }
    });
  });
};

window.addEventListener("load", executarCodigos);