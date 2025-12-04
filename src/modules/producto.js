import { EUR } from '../utils/utils.js';

export class Producto {
    nombre;
    precio;
    rareza;
    tipo;
    bonus;
    imagen;

    constructor(nombre, precio, rareza, tipo, bonus, imagen) {
        this.nombre = nombre;
        this.precio = precio;
        this.rareza = rareza;
        this.tipo = tipo;
        this.bonus = bonus;
        this.imagen = imagen;
    }

    mostrarProducto() {
        let cadenaBonus = '';
        for (const clave in this.bonus) {
            cadenaBonus += `${clave}+${this.bonus[clave]}, `;
        }
        cadenaBonus = cadenaBonus.slice(0, -2);

        return `${this.nombre} [${this.rareza}] (${this.tipo}) — ${EUR.format(this.precio)} — ${cadenaBonus} — ${this.imagen}`;
    }

    mostrarBonus() {
        let cadenaBonus = '';
        for (const clave in this.bonus) {
            cadenaBonus += `${clave}+${this.bonus[clave]}, `;
        }
        cadenaBonus = cadenaBonus.slice(0, -2);

        return `${cadenaBonus}`;
    }

    aplicarDescuento(porcentaje) {
        if (porcentaje < 0) porcentaje = 0;
        if (porcentaje > 100) porcentaje = 100;

        const precioNuevo = Math.round(this.precio * (1 - porcentaje / 100));

        return new Producto(this.nombre, precioNuevo, this.rareza, this.tipo, this.bonus, this.imagen);
    }
}