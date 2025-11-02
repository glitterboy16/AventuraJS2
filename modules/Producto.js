// Clase Producto
export class Producto {
    nombre;
    precio;
    rareza;
    tipo;
    bono;

    constructor(nombre, precio, rareza, tipo, bono) {
        this.nombre = nombre;
        this.precio = precio;
        this.rareza = rareza;
        this.tipo = tipo;
        this.bono = bono;
    }

    presentar() {
        const formatoPrecio = (this.precio / 100).toFixed(2).replace('.', ',') + '€';
        return `Nombre: ${this.nombre} Precio: ${formatoPrecio} Rareza: ${this.rareza} Tipo: ${this.tipo} Bono: +${this.bono}`;
    }

    aplicarDescuento(porcentaje) {
        if (porcentaje < 0) { porcentaje = 0 }
        if (porcentaje > 100) { porcentaje = 100 }
        const nuevoPrecio = Math.round(this.precio * (1 - (porcentaje / 100)));
        return new Producto(this.nombre, nuevoPrecio, this.rareza, this.tipo, this.bono);
    }
}