const cookieBox = document.querySelector(".wrapper");
const botoes = document.querySelectorAll(".botao");

const executarCodigos = () => {
  if (document.cookie.includes("codinglab")) return;

  cookieBox.classList.add("show");

  botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
      cookieBox.classList.remove("show");

      if (botao.id == "aceitarBtn") {
        document.cookie = "cookieBy=codinglab; max-age=" + 60; // Defina o tempo desejado para expirar o cookie (por exemplo, um ano)
      }
    });
  });
};

window.addEventListener("load", executarCodigos);
