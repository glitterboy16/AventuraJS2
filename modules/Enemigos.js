/**
 * @module enemigos
 */


/**
 * @class Enemigo
 * Representa un enemigo en el juego, gestionando su nombre, ataque, vida máxima, vida actual e imagen.
 * Incluye un método para mostrar la información del enemigo.
 */
export class Enemigo {
    /** @property {string} nombre - El nombre del enemigo. */
    nombre;
    /** @property {number} ataque - El valor de ataque del enemigo. */
    ataque;
    /** @property {number} vidaMax - La vida máxima del enemigo. */
    vidaMax;
    /** @property {number} vida - La vida actual del enemigo. */
    vida;
    /** @property {string} imagen - La ruta de la imagen del enemigo. */
    imagen;

    /**
     * Crea una nueva instancia de Enemigo.
     * 
     * @constructor
     * @param {string} nombre - El nombre del enemigo.
     * @param {number} ataque - El valor de ataque del enemigo.
     * @param {string} imagen - La ruta de la imagen del enemigo.
     */
    constructor(nombre, ataque, imagen) {
        this.nombre = nombre;
        this.ataque = ataque;
        this.vidaMax = 500;
        this.vida = this.vidaMax;
        this.imagen = imagen;
    }

    /**
     * Genera una representación en cadena de la información del enemigo, incluyendo nombre, ataque y vida actual.
     * 
     * @method mostrarEnemigo
     * @returns {string} Cadena con la información del enemigo.
     */
    mostrarEnemigo() {
        return ` ${this.nombre} (Ataque: ${this.ataque}, Vidas: ${this.vida})`;
    }
}

/**
 * @class Jefe
 * Representa un jefe enemigo que extiende la clase Enemigo, añadiendo un multiplicador para sus atributos.
 * @extends Enemigo
 */
export class Jefe extends Enemigo {
    /** @property {number} multiplicador - El multiplicador aplicado a los atributos del jefe (por defecto 1.2). */
    multiplicador;

    /**
     * Crea una nueva instancia de Jefe.
     * 
     * @constructor
     * @param {string} nombre - El nombre del jefe.
     * @param {number} ataque - El valor de ataque base del jefe.
     * @param {string} imagen - La ruta de la imagen del jefe.
     * @param {number} [multiplicador=1.2] - El multiplicador para los atributos del jefe.
     */
    constructor(nombre, ataque, imagen, multiplicador = 1.2) {
        super(nombre, ataque, imagen);
        this.multiplicador = multiplicador;
    }
}