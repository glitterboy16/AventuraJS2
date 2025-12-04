import { Producto } from "./producto.js";

export const mercado = [
    new Producto('Espada Oxidada', 20, 'comun', 'arma', { ataque: 1, defensa: 5 }, 'espada_oxidada.jpg'),
    new Producto('Capa Rasgada', 50, 'comun', 'armadura', { ataque: 3, defensa: 2 }, 'capa_rasgada.jpg'),
    new Producto('Botas Gastadas', 130, 'raro', 'accesorio', { ataque: 4, defensa: 3 }, 'botas_gastadas.jpg'),
    new Producto('Daga Envenenada', 70, 'comun', 'arma', { ataque: 5, defensa: 4 }, 'daga_envenenada.jpg'),
    new Producto('Escudo Quebrado', 180, 'raro', 'armadura', { ataque: 5, defensa: 3 }, 'escudo_quebrado.png'),
    new Producto('Armadura Maldita', 250, 'epico', 'armadura', { ataque: 5, defensa: 5 }, 'armadura_maldita.jpg'),
    new Producto('Antorcha', 250, 'comun', 'armadura', { ataque: 2, defensa: 4 }, 'antorcha.jpg'),
    new Producto('Hacha de Godfrey', 250, 'comun', 'armadura', { ataque: 2, defensa: 4 }, 'hacha_godfrey.jpg'),
];

export function aplicarDescuentoPorRareza(rareza, porcentaje) {
    return mercado.map(articulo =>
        articulo.rareza === rareza ? articulo.aplicarDescuento(porcentaje) : articulo
    );
}

export function describirProducto(articulo) {
    return articulo.mostrarProducto();
}

export function actualizarInventario(casillas, listaInventario) {
    casillas.forEach((casilla, indice) => {
        casilla.innerHTML = "";
        const articulo = listaInventario[indice];
        if (articulo) {
            const imagen = document.createElement("img");
            imagen.src = "imagenes/" + articulo.imagen;
            imagen.title = articulo.mostrarBonus();
            casilla.appendChild(imagen);
        }
    });
}