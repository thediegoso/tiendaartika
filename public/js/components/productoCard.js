export function crearProductoCard(producto) {
    return `
        <div class="producto-card">
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio.toLocaleString("es-CO")}</p>
            <button data-id="${producto.id}">
                Agregar al carrito
            </button>
        </div>
    `;
}