/**
 * @module producto
 */


import { EUR } from '../utils/utils.js';

/**
 * @class Producto
 * Representa un producto en el juego, con atributos como nombre, precio, rareza, tipo, bonos e imagen.
 * Incluye métodos para mostrar la información del producto, sus bonos y aplicar descuentos.
 */
export class Producto {
    /** @property {string} nombre - El nombre del producto. */
    nombre;
    /** @property {number} precio - El precio del producto. */
    precio;
    /** @property {string} rareza - La rareza del producto (ej. 'comun', 'raro', 'epico'). */
    rareza;
    /** @property {string} tipo - El tipo del producto (ej. 'arma', 'armadura', 'accesorio'). */
    tipo;
    /** @property {Object} bonus - Objeto con los bonos del producto, como { ataque: number, defensa: number }. */
    bonus;
    /** @property {string} imagen - La ruta de la imagen del producto. */
    imagen;

    /**
     * Crea una nueva instancia de Producto.
     * 
     * @constructor
     * @param {string} nombre - El nombre del producto.
     * @param {number} precio - El precio del producto.
     * @param {string} rareza - La rareza del producto.
     * @param {string} tipo - El tipo del producto.
     * @param {Object} bonus - Los bonos del producto.
     * @param {string} imagen - La ruta de la imagen del producto.
     */
    constructor(nombre, precio, rareza, tipo, bonus, imagen) {
        this.nombre = nombre;
        this.precio = precio;
        this.rareza = rareza;
        this.tipo = tipo;
        this.bonus = bonus;
        this.imagen = imagen;
    }

    /**
     * Genera una representación en cadena del producto, incluyendo nombre, rareza, tipo, precio formateado, bonos e imagen.
     * 
     * @method mostrarProducto
     * @returns {string} Cadena con la información del producto.
     */
    mostrarProducto() {
        let cadenaBonus = '';
        for (const clave in this.bonus) {
            cadenaBonus += `${clave}+${this.bonus[clave]}, `;
        }
        cadenaBonus = cadenaBonus.slice(0, -2);

        return `${this.nombre} [${this.rareza}] (${this.tipo}) — ${EUR.format(this.precio)} — ${cadenaBonus} — ${this.imagen}`;
    }

    /**
     * Genera una representación en cadena de los bonos del producto.
     * 
     * @method mostrarBonus
     * @returns {string} Cadena con los bonos formateados.
     */
    mostrarBonus() {
        let cadenaBonus = '';
        for (const clave in this.bonus) {
            cadenaBonus += `${clave}+${this.bonus[clave]}, `;
        }
        cadenaBonus = cadenaBonus.slice(0, -2);

        return `${cadenaBonus}`;
    }

    /**
     * Aplica un descuento al precio del producto y retorna una nueva instancia con el precio actualizado.
     * 
     * @method aplicarDescuento
     * @param {number} porcentaje - El porcentaje de descuento a aplicar (entre 0 y 100).
     * @returns {Producto} Nueva instancia del producto con el precio descontado.
     */
    aplicarDescuento(porcentaje) {
        if (porcentaje < 0) porcentaje = 0;
        if (porcentaje > 100) porcentaje = 100;

        const precioNuevo = Math.round(this.precio * (1 - porcentaje / 100));

        return new Producto(this.nombre, precioNuevo, this.rareza, this.tipo, this.bonus, this.imagen);
    }
}