class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

const producto1 = new Producto(1, "Almohadon y Antifaz", 500);
const producto2 = new Producto(2, "Almohadones", 500);
const producto3 = new Producto(3, "Conejo de Ceramica", 700);
const producto4 = new Producto(4, "Conejo con Luz", 1000);
const producto5 = new Producto(5, "Conejos Tejidos", 500);
const producto6 = new Producto(6, "Kit Creativo", 1000);
const producto7 = new Producto(7, "Marineras", 600);
const producto8 = new Producto(8, "Mochila de Peluche", 1200);
const producto9 = new Producto(9, "Mochila con Brillo", 1200);

const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9];

let contadorCarrito = 0;
let aPagar = 0;
const productosCarrito = []; // Array vacio para el carrito

const btnCarrito1 = document.getElementById('btnAgregarCarrito1');
const btnCarrito2 = document.getElementById('btnAgregarCarrito2');
const btnCarrito3 = document.getElementById('btnAgregarCarrito3');
const btnCarrito4 = document.getElementById('btnAgregarCarrito4');
const btnCarrito5 = document.getElementById('btnAgregarCarrito5');
const btnCarrito6 = document.getElementById('btnAgregarCarrito6');
const btnCarrito7 = document.getElementById('btnAgregarCarrito7');
const btnCarrito8 = document.getElementById('btnAgregarCarrito8');
const btnCarrito9 = document.getElementById('btnAgregarCarrito9');

let contadorCarritoText = parseInt(document.getElementById('contadorCarritoText').innerHTML) + 1;

btnCarrito1.addEventListener('click', () => {
    console.log('CLICK');
    contadorCarrito = contadorCarrito + 1;
    console.log(contadorCarrito);
    console.log(contadorCarritoText);
    contadorCarritoText = contadorCarritoText + 1;
    aPagar = aPagar + producto1.precio;

    const p = document.createElement('p');
    const span = document.createElement('span');
    const prod1 = producto1.nombre + "- $" + producto1.precio;

    p.innerHTML = `<p>${prod1}<p>`;
    document.getElementById('carritoLista').appendChild(p);

    span.innerHTML = aPagar;
    document.getElementById('totalAPagar').appendChild(span)
});

btnCarrito2.addEventListener('click', () => {
    console.log('CLICK');
    contadorCarrito = contadorCarrito + 1;
    console.log(contadorCarrito);
    console.log(contadorCarritoText);
    contadorCarritoText = contadorCarritoText + 1;
    aPagar = aPagar + producto2.precio;

    const p = document.createElement('p');
    const span = document.createElement('span');
    const prod2 = producto2.nombre + "- $" + producto2.precio;

    p.innerHTML = `<p>${prod2}<p>`;
    document.getElementById('carritoLista').appendChild(p);

    span.innerHTML = aPagar;
    document.getElementById('totalAPagar').appendChild(span)
});

btnCarrito3.addEventListener('click', () => {
    console.log('CLICK');
    contadorCarrito = contadorCarrito + 1;
    console.log(contadorCarrito);
    console.log(contadorCarritoText);
    contadorCarritoText = contadorCarritoText + 1;
    aPagar = aPagar + producto3.precio;

    const p = document.createElement('p');
    const span = document.createElement('span');
    const prod3 = producto3.nombre + "- $" + producto3.precio;

    p.innerHTML = `<p>${prod3}<p>`;
    document.getElementById('carritoLista').appendChild(p);

    span.innerHTML = aPagar;
    document.getElementById('totalAPagar').appendChild(span)
});

btnCarrito4.addEventListener('click', () => {
    console.log('CLICK');
    contadorCarrito = contadorCarrito + 1;
    console.log(contadorCarrito);
    console.log(contadorCarritoText);
    contadorCarritoText = contadorCarritoText + 1;
    aPagar = aPagar + producto4.precio;

    const p = document.createElement('p');
    const span = document.createElement('span');
    const prod4 = producto4.nombre + "- $" + producto4.precio;

    p.innerHTML = `<p>${prod4}<p>`;
    document.getElementById('carritoLista').appendChild(p);

    span.innerHTML = aPagar;
    document.getElementById('totalAPagar').appendChild(span)
});

btnCarrito5.addEventListener('click', () => {
    console.log('CLICK');
    contadorCarrito = contadorCarrito + 1;
    console.log(contadorCarrito);
    console.log(contadorCarritoText);
    contadorCarritoText = contadorCarritoText + 1;
    aPagar = aPagar + producto5.precio;

    const p = document.createElement('p');
    const span = document.createElement('span');
    const prod5 = producto5.nombre + "- $" + producto5.precio;

    p.innerHTML = `<p>${prod5}<p>`;
    document.getElementById('carritoLista').appendChild(p);

    span.innerHTML = aPagar;
    document.getElementById('totalAPagar').appendChild(span)
});

btnCarrito6.addEventListener('click', () => {
    console.log('CLICK');
    contadorCarrito = contadorCarrito + 1;
    console.log(contadorCarrito);
    console.log(contadorCarritoText);
    contadorCarritoText = contadorCarritoText + 1;
    aPagar = aPagar + producto6.precio;

    const p = document.createElement('p');
    const span = document.createElement('span');
    const prod6 = producto6.nombre + "- $" + producto6.precio;

    p.innerHTML = `<p>${prod6}<p>`;
    document.getElementById('carritoLista').appendChild(p);

    span.innerHTML = aPagar;
    document.getElementById('totalAPagar').appendChild(span)
});

btnCarrito7.addEventListener('click', () => {
    console.log('CLICK');
    contadorCarrito = contadorCarrito + 1;
    console.log(contadorCarrito);
    console.log(contadorCarritoText);
    contadorCarritoText = contadorCarritoText + 1;
    aPagar = aPagar + producto7.precio;

    const p = document.createElement('p');
    const span = document.createElement('span');
    const prod7 = producto7.nombre + "- $" + producto7.precio;

    p.innerHTML = `<p>${prod7}<p>`;
    document.getElementById('carritoLista').appendChild(p);

    span.innerHTML = aPagar;
    document.getElementById('totalAPagar').appendChild(span)
});

btnCarrito8.addEventListener('click', () => {
    console.log('CLICK');
    contadorCarrito = contadorCarrito + 1;
    console.log(contadorCarrito);
    console.log(contadorCarritoText);
    contadorCarritoText = contadorCarritoText + 1;
    aPagar = aPagar + producto8.precio; 

    const p = document.createElement('p');
    const span = document.createElement('span');
    const prod8 = producto8.nombre + "- $" + producto8.precio;

    p.innerHTML = `<p>${prod8}<p>`;
    document.getElementById('carritoLista').appendChild(p);

    span.innerHTML = aPagar;
    document.getElementById('totalAPagar').appendChild(span)
});

btnCarrito9.addEventListener('click', () => {
    console.log('CLICK');
    contadorCarrito = contadorCarrito + 1;
    console.log(contadorCarrito);
    console.log(contadorCarritoText);
    contadorCarritoText = contadorCarritoText + 1;
    aPagar = aPagar + producto9.precio;

    const p = document.createElement('p');
    const span = document.createElement('span');
    const prod9 = producto9.nombre + "- $" + producto9.precio;

    p.innerHTML = `<p>${prod9}<p>`;
    document.getElementById('carritoLista').appendChild(p);

    span.innerHTML = aPagar;
    document.getElementById('totalAPagar').appendChild(span)
});