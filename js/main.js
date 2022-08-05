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

console.log(listaProductos);

const domCarrito = document.getElementById("carritoListaContenedor");
const eventoBotonAgregar = document.getElementsByClassName("miEvento");
let totalCarrito = 0;
let contadorCarrito = 0;

for (const elemento of eventoBotonAgregar) {
    elemento.addEventListener("click", (event) => {
        event.preventDefault();

        console.log(event.target.id);
        let producto = listaProductos.find(item => item.id === parseInt(event.target.id));

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            `
        domCarrito.append(tr);

        contadorCarrito = contadorCarrito + 1;
        totalCarrito = totalCarrito + producto.precio;
        
        document.getElementById("totalAPagar").innerHTML = totalCarrito;
        document.getElementById("carritoContador").innerHTML = contadorCarrito; //hacer contador de carrito
    })
}

const eventoBotonVaciar = document.getElementById("btnVaciarCarrito");

eventoBotonVaciar.addEventListener("click", () => {
    domCarrito.remove;
    totalCarrito = 0;
    contadorCarrito = 0;
    document.getElementById("totalAPagar").innerHTML = totalCarrito;
    document.getElementById("carritoContador").innerHTML = contadorCarrito;
})