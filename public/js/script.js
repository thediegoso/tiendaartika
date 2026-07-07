import { obtenerProductos } from "./services/productosService.js";
import { mostrarProductos } from "./components/productos.js";
import { mostrarCategorias } from "./components/categorias.js";
import { iniciarBuscador } from "./modules/buscador.js";
import { actualizarCarritoUI } from "./components/carritoUI.js";
import { generarMensajeWhatsApp } from "./modules/carrito.js";

async function iniciarAplicacion() {

    const productos = await obtenerProductos();

    mostrarCategorias(productos);
    mostrarProductos(productos);
    iniciarBuscador(productos);

    actualizarCarritoUI();

    configurarBotonWhatsApp();
}

function configurarBotonWhatsApp() {
    const boton = document.getElementById("btn-pedido");

    if (!boton) return;

    boton.addEventListener("click", () => {

        const numero = "573113005765"; // cámbialo si quieres

        const mensaje = generarMensajeWhatsApp();

        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

        window.open(url, "_blank");
    });
}

iniciarAplicacion();