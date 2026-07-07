export async function obtenerProductos() {
    const respuesta = await fetch("./productos.json");
    return await respuesta.json();
}