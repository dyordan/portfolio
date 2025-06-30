// Aguarda o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", function () {
  const element = document.getElementById("typed-title"); // Seleciona o <h1> pelo ID

  // Verifica se o elemento existe
  if (!element) return;

  const text = "Portfólio"; // Texto a ser digitado
  let index = 0; // Posição da letra atual

  // Função recursiva que adiciona uma letra por vez
  function type() {
    if (index < text.length) {
      element.textContent += text.charAt(index); // Adiciona a próxima letra
      element.classList.add("typing"); // Adiciona o cursor piscante
      index++;
      setTimeout(type, 150); // Tempo entre letras
    } else {
      element.classList.remove("typing"); // Remove o cursor ao finalizar
    }
  }

  type(); // Inicia a digitação
});
