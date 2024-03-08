// select do botão fullscreen
const fullscreen = document.querySelectorAll(".fullscreen");
// select do body
const body = document.querySelector("body");

// select de todos os botões fullscreen do documento
fullscreen.forEach((fullscreen) => {
  // evento de click nos botões
  fullscreen.addEventListener("click", () => {
    // select das divs pai de cada botão select (no caso são as telas)
    const screen = fullscreen.parentNode;

    if (screen.classList.contains("full")) {
      // caso a tela possua a classe "full" isso indica que a mesma ja se encontra no fullscreen então ocorre apenas a reversão
      screen.classList.remove("full");
      // esconde o scroll vertical do elemnto body
      body.classList.remove("over-hidden");
    } else {
      // caso a tela não possua a classe "full" indica que a mesma não se encontra no fullscreen e então o mesmo é aplicado
      screen.classList.add("full");
      // esconde o scroll vertical do elemnto body
      body.classList.add("over-hidden");
    }
  });
});
