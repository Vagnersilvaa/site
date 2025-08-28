function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  // posição horizontal aleatória
  heart.style.left = Math.random() * 100 + "vw";
  // tamanho aleatório
  heart.style.fontSize = Math.random() * 20 + 15 + "px";

  document.body.appendChild(heart);

  // remover coração depois da animação
  setTimeout(() => {
    heart.remove();
  }, 6000);
}

// criar corações de tempo em tempo
setInterval(createHeart, 500);

