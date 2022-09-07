 function cargarDatos() {
     fetch('./json/data.json')
         .then((res) => res.json())
         .then((data) => localStorage.setItem('dataProductos', JSON.stringify(data)));

     const domTienda = document.getElementById("tienda");
     const productosStorage = JSON.parse(localStorage.getItem('dataProductos'));

     console.log(productosStorage);

     for (const elemento of productosStorage) {
         const div = document.createElement("div")
         div.classList.add("col-4")
         div.innerHTML = `
            <div class="card item1" style="width: 18rem;">
                <img src="${elemento.imagen}">
                <div class="card-body">
                    <h4 class="card-text">${elemento.nombre}</h4>
                    <h5 class="card-text">$${elemento.precio}</h5>
                    <h6 class="card-text">(Stock disponible: ${elemento.stock})</h6>
                    <button class="btn btn-primary btnTienda miEvento" id="${elemento.id}">Añadir al carrito</button>
                </div>
            </div>
                `
         domTienda.append(div);
     }
 }

 cargarDatos();


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

         let producto = JSON.parse(localStorage.getItem('dataProductos')).find(item => item.id === parseInt(event.target.id));
         let {
             id,
             nombre,
             precio,
         } = producto; // Desestructuracion producto

         productosCarrito.push(new ProductoCarrito(id, nombre, precio)); // Agregando productos al array del carrito
         console.log(productosCarrito);

         contadorCarrito++;
         totalCarrito += precio;

         document.getElementById("carritoContador").innerHTML = contadorCarrito; //hacer contador de carrito

         localStorage.setItem('pagar', totalCarrito);
         localStorage.setItem('producto', JSON.stringify(productosCarrito));
         localStorage.setItem('contadorCarrito', contadorCarrito);
         Swal.fire({
             title: 'Agregado al carrito',
             icon: 'success',
             title: 'Agregaste ' + nombre + ' al carrito!',
             showConfirmButton: false,
             timer: 1500,
         })
     })
 }