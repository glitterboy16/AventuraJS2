// Clase Jugador
export class Jugador {
    nombre;
    vida;
    vidaMax;
    inventario;
    puntos;
    ataque;
    defensa;

    constructor(nombre) {
        this.nombre = nombre;
        this.puntos = 7000;
        this.vidaMax = 200;
        this.vida = this.vidaMax;
        this.inventario = [];
        this.ataque = 0;
        this.defensa = 0;
    }

    agregarItem(item) {
        this.inventario.push(JSON.parse(JSON.stringify(item))); // Clon simple con JSON
    }

    obtenerPunto(numeroPuntos) {
        this.puntos += numeroPuntos;
    }

    comprarItem(nombre, mercado) {
        const item = mercado.find(producto => producto.nombre === nombre);
        if (item) {
            this.agregarItem(item);
            return true;
        }
        return false;
    }

    usarItem(nombreItem, tipos, stat) {
        const arregloTipos = Array.isArray(tipos) ? tipos : [tipos];

        const item = this.inventario.find(producto =>
            arregloTipos.includes(producto.tipo) && producto.nombre === nombreItem
        );

        if (!item) {
            return `No tienes ese ítem en el inventario.`;
        }

        let bonoAplicado = item.bono;
        switch (stat) {
            case 'ataque':
                this.ataque += bonoAplicado;
                break;
            case 'defensa':
                this.defensa += bonoAplicado;
                break;
            case 'vida':
                bonoAplicado = Math.min(this.vida + item.bono, this.vidaMax) - this.vida;
                this.vida += bonoAplicado;
                break;
            default:
                return "Stat no válido.";
        }

        this.inventario = this.inventario.filter(producto => producto !== item);

        return `Has usado ${item.nombre} y has ganado +${bonoAplicado} ${stat}.`;
    }

    usarItemAtaque(nombreItem) {
        return this.usarItem(nombreItem, "Arma", "ataque");
    }

    usarItemDefensa(nombreItem) {
        return this.usarItem(nombreItem, ["Defensa", "Armadura"], "defensa");
    }

    usarItemVida(nombreItem) {
        return this.usarItem(nombreItem, "Consumible", "vida");
    }

    inventarioAString() {
        if (this.inventario.length === 0) return "Inventario vacío";
        return this.inventario.map(item => `${item.nombre} (${item.tipo})`).join("\n");
    }

    jugadorAString() {
        return `👤 ${this.nombre}\n❤️ Vida: ${this.vida}/${this.vidaMax}\n⚡ Puntos: ${this.puntos}\n⚔️ Ataque: ${this.ataque}\n🛡️ Defensa: ${this.defensa}\n\n🧳 Inventario:\n${this.inventarioAString()}`;
    }
}

// Funciones de categorización y ranking
export function categorizarJugadores(jugadores, puntosPro) {
    let jugadoresPro = "";
    let novatos = "";
    for (let i = 0; i < jugadores.length; i++) {
        if (jugadores[i].puntos >= puntosPro) {
            jugadoresPro += jugadores[i].nombre + "\n";
        } else {
            novatos += jugadores[i].nombre + "\n";
        }
    }
    return "\u{1F44D} Jugadores Pro:\n\n" + jugadoresPro + "\n\n\u{1F44E} Novatos:\n\n" + novatos + "\n\n";
}

export function rankearJugadores(jugadores) {
    jugadores.sort((a, b) => b.puntos - a.puntos);
    let jugadoresRankeados = "\u{1F451} Jugadores rankeados:\n\n";
    for (let i = 0; i < jugadores.length; i++) {
        jugadoresRankeados += (i + 1) + " - " + jugadores[i].nombre + "\n";
    }
    return jugadoresRankeados;
}