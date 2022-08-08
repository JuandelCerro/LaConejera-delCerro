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
    domCarrito.innerHTML = `
    <tr>
    <th>PRODUCTO</th>
    <th>PRECIO</th>
    </tr>
    `;
    totalCarrito = 0;
    contadorCarrito = 0;
    document.getElementById("totalAPagar").innerHTML = totalCarrito;
    document.getElementById("carritoContador").innerHTML = contadorCarrito;
})