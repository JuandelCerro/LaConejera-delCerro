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

if (productosCarritoParse == null) {
    totalCarrito = 0;
    contadorCarrito = 0;
    document.getElementById("totalAPagar").innerHTML = totalCarrito;
    document.getElementById("carritoContador").innerHTML = contadorCarrito;
}
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

    Swal.fire({
        title: '¿Desea vaciar el carrito?',
        text: "Eliminará todos los productos",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Vaciar carrito',
        cancelButtonText: 'No',
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: '¡Carrito vacio!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500,
            })

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
        }
    })
})

// Evento boton pagar
const eventoBotonPagar = document.getElementById("btnPagar");
eventoBotonPagar.addEventListener("click", () => {

    Swal.fire({
        title: '¿Desea confirmar el pago?',
        showDenyButton: true,
        confirmButtonText: 'Confirmar pago',
        denyButtonText: `Cancelar pago`,
    }).then((result) => {

        if (result.isConfirmed) {
            Swal.fire('¡Su pago ha sido confirmado!', '', 'success')
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
        } else if (result.isDenied) {
            Swal.fire('Pago cancelado', '', 'error')
        }
    })
})

