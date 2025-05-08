const botao = document.querySelector("button");
const inputMin = document.querySelector(".input-min");
const inputMax = document.querySelector(".input-max");
const resultado = document.querySelector(".resultado");

botao.addEventListener("click", function () {
  const min = Number(inputMin.value);
  const max = Number(inputMax.value);

  resultado.classList.remove("mostrar");

  if (isNaN(min) || isNaN(max) || min > max) {
    resultado.textContent = "Por favor, insira valores válidos.";
    resultado.style.color = "red";
    resultado.classList.add("mostrar");
    return;
  }

  let intervalo;
  let tempo = 0;
  const duracao = 2000;

  intervalo = setInterval(() => {
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    resultado.textContent = "🎲 " + numeroAleatorio;
    resultado.style.color = "#555";
    resultado.classList.add("mostrar");
    tempo += 100;
  }, 100);

  setTimeout(() => {
    clearInterval(intervalo);
    const numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
    resultado.textContent = "Número sorteado: " + numeroSorteado;
    resultado.style.color = "green";
  }, duracao);
});
