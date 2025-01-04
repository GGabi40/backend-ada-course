// OBJETOS
const panaderia = {
    nombre: 'La Estrella',
    direccion: 'Cordoba 123',
    productos: [
        {nombre: 'pan', precio: 10}, 
        {nombre: 'arroz', precio: 1700}, 
        {nombre: 'leche', precio: 1000}, 
        {nombre: 'dulce', precio: 2000}
    ],
    devuelveNombreDeProductos() {
        return this.productos.map(producto => producto.nombre)
    }
}

console.log(panaderia);
console.log(panaderia.devuelveNombreDeProductos());


// --------
// CLASES

/* class Establecimiento {
    private nombre: string;
    private direccion: string;
    private tipo: string;
    private productos: {nombre: string, precio:number}[]; // en TS es necesario definir el tipo de dato de los atributos

    constructor(nombre:string, direccion:string, tipo:string, productos){
        this.nombre = nombre;
        this.direccion = direccion;
        this.tipo = tipo;
        this.productos = productos;
    }
} */


// public: se puede acceder facilmente desde cualquier parte
// private: solo se puede acceder desde la misma clase


// OTRO MODO:
type Producto = {
    nombre: string,
    precio: number
}

class Establecimiento {
    // public filaEspera:number -> Permite violar el encapsulamento
    private _filaEspera: number

    constructor(
        public nombre:string, 
        public direccion:string, 
        private tipo:string, 
        private productos:Producto[],
        filaEspera?: number
    ){
        this._filaEspera = filaEspera ?? 10;
    }

    nombreDeProductos() {
        return this.productos.map(producto => producto.nombre);
    }

    // ENCAPSULAMIENTO: Get y Set
    get filaDeEspera() {
        return this._filaEspera;
    }

    set filaDeEspera(fila: number) {
        if(fila <= 0) { return };

        this._filaEspera = fila;
    }

    disminuyeFila() {
        if(this._filaEspera <= 0) { return };

        return this._filaEspera -= 1;
    }

}


const panaderia2 = new Establecimiento(
    'Los panes', 
    'Cordoba 134', 
    'Panaderia', 
    [
        {nombre: 'pan', precio: 1000}, {nombre: 'dulce', precio: 2000}
    ],
    100
);


// console.log(panaderia2.nombreDeProductos());
// console.log(panaderia2.nombre);
console.log(panaderia2.filaDeEspera);
panaderia2.filaDeEspera = -10; // intentando violar la fila de espera (NO ENTRA)
panaderia2.filaDeEspera = 7; // intentando violar la fila de espera (entra x ser +)
console.log(panaderia2.filaDeEspera);



// ENCAPSULAMENTO
// Concepto para proteger los datos de la clase de que sean
// modificados de manera externa.
// -> Getters y Setters

