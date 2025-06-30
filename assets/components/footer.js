document.addEventListener("DOMContentLoaded", function () {
  fetch("assets/components/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.body.insertAdjacentHTML("beforeend", data);

      const yearSpan = document.getElementById("footer-year");
      if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
      }
    })
    .catch((error) => console.error("Erro ao carregar o footer:", error));
});
