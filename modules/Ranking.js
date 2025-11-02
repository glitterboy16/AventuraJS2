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