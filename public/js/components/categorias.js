import { mostrarProductos } from "./productos.js";

export function mostrarCategorias(productos) {
    const contenedor = document.getElementById("categorias");

    const categorias = [...new Set(productos.map(producto => producto.categoria))];
    categorias.unshift("Todos");

    contenedor.innerHTML = categorias
        .map(categoria => `
            <button class="btn-categoria" data-categoria="${categoria}">
                ${categoria}
            </button>
        `)
        .join("");

    // Agregar eventos a los botones
    const botones = contenedor.querySelectorAll(".btn-categoria");

    botones.forEach(boton => {
        boton.addEventListener("click", () => {

            const categoria = boton.dataset.categoria;

            if (categoria === "Todos") {
                mostrarProductos(productos);
            } else {
                const filtrados = productos.filter(
                    producto => producto.categoria === categoria
                );

                mostrarProductos(filtrados);
            }

        });
    });
}