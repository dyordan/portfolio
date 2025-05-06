// footer.js
document.addEventListener("DOMContentLoaded", function() {
    fetch('footer.html')  // Carrega o arquivo footer.html
        .then(response => response.text())  // Converte a resposta para texto
        .then(data => {
            document.body.insertAdjacentHTML('beforeend', data);  // Insere o conteúdo do footer no final da página
        })
        .catch(error => console.error('Erro ao carregar o footer:', error));  // Trata qualquer erro na requisição
});
