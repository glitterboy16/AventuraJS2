import { Jugador } from "./modules/Jugador.js";
import { Enemigo, Jefe } from "./modules/Enemigos.js";  
import { calcularNivel } from "./modules/Batalla.js";
import { mostrarMercado, mostrarJugador, mostrarEnemigos, pelear, mostrarInventario } from "./modules/Escenas.js";

/**
 * @constant {HTMLElement} escena - El elemento DOM que representa la escena principal del juego.
 */
const escena = document.getElementsByClassName("scene")[0];

/**
 * @constant {Jugador} jugador - Instancia del jugador principal del juego.
 */
const jugador = new Jugador('Sir Elias');

mostrarJugador(escena, jugador);

/**
 * @constant {HTMLButtonElement} botonContinuarMercado - Botón para continuar al mercado.
 */
const botonContinuarMercado = document.createElement("button");
botonContinuarMercado.type = "button";
botonContinuarMercado.id = "continuarMercado";
botonContinuarMercado.innerHTML = "Continuar";

escena.appendChild(botonContinuarMercado);

/**
 * @constant {HTMLButtonElement} botonContinuarCompra - Botón para confirmar la compra en el mercado.
 */
const botonContinuarCompra = document.createElement("button");
botonContinuarCompra.type = "button";
botonContinuarCompra.id = "continuarCompra";
botonContinuarCompra.innerHTML = "Comprar";

/**
 * Event listener para el botón de continuar al mercado.
 * Limpia la escena actual y muestra el mercado, añadiendo el botón de compra.
 */
botonContinuarMercado.addEventListener("click", () => {
    escena.replaceChildren();
    mostrarMercado(escena, jugador);
    escena.appendChild(botonContinuarCompra);
});

/**
 * @constant {HTMLButtonElement} botonContinuarEnemigos - Botón para continuar a la escena de enemigos.
 */
const botonContinuarEnemigos = document.createElement("button");
botonContinuarEnemigos.type = "button";
botonContinuarEnemigos.id = "continuarEnemigos";
botonContinuarEnemigos.innerHTML = "Continuar";

/**
 * Event listener para el botón de confirmar compra.
 * Limpia la escena y muestra nuevamente al jugador con el botón para continuar a enemigos.
 */
botonContinuarCompra.addEventListener("click", () => {
    escena.replaceChildren();
    mostrarJugador(escena, jugador);
    escena.appendChild(botonContinuarEnemigos);
});

// Creación de enemigos
/**
 * @constant {Enemigo} enemigo1 - Instancia de un enemigo común.
 */
const enemigo1 = new Enemigo('Godrick el Injertado', 5, 'godrick.jpg');
/**
 * @constant {Enemigo} enemigo2 - Instancia de un enemigo común.
 */
const enemigo2 = new Enemigo('Radahn Devorador de Estrellas', 3, 'radahn.jpg');
/**
 * @constant {Enemigo} enemigo3 - Instancia de un enemigo común.
 */
const enemigo3 = new Enemigo('Malenia Diosa de la Podredumbre', 2, 'malenia.jpg');
/**
 * @constant {Enemigo} enemigo4 - Instancia de un enemigo común.
 */
const enemigo4 = new Enemigo('Mohg Señor de la Sangre', 1, 'mohg.jpg');
/**
 * @constant {Enemigo} enemigo5 - Instancia de un enemigo común.
 */
const enemigo5 = new Enemigo('Rykard Señor de la Blasfemia', 3, 'rykard.jpg');
/**
 * @constant {Jefe} enemigo6 - Instancia de un jefe con multiplicador.
 */
const enemigo6 = new Jefe('Maliketh la Hoja Negra', 4, 'maliketh.jpg', 1.5);  // Jefe

/**
 * @constant {Enemigo[]} listaEnemigos - Lista de todos los enemigos disponibles en el juego.
 */
const listaEnemigos = [enemigo1, enemigo2, enemigo3, enemigo4, enemigo5, enemigo6];

/**
 * @constant {HTMLButtonElement} botonContinuarPelea - Botón para iniciar la primera batalla.
 */
