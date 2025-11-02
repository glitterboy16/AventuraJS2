// Mercado y funciones relacionadas
import { Producto } from './producto.js'; // Asumiendo nombre de archivo

export const mercado = [
    new Producto("Espada del Gladiador", 12500, "Épica", "Arma", 50),
    new Producto("Escudo del Centinela", 9900, "Rara", "Defensa", 35),
    new Producto("Armadura de Asalto", 15800, "Épica", "Armadura", 25),
    new Producto("Botas del Jinete", 7200, "Común", "Armadura", 10),
    new Producto("Anillo del Fénix", 13400, "Legendaria", "Consumible", 100),
    new Producto("Poción de Furia", 450, "Común", "Consumible", 20),
    new Producto("Amuleto del Asesino", 8700, "Rara", "Consumible", 15),
    new Producto("Casco del Conquistador", 11100, "Épica", "Armadura", 20),
    new Producto("Guantes de Precisión", 5600, "Infrecuente", "Armadura", 10),
    new Producto("Capa de Invisibilidad", 19900, "Legendaria", "Armadura", 100),
    new Producto("Espada de la Aurora", 16200, "Legendaria", "Arma", 55),
    new Producto("Arco del Halcón", 9500, "Rara", "Arma", 40),
    new Producto("Maza del Vengador", 13700, "Épica", "Arma", 48),
    new Producto("Tridente del Leviatán", 17500, "Legendaria", "Arma", 65)
];

export function filtrarMercado(rareza, mercado) {
    return mercado.filter(producto => producto.rareza === rareza);
}

export function buscar(mercado, nombre) {
    return mercado.find(producto => producto.nombre === nombre);
}

export function aplicarDescuento(mercado, rareza, porcentaje) {
    return mercado.map(producto => producto.rareza === rareza ? producto.aplicarDescuento(porcentaje) : producto);
}

export function mostrar(producto) {
    return producto.presentar();
}