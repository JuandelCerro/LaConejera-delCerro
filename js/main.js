class ProductoCarrito {
    constructor(id, nombre, precio, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

fetch('./json/data.json')
    .then((res) => res.json())
    .then((data) => localStorage.setItem('dataProductos', JSON.stringify(data)))
    .then(() => {
        const domTienda = document.getElementById("tienda");
        const productosStorage = JSON.parse(localStorage.getItem('dataProductos'));

        for (const elemento of productosStorage) {
            const div = document.createElement("div")
            div.classList.add("col-4")
            div.innerHTML = `
               <div class="card item1" style="width: 18rem;">
                   <img src="${elemento.imagen}">
                   <div class="card-body">
                       <h4 class="card-text">${elemento.nombre}</h4>
                       <h5 class="card-text">$${elemento.precio} (+ Iva)</h5>
                       <button class="btn btn-primary btnTienda miEvento" id="${elemento.id}">Añadir al carrito</button>
                   </div>
               </div>
                   `
            domTienda.append(div);
        }

        const eventoBotonAgregar = document.getElementsByClassName("miEvento");

        let cantidad = 0;
        let totalCarrito = parseInt(localStorage.getItem('pagar') || 0);
        let contadorCarrito = parseInt(localStorage.getItem('contadorCarrito') || 0);

        for (const elemento of eventoBotonAgregar) {
            elemento.addEventListener("click", (event) => { // Evento agregar al carrito
                let productosCarrito = JSON.parse(localStorage.getItem('producto')) || [];
                event.preventDefault();

                let producto = JSON.parse(localStorage.getItem('dataProductos')).find(item => item.id === parseInt(event.target.id));
                let {
                    id,
                    nombre,
                    precio,
                } = producto; // Desestructuracion producto

                const productoCarrito = productosCarrito.find((prodCarrito) => prodCarrito.id === producto.id);
                if (productoCarrito) {

                    let posicionProducto = productosCarrito.findIndex(((prodCarrito) => prodCarrito.id === producto.id))

                    cantidad = productoCarrito.cantidad + 1;

                    productosCarrito[posicionProducto] = new ProductoCarrito(id, nombre, (precio * cantidad), cantidad);

                    contadorCarrito++;
                    totalCarrito += precio;

                    document.getElementById("carritoContador").innerHTML = contadorCarrito; //hacer contador de carrito

                    localStorage.setItem('producto', JSON.stringify(productosCarrito));
                    localStorage.setItem('pagar', totalCarrito);
                    localStorage.setItem('contadorCarrito', contadorCarrito);
                    console.log('primero', contadorCarrito);

                    Swal.fire({
                        title: 'Agregado al carrito',
                        icon: 'success',
                        title: 'Agregaste ' + nombre + ' al carrito!',
                        showConfirmButton: false,
                        timer: 1500,
                    })

                } else {
                    cantidad = 1;

                    productosCarrito.push(new ProductoCarrito(id, nombre, precio, cantidad)); // Agregando productos al array del carrito

                    contadorCarrito++;
                    totalCarrito += precio;

                    document.getElementById("carritoContador").innerHTML = contadorCarrito; //hacer contador de carrito

                    localStorage.setItem('producto', JSON.stringify(productosCarrito));
                    localStorage.setItem('pagar', totalCarrito);
                    localStorage.setItem('contadorCarrito', contadorCarrito);

                    Swal.fire({
                        title: 'Agregado al carrito',
                        icon: 'success',
                        title: 'Agregaste ' + nombre + ' al carrito!',
                        showConfirmButton: false,
                        timer: 1500,
                    })
                }


            })
        }

    });