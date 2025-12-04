export class Jugador {
    nombre;
    puntos;
    inventario;
    saludMax;
    salud;

    constructor(nombre) {
        this.nombre = nombre;
        this.puntos = 0;
        this.inventario = [];
        this.saludMax = 500;
        this.salud = this.saludMax;
    }

    añadirProducto(articulo) {
        this.inventario.push(structuredClone(articulo));
    }

    get danoTotal() {
        let total = 0;
        this.inventario.forEach(articulo => {
            if (articulo.bonus.ataque > 0) {
                total += articulo.bonus.ataque;
            }
        });
        return total;
    }

    get defensaTotal() {
        let total = 0;
        this.inventario.forEach(articulo => {
            if (articulo.bonus.defensa > 0) {
                total += articulo.bonus.defensa;
            }
        });
        return total;
    }

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