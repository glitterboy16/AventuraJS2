// Clases Enemigo y JefeFinal
export class Enemigo {
    tipo;
    nombre;
    ataque;
    vida;
    defensa = 0; // Valor por defecto simple

    constructor(tipo, nombre, ataque, vida) {
        this.tipo = tipo;
        this.nombre = nombre;
        this.ataque = ataque;
        this.vida = vida;
    }

    accion() {
        return `Tipo: ${this.tipo} | Nombre: ${this.nombre} | Ataque: ${this.ataque} | Vida: ${this.vida}`;
    }
}

export class JefeFinal extends Enemigo {
    habilidadEspecial;
    multiplicadorDaño;

    constructor(nombre, ataque, vida, habilidadEspecial, multiplicadorDaño = 1.3) {
        super('Jefe', nombre, ataque, vida);
        this.habilidadEspecial = habilidadEspecial;
        this.multiplicadorDaño = multiplicadorDaño;
    }

    accion() {
        return `Soy ${this.nombre}. Habilidad especial: ${this.habilidadEspecial}. Daño multiplicado por ${this.multiplicadorDaño}.`;
    }
}