/**
 * @module jugador
 */


/**
 * @class Jugador
 * Representa un jugador en el juego, gestionando su nombre, puntos, inventario, salud máxima y salud actual.
 * Incluye métodos para añadir productos, calcular daño y defensa total, y mostrar la información del jugador.
 */
export class Jugador {
    /** @property {string} nombre - El nombre del jugador. */
    nombre;
    /** @property {number} puntos - Los puntos de gracia acumulados por el jugador. */
    puntos;
    /** @property {Producto[]} inventario - Array de productos en el inventario del jugador. */
    inventario;
    /** @property {number} saludMax - La salud máxima del jugador. */
    saludMax;
    /** @property {number} salud - La salud actual del jugador. */
    salud;

    /**
     * Crea una nueva instancia de Jugador.
     * 
     * @constructor
     * @param {string} nombre - El nombre del jugador.
     */
    constructor(nombre) {
        this.nombre = nombre;
        this.puntos = 0;
        this.inventario = [];
        this.saludMax = 500;
        this.salud = this.saludMax;
    }

    /**
     * Añade un producto al inventario del jugador, clonando el artículo para evitar referencias compartidas.
     * 
     * @method añadirProducto
     * @param {Producto} articulo - El artículo a añadir al inventario.
     * @returns {void}
     */
    añadirProducto(articulo) {
        this.inventario.push(structuredClone(articulo));
    }

    /**
     * Calcula el daño total sumando los bonos de ataque de todos los artículos en el inventario.
     * 
     * @getter
     * @returns {number} El daño total calculado.
     */
    get danoTotal() {
        let total = 0;
        this.inventario.forEach(articulo => {
            if (articulo.bonus.ataque > 0) {
                total += articulo.bonus.ataque;
            }
        });
        return total;
    }

    /**
     * Calcula la defensa total sumando los bonos de defensa de todos los artículos en el inventario.
     * 
     * @getter
     * @returns {number} La defensa total calculada.
     */
    get defensaTotal() {
        let total = 0;
        this.inventario.forEach(articulo => {
            if (articulo.bonus.defensa > 0) {
                total += articulo.bonus.defensa;
            }
        });
        return total;
    }

    /**
     * Genera una representación HTML de la información del jugador, incluyendo nombre, vida, puntos, poder de ataque, defensa e inventario.
     * 
     * @method mostrarJugador
     * @returns {string} Cadena HTML con la información del jugador.
     */
    mostrarJugador() {
        return `
        ✧ <strong>Nombre:</strong> ${this.nombre}<br>
        ❂ <strong>Vida:</strong> ${this.salud}/${this.saludMax}<br>
        ✦ <strong>Puntos de Gracia:</strong> ${this.puntos}<br>
        ⚔ <strong>Poder de Ataque:</strong> ${this.danoTotal}<br>
        ⛨ <strong>Defensa Total:</strong> ${this.defensaTotal}<br>
        ☉ <strong>Inventario:</strong> ${
            this.inventario.length > 0
            ? this.inventario.map(item => item.nombre).join(', ')
            : 'Vacío'
        }
        `;
    }

}