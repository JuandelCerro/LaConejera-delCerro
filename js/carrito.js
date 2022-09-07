contadorCarrito = localStorage.getItem('contadorCarrito');
document.getElementById("carritoContador").innerHTML = contadorCarrito;

if (contadorCarrito == null) {
    totalCarrito = 0;
    document.getElementById("carritoContador").innerHTML = totalCarrito ;
}