import { Jugador } from "./modules/jugador.js";
import { Enemigo, Jefe } from "./modules/enemigos.js";  
import { calcularNivel } from "./modules/batalla.js";
import { mostrarMercado, mostrarJugador, mostrarEnemigos, pelear, mostrarInventario } from "./modules/escenas.js";

const escena = document.getElementsByClassName("scene")[0];

const jugador = new Jugador('Sir Elias');

mostrarJugador(escena, jugador);

const botonContinuarMercado = document.createElement("button");
botonContinuarMercado.type = "button";
botonContinuarMercado.id = "continuarMercado";
botonContinuarMercado.innerHTML = "Continuar";

escena.appendChild(botonContinuarMercado);

const botonContinuarCompra = document.createElement("button");
botonContinuarCompra.type = "button";
botonContinuarCompra.id = "continuarCompra";
botonContinuarCompra.innerHTML = "Comprar";

botonContinuarMercado.addEventListener("click", () => {
    escena.replaceChildren();
    mostrarMercado(escena, jugador);
    escena.appendChild(botonContinuarCompra);
});

const botonContinuarEnemigos = document.createElement("button");
botonContinuarEnemigos.type = "button";
botonContinuarEnemigos.id = "continuarEnemigos";
botonContinuarEnemigos.innerHTML = "Continuar";

botonContinuarCompra.addEventListener("click", () => {
    escena.replaceChildren();
    mostrarJugador(escena, jugador);
    escena.appendChild(botonContinuarEnemigos);
});

// Creación de enemigos
const enemigo1 = new Enemigo('Godrick el Injertado', 5, 'godrick.jpg');
const enemigo2 = new Enemigo('Radahn Devorador de Estrellas', 3, 'radahn.jpg');
const enemigo3 = new Enemigo('Malenia Diosa de la Podredumbre', 2, 'malenia.jpg');
const enemigo4 = new Enemigo('Mohg Señor de la Sangre', 1, 'mohg.jpg');
const enemigo5 = new Enemigo('Rykard Señor de la Blasfemia', 3, 'rykard.jpg');
const enemigo6 = new Jefe('Maliketh la Hoja Negra', 4, 'maliketh.jpg', 1.5);  // Jefe

const listaEnemigos = [enemigo1, enemigo2, enemigo3, enemigo4, enemigo5, enemigo6];

const botonContinuarPelea = document.createElement("button");
botonContinuarPelea.type = "button";
botonContinuarPelea.id = "continuarPelea";
botonContinuarPelea.innerHTML = "Iniciar batalla 1";

botonContinuarEnemigos.addEventListener("click", () => {
    escena.replaceChildren();
    mostrarEnemigos(escena, listaEnemigos, jugador);
    escena.appendChild(botonContinuarPelea);
});

const botonPelea1 = document.createElement("button");
botonPelea1.type = "button";
botonPelea1.id = "continuarPelea1";
botonPelea1.innerHTML = "Iniciar batalla 2";

botonContinuarPelea.addEventListener("click", () => {
    escena.replaceChildren();
    pelear(escena, listaEnemigos, jugador);
    escena.appendChild(botonPelea1);
});

const botonPelea2 = document.createElement("button");
botonPelea2.type = "button";
botonPelea2.id = "continuarPelea2";
botonPelea2.innerHTML = "Iniciar batalla 3";

botonPelea1.addEventListener("click", () => {
    escena.replaceChildren();
    pelear(escena, listaEnemigos, jugador);
    escena.appendChild(botonPelea2);
});

const botonPelea3 = document.createElement("button");
botonPelea3.type = "button";
botonPelea3.id = "continuarPelea3";
botonPelea3.innerHTML = "Resultados";

botonPelea2.addEventListener("click", () => {
    escena.replaceChildren();
    pelear(escena, listaEnemigos, jugador);
    escena.appendChild(botonPelea3);
});

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

botonReinicio.addEventListener("click", () => {
    location.reload();
});