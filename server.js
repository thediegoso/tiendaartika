const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3000;

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Página principal
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// API de productos
app.get("/api/productos", (req, res) => {
    const rutaProductos = path.join(__dirname, "data", "productos.json");

    fs.readFile(rutaProductos, "utf8", (error, datos) => {
        if (error) {
            return res.status(500).json({
                error: "No se pudieron cargar los productos."
            });
        }

        res.json(JSON.parse(datos));
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor iniciado`);
    console.log(`🌍 http://localhost:${PORT}`);
});