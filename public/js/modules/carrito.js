import { actualizarCarritoUI } from "../components/carritoUI.js";

// Carrito privado
const carrito = [];

/**
 * Agregar producto al carrito
 */
export function agregarAlCarrito(producto) {
    const productoExistente = carrito.find(item => item.id === producto.id);

    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        carrito.push({
            ...producto,
            cantidad: 1
        });
    }

    actualizarCarritoUI();

    console.clear();
    console.table(carrito);
}

/**
 * Obtener carrito
 */
export function obtenerCarrito() {
    return carrito;
}

/**
 * Eliminar producto
 */
export function eliminarDelCarrito(id) {
    const index = carrito.findIndex(item => item.id === id);

    if (index !== -1) {
        carrito.splice(index, 1);
    }

    actualizarCarritoUI();

    console.clear();
    console.table(carrito);
}

/**
 * Vaciar carrito
 */
export function vaciarCarrito() {
    carrito.length = 0;

    actualizarCarritoUI();

    console.clear();
    console.table(carrito);
}

/**
 * Aumentar cantidad
 */
export function aumentarCantidad(id) {
    const item = carrito.find(p => p.id === id);

    if (item) {
        item.cantidad++;
    }

    actualizarCarritoUI();
}

/**
 * Disminuir cantidad
 */
export function disminuirCantidad(id) {
    const item = carrito.find(p => p.id === id);

    if (!item) return;

    item.cantidad--;

    if (item.cantidad <= 0) {
        const index = carrito.indexOf(item);
        carrito.splice(index, 1);
    }

    actualizarCarritoUI();
}

/**
 * Genera el mensaje para WhatsApp
 */
export function generarMensajeWhatsApp() {

    if (carrito.length === 0) {
        return "Hola ARTIKA, quisiera información sobre sus productos.";
    }

    let mensaje = "❄️ Hola ARTIKA.\n\n";
    mensaje += "Quiero realizar el siguiente pedido:\n\n";

    carrito.forEach(producto => {
        mensaje += `• ${producto.nombre} x${producto.cantidad}\n`;
    });

    const total = carrito.reduce(
        (suma, producto) => suma + producto.precio * producto.cantidad,
        0
    );

    mensaje += `\n💲Total: $${total}\n\n`;
    mensaje += "Nombre:\n";
    mensaje += "Dirección:\n";
    mensaje += "Forma de pago:\n";

    return mensaje;
}