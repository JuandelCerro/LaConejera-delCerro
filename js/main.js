class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

const listaProductos = [];

listaProductos.push(new Producto(1, "Almohadon y Antifaz", 500));
listaProductos.push(new Producto(2, "Almohadones", 500));
listaProductos.push(new Producto(3, "Conejo de Ceramica", 700));
listaProductos.push(new Producto(4, "Conejo con Luz", 1000));
listaProductos.push(new Producto(5, "Conejos Tejidos", 500));
listaProductos.push(new Producto(6, "Kit Creativo", 1000));
listaProductos.push(new Producto(7, "Marineras", 600));
listaProductos.push(new Producto(8, "Mochila de Peluche", 1200));
listaProductos.push(new Producto(9, "Mochila con Brillo", 1200));
listaProductos.push(new Producto(10, "Brownie", 1500));
listaProductos.push(new Producto(11, "Chessecake", 1500));
listaProductos.push(new Producto(12, "Chocotorta", 1400));
listaProductos.push(new Producto(13, "Lemon Pie", 1400));
listaProductos.push(new Producto(14, "Rogel", 1700));
listaProductos.push(new Producto(15, "Tarta de Manzana", 1700));

console.log(listaProductos);

class ProductoCarrito {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}
let productosCarrito = []

let totalCarrito = 0;
let contadorCarrito = 0;
const domCarrito = document.getElementById("carritoListaContenedor");
const eventoBotonAgregar = document.getElementsByClassName("miEvento");

for (const elemento of eventoBotonAgregar) {
    elemento.addEventListener("click", (event) => { // Evento agregar al carrito
        event.preventDefault();

        console.log(event.target.id);
        let producto = listaProductos.find(item => item.id === parseInt(event.target.id));
        let {id, nombre, precio} = producto; // Desestructuracion producto

        productosCarrito.push(new ProductoCarrito(id, nombre, precio)); // Agregando productos al array del carrito
        console.log(productosCarrito);

        contadorCarrito++;
        totalCarrito += precio;

        document.getElementById("carritoContador").innerHTML = contadorCarrito; //hacer contador de carrito

        localStorage.setItem('pagar', totalCarrito);
        localStorage.setItem('producto', JSON.stringify(productosCarrito));
        localStorage.setItem('contadorCarrito', contadorCarrito);
    })
}