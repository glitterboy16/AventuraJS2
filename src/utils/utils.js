export const EUR = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR'
});

export function rarezaAleatoria() {
    const aleatorio = Math.floor(Math.random() * 3);
    if (aleatorio === 0) {
        return "comun";
    } else if (aleatorio === 1) {
        return "raro";
    } else return "epico";
}

export function descuentoAleatorio() {
    return Math.floor(Math.random() * 10) * 10 + 10;
}

export function mostrarArray(lista, funcionMostrar) {
    lista.forEach(item => console.log(funcionMostrar(item)));
}