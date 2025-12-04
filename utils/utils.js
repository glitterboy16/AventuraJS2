/**
 * @constant {Intl.NumberFormat} EUR - Formateador de números para euros en formato español.
 * Utiliza Intl.NumberFormat para formatear valores como moneda en euros.
 */
export const EUR = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR'
});

/**
 * Genera una rareza aleatoria para un producto.
 * 
 * @function rarezaAleatoria
 * @returns {string} Una rareza aleatoria: 'comun', 'raro' o 'epico'.
 */
export function rarezaAleatoria() {
    const aleatorio = Math.floor(Math.random() * 3);
    if (aleatorio === 0) {
        return "comun";
    } else if (aleatorio === 1) {
        return "raro";
    } else return "epico";
}

/**
 * Genera un porcentaje de descuento aleatorio en múltiplos de 10, entre 10% y 100%.
 * 
 * @function descuentoAleatorio
 * @returns {number} Un porcentaje de descuento aleatorio (ej. 10, 20, ..., 100).
 */
export function descuentoAleatorio() {
    return Math.floor(Math.random() * 10) * 10 + 10;
}

/**
 * Muestra en consola cada elemento de un array aplicando una función de visualización.
 * 
 * @function mostrarArray
 * @param {Array} lista - El array de elementos a mostrar.
 * @param {Function} funcionMostrar - Función que recibe un elemento y retorna su representación como cadena.
 * @returns {void}
 */
export function mostrarArray(lista, funcionMostrar) {
    lista.forEach(item => console.log(funcionMostrar(item)));
}

export const regexName = /^.{3,}$/;
export const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])\S{8,}$/;
export const regexPhone = /^\d{9}$/;
export const regexCode = /^\d{5}$/;