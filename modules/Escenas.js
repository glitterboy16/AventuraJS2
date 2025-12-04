/**
 * @module escenas
 */

import { rarezaAleatoria, descuentoAleatorio, EUR } from '../utils/utils.js';
import { aplicarDescuentoPorRareza, actualizarInventario } from "./Mercado.js";
import { batalla } from "./Batalla.js";

/**
 * Muestra la información del jugador en la escena, incluyendo su imagen, estadísticas e inventario.
 * 
 * @function mostrarJugador
 * @param {HTMLElement} escena - El elemento HTML donde se renderizará la escena del jugador.
 * @param {Jugador} jugador - La instancia del jugador con sus datos.
 * @returns {void}
 */
export function mostrarJugador(escena, jugador) {
    const contenedorEscena1 = document.createElement("div");
    contenedorEscena1.classList.add("scene-1-container");

    const contenedorHeroe = document.createElement("div");
    contenedorHeroe.classList.add("personaje");

    const parrafoHeroe = document.createElement("p");
    parrafoHeroe.innerHTML = "<strong><em>GUERRERO</em></strong>";

    const imagenHeroe = document.createElement("img");
    imagenHeroe.src = "./imagenes/prota.jpg";
    imagenHeroe.classList.add("prota");

    const contenedorEstadisticas = document.createElement("div");
    contenedorEstadisticas.classList.add("parametros-container");

    const parrafoEstadisticas = document.createElement("p");
    parrafoEstadisticas.innerHTML = "<strong><em>ESTADÍSTICAS</em></strong>";

    const divEstadisticas = document.createElement("div");
    divEstadisticas.innerHTML = jugador.mostrarJugador();
    divEstadisticas.classList.add("parametros");

    contenedorHeroe.appendChild(parrafoHeroe);
    contenedorHeroe.appendChild(imagenHeroe);

    contenedorEstadisticas.appendChild(parrafoEstadisticas);
    contenedorEstadisticas.appendChild(divEstadisticas);

    contenedorEscena1.appendChild(contenedorHeroe);
    contenedorEscena1.appendChild(contenedorEstadisticas);

    escena.appendChild(contenedorEscena1);

    mostrarInventario(escena, jugador);
}

/**
 * Muestra el mercado en la escena, aplicando descuentos aleatorios a una rareza seleccionada, y permite al jugador añadir productos a su inventario.
 * 
 * @function mostrarMercado
 * @param {HTMLElement} escena - El elemento HTML donde se renderizará la escena del mercado.
 * @param {Jugador} jugador - La instancia del jugador con sus datos.
 * @returns {void}
 */
export function mostrarMercado(escena, jugador) {
    const contenedorEscena2 = document.createElement("div");
    contenedorEscena2.classList.add("scene-2-container");

    const divMercado = document.createElement("div");
 
    divMercado.classList.add("mercado");

    const rarezaSeleccionada = rarezaAleatoria();
    const porcentajeDescuento = descuentoAleatorio();
    const mercadoConDescuentos = aplicarDescuentoPorRareza(rarezaSeleccionada, porcentajeDescuento);

    contenedorEscena2.appendChild(divMercado);

    const inventario = document.createElement("div");
    inventario.id = "inventory-container";

    for (let indice = 0; indice < 6; indice++) {
        const casilla = document.createElement("div");
        casilla.classList.add("item");
        inventario.appendChild(casilla);
    }

    const casillas = inventario.querySelectorAll(".item");
    const listaInventario = [];

    mercadoConDescuentos.forEach(articulo => {
        const divArticulo = document.createElement("div");
        divArticulo.classList.add("producto");

        const divInfo = document.createElement("div");
        divInfo.classList.add("infoProducto");
        divInfo.innerHTML = jugador.mostrarDinero();

        const imagen = document.createElement("img");
        imagen.src = "./imagenes/" + articulo.imagen;
        imagen.classList.add("imgProducto");

        const nombre = document.createElement("p");
        nombre.innerHTML = "<strong>" + articulo.nombre + "</strong>";

        const rareza = document.createElement("p");
        rareza.innerHTML = "<em>Rareza: </em>" + articulo.rareza;

        const tipo = document.createElement("p");
        tipo.innerHTML = "<em>Tipo: </em>" + articulo.tipo;

        const bonus = document.createElement("p");
        bonus.innerHTML = "<em>Bonus: </em>" + articulo.mostrarBonus();

        const precio = document.createElement("p");
        precio.innerHTML = EUR.format(articulo.precio);

        if (articulo.rareza === rarezaSeleccionada) {
            divArticulo.id = "conDescuento";
            const etiquetaDescuento = document.createElement("p");
            etiquetaDescuento.classList.add("descuento");
            etiquetaDescuento.innerHTML = "Descuento -" + porcentajeDescuento + "%";
            divInfo.appendChild(etiquetaDescuento);
            divArticulo.classList.add("productoConDescuento");
        }

        divInfo.append(imagen, nombre, rareza, tipo, bonus, precio);

        const divComprar = document.createElement("div");
        divComprar.classList.add("comprarProducto");

        const botonComprar = document.createElement("button");
        botonComprar.classList.add("botonComprar");
        botonComprar.innerHTML = "Añadir";

        divComprar.appendChild(botonComprar);

        botonComprar.addEventListener("click", () => {
            if (listaInventario.includes(articulo)) {
                botonComprar.innerHTML = 'Añadir';
                divArticulo.style.backgroundColor = "";

                const pos = listaInventario.findIndex(p => p === articulo);
                listaInventario.splice(pos, 1);

                const posJug = jugador.inventario.findIndex(p => p === articulo);
                jugador.inventario.splice(posJug, 1);
            } else {
                if (listaInventario.length >= 6) {
                    alert("Inventario repleto. No puedes añadir más artículos.");
                    return;
                }

                botonComprar.innerHTML = 'Añadido';
                divArticulo.style.backgroundColor = "#d4fcd4";
                listaInventario.push(articulo);
                jugador.añadirProducto(articulo);
            }

            actualizarInventario(casillas, listaInventario);
        });

        divArticulo.append(divInfo, divComprar);
        divMercado.appendChild(divArticulo);
    });

    contenedorEscena2.appendChild(inventario);
    escena.appendChild(contenedorEscena2);
}

