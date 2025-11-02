// Función de batalla
export function batalla(jugador, enemigo) {
    let dañoJugador = Math.max(jugador.ataque - enemigo.defensa, 0);
    let dañoEnemigo = Math.max(enemigo.ataque - jugador.defensa, 0);

    while (jugador.vida > 0 && enemigo.vida > 0) {
        enemigo.vida -= dañoJugador;
        if (enemigo.vida <= 0) break;
        jugador.vida -= dañoEnemigo;
    }

    if (jugador.vida > 0) {
        jugador.puntos += dañoEnemigo;
        return `🏆 ${jugador.nombre} ha ganado a ${enemigo.nombre} y ha ganado ${dañoEnemigo} puntos 🏆`;
    } else if (enemigo.vida > 0) {
        const puntosRobados = Math.floor(jugador.puntos);
        jugador.puntos = 0;
        return `💀 ${enemigo.nombre} ha ganado a ${jugador.nombre} y le ha robado ${puntosRobados} puntos 💀`;
    } else {
        return `${jugador.nombre} y ${enemigo.nombre} han muerto en batalla. 💀 (Empate)`;
    }
}