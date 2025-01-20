const textElement = document.querySelector('.scrolling-text p');
const animationDuration = 5; // Em segundos

textElement.style.animationDuration = animationDuration + 's';

// Obtém os elementos HTML
const iconeMenu = document.getElementById("icone-menu");
const hotbar = document.getElementById("hotbar");

// Adiciona evento de clique ao ícone do menu
iconeMenu.addEventListener("click", () => {
    // Alterna a visibilidade da hotbar
    if (hotbar.style.display === "none" || hotbar.style.display === "") {
        hotbar.style.display = "block"; // Mostra a hotbar
    } else {
        hotbar.style.display = "none"; // Esconde a hotbar
    }
});

// Fechar a hotbar ao clicar fora dela
document.addEventListener("click", (event) => {
    if (!hotbar.contains(event.target) && event.target !== iconeMenu) {
        hotbar.style.display = "none"; // Esconde a hotbar
    }
});

