import {
    obtenerCarrito,
    eliminarDelCarrito,
    aumentarCantidad,
    disminuirCantidad
} from "../modules/carrito.js";

export function actualizarCarritoUI() {
    const carrito = obtenerCarrito();

    const contenedor = document.getElementById("carrito-items");
    const totalElemento = document.getElementById("carrito-total");

    if (carrito.length === 0) {
        contenedor.innerHTML = "<p>El carrito está vacío.</p>";
        totalElemento.textContent = "$0";
        return;
    }

    contenedor.innerHTML = carrito.map(producto => `
        <div class="item-carrito">
            <strong>${producto.nombre}</strong><br>

            <button class="btn-menos" data-id="${producto.id}">-</button>
            <span>${producto.cantidad}</span>
            <button class="btn-mas" data-id="${producto.id}">+</button>

            <button class="btn-eliminar" data-id="${producto.id}">🗑</button><br>

            Precio: $${(producto.precio * producto.cantidad).toLocaleString("es-CO")}
        </div>
    `).join("");

    const total = carrito.reduce((suma, producto) => {
        return suma + (producto.precio * producto.cantidad);
    }, 0);

    totalElemento.textContent = `$${total.toLocaleString("es-CO")}`;

    activarEventosCarrito();
}

/**
 * Eventos del carrito
 */
function activarEventosCarrito() {
    document.querySelectorAll(".btn-mas").forEach(btn => {
        btn.onclick = () => {
            const id = Number(btn.dataset.id);
            aumentarCantidad(id);
        };
    });

    document.querySelectorAll(".btn-menos").forEach(btn => {
        btn.onclick = () => {
            const id = Number(btn.dataset.id);
            disminuirCantidad(id);
        };
    });

    document.querySelectorAll(".btn-eliminar").forEach(btn => {
        btn.onclick = () => {
            const id = Number(btn.dataset.id);
            eliminarDelCarrito(id);
        };
    });
}