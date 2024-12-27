// js/loadContent.js

function loadHTML(selector, url) {
    // Selecciona el elemento donde se insertará el contenido
    const element = document.querySelector(selector);
    if (!element) {
        console.error(`Elemento con selector "${selector}" no encontrado.`);
        return;
    }

    // Realiza la petición para obtener el archivo HTML
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`No se pudo cargar el archivo: ${url}`);
            }
            return response.text();
        })
        .then((html) => {
            element.innerHTML = html;
        })
        .catch((error) => {
            console.error("Error cargando el archivo HTML:", error);
        });
}

// Llama a la función para cargar el menú en el selector deseado
document.addEventListener("DOMContentLoaded", () => {
    loadHTML("#menu", "/plantilles/nav.html");
});

document.addEventListener("DOMContentLoaded", () => {
    loadHTML("#footer", "/plantilles/footer.html");
});

document.addEventListener("DOMContentLoaded", () => {
    loadHTML("#headUniversal", "/plantilles/head.html");
});