/**
 * Muestra la lista de enemigos en la escena, junto con el inventario del jugador.
 * 
 * @function mostrarEnemigos
 * @param {HTMLElement} escena - El elemento HTML donde se renderizará la escena de enemigos.
 * @param {Enemigo[]} listaEnemigos - Array de enemigos a mostrar.
 * @param {Jugador} jugador - La instancia del jugador con sus datos.
 * @returns {void}
 */
export function mostrarEnemigos(escena, listaEnemigos, jugador) {
    const contenedorEscena4 = document.createElement("div");
    contenedorEscena4.classList.add("scene-4-container");

    const parrafoEnemigos = document.createElement('p');
    parrafoEnemigos.innerHTML = "<em>ENEMIGOS</em>";
    contenedorEscena4.appendChild(parrafoEnemigos);

    const divEnemigos = document.createElement("div");
    divEnemigos.classList.add("enemigos");

    listaEnemigos.forEach(enemigo => {
        const divEnemigo = document.createElement("div");
        divEnemigo.classList.add("enemigo");

        const divInfo = document.createElement("div");
        divInfo.classList.add("infoEnemigo");

        const imagen = document.createElement("img");
        imagen.src = "./imagenes/" + enemigo.imagen;
        imagen.classList.add("imgEnemigo");

        const nombre = document.createElement("p");
        nombre.innerHTML = "<strong>" + enemigo.nombre + "</strong>";

        const ataque = document.createElement("p");
        ataque.innerHTML = "<em>Ataque: </em>" + enemigo.ataque;

        divInfo.appendChild(imagen);
        divInfo.appendChild(nombre);
        if (enemigo.multiplicador) {
            const jefe = document.createElement("p");
            jefe.innerHTML = "jefe ⚠️ (Multiplicador: x" + enemigo.multiplicador + ")";
            divInfo.appendChild(jefe);
        }
        divInfo.appendChild(ataque);

        divEnemigos.appendChild(divInfo);
    });

    contenedorEscena4.appendChild(divEnemigos);
    escena.appendChild(contenedorEscena4);

    mostrarInventario(escena, jugador);
}

/**
 * Inicia una pelea contra un enemigo aleatorio, muestra el resultado de la batalla y el inventario del jugador.
 * 
 * @function pelear
 * @param {HTMLElement} escena - El elemento HTML donde se renderizará la escena de la pelea.
 * @param {Enemigo[]} listaEnemigos - Array de enemigos disponibles.
 * @param {Jugador} jugador - La instancia del jugador con sus datos.
 * @returns {void}
 */
export function pelear(escena, listaEnemigos, jugador) {
    const contenedorEscena5 = document.createElement("div");
    contenedorEscena5.classList.add("scene-5-container");

    const divPelea = document.createElement("div");
    divPelea.classList.add("pelea");

    const indice = Math.floor(Math.random() * listaEnemigos.length);
    const enemigoAleatorio = listaEnemigos[indice];

    const divEnemigo = document.createElement("div");
    divEnemigo.classList.add("enemigoPeleaDiv");

    const divPersonaje = document.createElement("div");
    divPersonaje.classList.add("personajePeleaDiv");

    const imgEnemigo = document.createElement("img");
    imgEnemigo.src = "./imagenes/" + enemigoAleatorio.imagen;
    imgEnemigo.classList.add("imgEnemigo");

    const imgPersonaje = document.createElement("img");
    imgPersonaje.src = "./imagenes/prota.jpg";
    imgPersonaje.classList.add("prota");

    divPersonaje.appendChild(imgPersonaje);
    divEnemigo.appendChild(imgEnemigo);
    divPelea.appendChild(divPersonaje);
    divPelea.appendChild(divEnemigo);

    const resultado = batalla(jugador, enemigoAleatorio);
    const parrafoResultado = document.createElement("h2");
    parrafoResultado.classList.add('resultado');
    parrafoResultado.innerHTML = resultado;
    

    contenedorEscena5.appendChild(parrafoResultado);
    contenedorEscena5.appendChild(divPelea);
    escena.appendChild(contenedorEscena5);

    mostrarInventario(escena, jugador);
}

/**
 * Muestra el inventario del jugador en la escena, creando casillas para cada ítem y placeholders para las vacías.
 * 
 * @function mostrarInventario
 * @param {HTMLElement} escena - El elemento HTML donde se renderizará el inventario.
 * @param {Jugador} jugador - La instancia del jugador con su inventario.
 * @returns {void}
 */
export function mostrarInventario(escena, jugador) {
    const inventario = document.createElement("div");
    inventario.id = "inventory-container";

    jugador.inventario.forEach(articulo => {
        const casilla = document.createElement("div");
        casilla.classList.add("item");

        const imagen = document.createElement("img");
        imagen.src = "./imagenes/" + articulo.imagen;
        imagen.classList.add("imgProducto");

        const nombre = document.createElement("p");
        nombre.innerHTML = "<strong>" + articulo.nombre + "</strong>";

        casilla.appendChild(imagen);
        inventario.appendChild(casilla);
    });

    for (let i = jugador.inventario.length; i < 6; i++) {
        const casilla = document.createElement("div");
        casilla.classList.add("item");
        inventario.appendChild(casilla);
    }

    escena.appendChild(inventario);
}