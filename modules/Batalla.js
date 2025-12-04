/**
 * @module batalla
 */

import { Jefe } from "./Enemigos.js";

/**
 * Simula una batalla entre el jugador y un enemigo, actualizando la salud y puntos del jugador según el resultado.
 * 
 * @function batalla
 * @param {Jugador} jugador - La instancia del jugador participando en la batalla.
 * @param {Enemigo} enemigo - La instancia del enemigo contra el que se batalla.
 * @returns {string} Un mensaje indicando el ganador y los puntos ganados por el jugador.
 */
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

/**
 * Calcula el nivel del jugador basado en sus puntos acumulados comparados con un umbral.
 * 
 * @function calcularNivel
 * @param {Jugador} jugador - La instancia del jugador para evaluar su nivel.
 * @param {number} [umbral=80] - El umbral de puntos para determinar si es "PRO" o "ROOKIE".
 * @returns {string} El nivel del jugador: "PRO" si puntos >= umbral, de lo contrario "ROOKIE".
 */
export function calcularNivel(jugador, umbral = 80) {
    const esPro = jugador.puntos >= umbral;
    return esPro ? "PRO" : "ROOKIE";
}