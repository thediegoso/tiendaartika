import { crearProductoCard } from "./productoCard.js";
import { agregarAlCarrito } from "../modules/carrito.js";

export function mostrarProductos(productos) {
    const contenedor = document.getElementById("productos");

    contenedor.innerHTML = productos
        .map(producto => crearProductoCard(producto))
        .join("");

    contenedor.onclick = (e) => {
        const boton = e.target.closest("button");

        if (!boton) return;

        const id = Number(boton.dataset.id);

        const producto = productos.find(p => p.id === id);

        if (!producto) return;

        agregarAlCarrito(producto);
    };
}