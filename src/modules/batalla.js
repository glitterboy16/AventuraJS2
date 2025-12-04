import { Jefe } from "./enemigos.js";

export function batalla(jugador, enemigo) {
    let saludJugador = jugador.salud;
    let saludEnemigo = enemigo.vida;

    const danoJugador = jugador.danoTotal;
    const danoEnemigo = Math.max(1, enemigo.ataque - jugador.defensaTotal);

    while (saludJugador > 0 && saludEnemigo > 0) {
        const turno = Math.floor(Math.random() * 2);
        if (turno === 0) {
            saludEnemigo -= danoJugador;
        } else {
            saludJugador -= danoEnemigo;
        }
    }

    let victoriaJugador = false;
    let puntosObtenidos = 0;
    if (saludJugador > 0 && saludEnemigo <= 0) {
        victoriaJugador = true;
        let basePuntos = 100 + enemigo.ataque;
        if (enemigo instanceof Jefe) {
            puntosObtenidos = Math.round(basePuntos * enemigo.multiplicador);
        } else {
            puntosObtenidos = basePuntos;
        }
        jugador.puntos += puntosObtenidos;
    }

    jugador.salud = Math.max(1, saludJugador);

    return `Ganador: ${victoriaJugador ? jugador.nombre : enemigo.nombre}, Puntos ganados: +${puntosObtenidos} pts`;
}

export function calcularNivel(jugador, umbral = 80) {
    const esPro = jugador.puntos >= umbral;
    return esPro ? "PRO" : "ROOKIE";
}