const botonContinuarPelea = document.createElement("button");
botonContinuarPelea.type = "button";
botonContinuarPelea.id = "continuarPelea";
botonContinuarPelea.innerHTML = "Iniciar batalla 1";

/**
 * Event listener para el botón de continuar a enemigos.
 * Limpia la escena y muestra los enemigos, añadiendo el botón para la primera batalla.
 */
botonContinuarEnemigos.addEventListener("click", () => {
    escena.replaceChildren();
    mostrarEnemigos(escena, listaEnemigos, jugador);
    escena.appendChild(botonContinuarPelea);
});

/**
 * @constant {HTMLButtonElement} botonPelea1 - Botón para iniciar la segunda batalla.
 */
const botonPelea1 = document.createElement("button");
botonPelea1.type = "button";
botonPelea1.id = "continuarPelea1";
botonPelea1.innerHTML = "Iniciar batalla 2";

/**
 * Event listener para el botón de la primera batalla.
 * Limpia la escena, inicia una pelea y añade el botón para la segunda batalla.
 */
botonContinuarPelea.addEventListener("click", () => {
    escena.replaceChildren();
    pelear(escena, listaEnemigos, jugador);
    escena.appendChild(botonPelea1);
});

/**
 * @constant {HTMLButtonElement} botonPelea2 - Botón para iniciar la tercera batalla.
 */
const botonPelea2 = document.createElement("button");
botonPelea2.type = "button";
botonPelea2.id = "continuarPelea2";
botonPelea2.innerHTML = "Iniciar batalla 3";

/**
 * Event listener para el botón de la segunda batalla.
 * Limpia la escena, inicia una pelea y añade el botón para la tercera batalla.
 */
botonPelea1.addEventListener("click", () => {
    escena.replaceChildren();
    pelear(escena, listaEnemigos, jugador);
    escena.appendChild(botonPelea2);
});

/**
 * @constant {HTMLButtonElement} botonPelea3 - Botón para mostrar los resultados finales.
 */
const botonPelea3 = document.createElement("button");
botonPelea3.type = "button";
botonPelea3.id = "continuarPelea3";
botonPelea3.innerHTML = "Resultados";

/**
 * Event listener para el botón de la tercera batalla.
 * Limpia la escena, inicia una pelea y añade el botón para mostrar resultados.
 */
botonPelea2.addEventListener("click", () => {
    escena.replaceChildren();
    pelear(escena, listaEnemigos, jugador);
    escena.appendChild(botonPelea3);
});

/**
 * @constant {HTMLButtonElement} botonReinicio - Botón para reiniciar el juego.
 */
const botonReinicio = document.createElement("button");
botonReinicio.type = "button";
botonReinicio.id = "botonReload";
botonReinicio.innerHTML = "Volver a empezar";

/**
 * Listener para la escena final de resultados.
 * Muestra puntos, nivel, inventario y botón de reinicio.
 * Si el nivel es "PRO", lanza animación de confetti.
 */
botonPelea3.addEventListener("click", () => {
    escena.replaceChildren();
    const resultado = calcularNivel(jugador);
    const textoPuntos = "<em>Puntos totales: </em> +" + jugador.puntos + " pts.";
    const textoResultado = jugador.nombre + " es " + resultado + " 🔥 ";
    const parrafo = document.createElement('p');
    const titulo = document.createElement('h2');
    parrafo.innerHTML = textoPuntos;
    titulo.innerHTML = textoResultado;
    escena.appendChild(parrafo);
    escena.appendChild(titulo);
    mostrarInventario(escena, jugador);
    escena.appendChild(botonReinicio);

    // Animación de confetti solo si es "PRO" (usando canvas-confetti cargada vía CDN)
    if (resultado === "PRO") {
        confetti({
            particleCount: 100,  
            spread: 70,          
            origin: { y: 0.6 },  
            colors: ['#d4af37', '#e6e6e6', '#9a9a9a']  
        });
    }
});

/**
 * Event listener para el botón de reinicio.
 * Recarga la página para empezar de nuevo.
 */
botonReinicio.addEventListener("click", () => {
    location.reload();
});