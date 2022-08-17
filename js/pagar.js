const domCarrito = document.getElementById('carritoListaContenedor');
const domPagar = document.getElementById('totalAPagar');
let totalPagar = localStorage.getItem('pagar');

document.getElementById("carritoContador").innerHTML = localStorage.getItem('contadorCarrito');

const span = document.createElement('span');
span.innerHTML = `
    <span>${totalPagar}</span>
    `
domPagar.append(span);

const productosCarritoParse = JSON.parse(localStorage.getItem('producto'));
console.log(productosCarritoParse);

productosCarritoParse.forEach(producto => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
             <td>${producto.nombre}</td>
             <td>${producto.precio}</td>
             `
    domCarrito.append(tr);
});


// Evento vaciar carrito
const eventoBotonVaciar = document.getElementById("btnVaciarCarrito");
eventoBotonVaciar.addEventListener("click", () => {

    localStorage.clear();

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