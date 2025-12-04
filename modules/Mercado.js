/**
 * @module mercado
 */


import { Producto } from "./Producto.js";

/**
 * @constant {Producto[]} mercado - Array que representa el mercado de productos disponibles.
 * Contiene instancias de la clase Producto con diferentes atributos como nombre, precio, rareza, tipo, bonos e imagen.
 */
export const mercado = [
    new Producto('Espada Oxidada', 20, 'comun', 'arma', { ataque: 1, defensa: 5 }, 'espada_oxidada.jpg'),
    new Producto('Capa Rasgada', 50, 'comun', 'armadura', { ataque: 3, defensa: 2 }, 'capa_rasgada.jpg'),
    new Producto('Botas Gastadas', 130, 'raro', 'accesorio', { ataque: 4, defensa: 3 }, 'botas_gastadas.jpg'),
    new Producto('Daga Envenenada', 70, 'comun', 'arma', { ataque: 5, defensa: 4 }, 'daga_envenenada.jpg'),
    new Producto('Escudo Quebrado', 180, 'raro', 'armadura', { ataque: 5, defensa: 3 }, 'escudo_quebrado.png'),
    new Producto('Armadura Maldita', 250, 'epico', 'armadura', { ataque: 5, defensa: 5 }, 'armadura_maldita.jpg'),
    new Producto('Antorcha', 250, 'comun', 'armadura', { ataque: 2, defensa: 4 }, 'antorcha.jpg'),
    new Producto('Hacha de Godfrey', 250, 'comun', 'armadura', { ataque: 2, defensa: 4 }, 'hacha_godfrey.jpg'),
];

/**
 * Aplica un descuento a todos los artículos en el mercado que coincidan con una rareza específica.
 * 
 * @function aplicarDescuentoPorRareza
 * @param {string} rareza - La rareza de los artículos a los que se aplicará el descuento (ej. 'comun', 'raro', 'epico').
 * @param {number} porcentaje - El porcentaje de descuento a aplicar (ej. 10 para un 10% de descuento).
 * @returns {Producto[]} Un nuevo array con los artículos actualizados, donde solo los de la rareza especificada tienen el descuento aplicado.
 */
export function aplicarDescuentoPorRareza(rareza, porcentaje) {
    return mercado.map(articulo =>
        articulo.rareza === rareza ? articulo.aplicarDescuento(porcentaje) : articulo
    );
}

/**
 * Obtiene la descripción de un producto específico.
 * 
 * @function describirProducto
 * @param {Producto} articulo - La instancia del producto a describir.
 * @returns {string} La descripción del producto generada por el método mostrarProducto().
 */
export function describirProducto(articulo) {
    return articulo.mostrarProducto();
}

/**
 * Actualiza el inventario en la interfaz de usuario, insertando imágenes de los artículos en las casillas proporcionadas.
 * 
 * @function actualizarInventario
 * @param {HTMLElement[]} casillas - Array de elementos HTML (casillas) donde se insertarán las imágenes de los artículos.
 * @param {Producto[]} listaInventario - Array de productos en el inventario actual.
 * @returns {void} No retorna nada, modifica directamente el DOM.
 */
export function actualizarInventario(casillas, listaInventario) {
    casillas.forEach((casilla, indice) => {
        casilla.innerHTML = "";
        const articulo = listaInventario[indice];
        if (articulo) {
            const imagen = document.createElement("img");
            imagen.src = "imagenes/" + articulo.imagen;
            imagen.title = articulo.mostrarBonus();
            casilla.appendChild(imagen);
        }
    });
}