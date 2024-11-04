/**
 * Obtiene los detalles de un producto.
 *
 * @param {Object} product - El objeto del producto.
 * @param {string} product.name - El nombre del producto.
 * @param {number} product.price - El precio del producto.
 * @param {string[]} product.tags - Un array de etiquetas relacionadas con el producto.
 * @returns {string} Una cadena de texto con los detalles del producto.
 */
function getProductDetails(product) {
    return `Producto: ${product.name}, Precio: $${product.price}, Etiquetas: ${product.tags.join(", ")}`;
}

// Ejemplo de uso
const product = {
    name: "Laptop",
    price: 1200,
    tags: ["tecnología", "portátil", "computadora"]
};

console.log(getProductDetails(product));
