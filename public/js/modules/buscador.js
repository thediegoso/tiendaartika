import { mostrarProductos } from "../components/productos.js";

export function iniciarBuscador(productos) {

    const inputBuscar = document.getElementById("buscar");

    inputBuscar.addEventListener("input", () => {

        const texto = inputBuscar.value.toLowerCase().trim();

        const resultados = productos.filter(producto =>

            producto.nombre.toLowerCase().includes(texto) ||

            producto.descripcion.toLowerCase().includes(texto)

        );

        mostrarProductos(resultados);

    });

}