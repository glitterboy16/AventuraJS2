export class Enemigo {
    nombre;
    ataque;
    vidaMax;
    vida;
    imagen;

    constructor(nombre, ataque, imagen) {
        this.nombre = nombre;
        this.ataque = ataque;
        this.vidaMax = 500;
        this.vida = this.vidaMax;
        this.imagen = imagen;
    }

    mostrarEnemigo() {
        return ` ${this.nombre} (Ataque: ${this.ataque}, Vidas: ${this.vida})`;
    }
}

export class Jefe extends Enemigo {
    multiplicador;

    constructor(nombre, ataque, imagen, multiplicador = 1.2) {
        super(nombre, ataque, imagen);
        this.multiplicador = multiplicador;
    }
}