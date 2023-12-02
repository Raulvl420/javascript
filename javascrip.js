
let opcionUno = "Camaras de Seguridad"
let opcionDos = "Redes"
let opcionTres = "Control de Acceso"
let opcionCuatro = "Servicio tecnico"

let carrito = [];
const arrayA = []
fetch("./camaras.json")
  .then(response => response.json())
  .then(camaras => {
    arrayA.push(...camaras);
    console.log(arrayA)
                                                                                               // Tengo console log
  })
  .catch(error => {
    console.error('Error al cargar productos:', error);
  });

const arrayB = []
fetch("./redes.json")
  .then(response => response.json())
  .then(redes => {
    arrayB.push(...redes);
    console.log(arrayB)
                                                                                                    //Tengo console log

  })
  .catch(error => {
    console.error('Error al cargar productos:', error);
  });

let arrayC = []
fetch("./acceso.json")
  .then(response => response.json())
  .then(acceso => {
    arrayC.push(...acceso);
    console.log(arrayC)
                                                                                                  // Tengo console log
  })
  .catch(error => {
    console.error('Error al cargar productos:', error);
  });

                                                                                                //Contenedor con los productos 
function mostrarProducto (producto) {
let contenedor = document.createElement("div");
contenedor.innerHTML = ` <h3> Producto  :   ${producto.tipo}</h3>
                         <p>  Modelo    :   ${producto.modelo}</p>
                         <b> Precio     :   ${producto.precio}</b>`;

let botonAgregar = document.createElement("button");
botonAgregar.innerHTML = "Agregar a Carrito";
botonAgregar.addEventListener("click", function() {
agregarAlCarrito (producto);
                                                                                                // Tengo que console log
console.log("Agregado al carrito:", producto);
});

let botonEliminar = document.createElement("button");
botonEliminar.innerHTML = "Eliminar del carrito";
botonEliminar.addEventListener("click", function() {
    eliminarDelCarrito (producto);
                                                                                                // Tengo el console log
console.log("Eliminado del carrito:", producto);
});

document.body.appendChild(contenedor);
contenedor.classList.add("centradoDos");
contenedor.appendChild(botonEliminar);
contenedor.appendChild(botonAgregar);                         
}

let carritoDiv = document.createElement("div");
carritoDiv.id = "carrito";
carritoDiv.classList.add("carrito");
document.body.appendChild(carritoDiv);

function mostrarCarrito () {
    let carritoDiv = document.getElementById("carrito");
    if (carrito.length === 0){
             carritoDiv.style.display = "none";  
    }   else {
              carritoDiv.style.display = "block"     
              carritoDiv.innerHTML = "";
              let totalCarrito = 0;
        carrito.forEach(producto => {
        let productoDiv = document.createElement("div");
        productoDiv.innerHTML = `<h3>${producto.tipo}</h3>
                                 <p>Modelo: ${producto.modelo}</p>
                                 <b>Precio: ${producto.precio}</b> `;
        totalCarrito += producto.precio;
        carritoDiv.appendChild(productoDiv);
    });

    let totalDiv = document.createElement ("div");
    totalDiv.classList.add("totalCarrito");
    totalDiv.innerHTML = `<b> Total:${totalCarrito}</b>`;
    carritoDiv.appendChild(totalDiv);
    
    let botonPago = document.createElement("button");
    botonPago.innerHTML = "Pagar";
    botonPago.addEventListener("click", function() {
      alert ("pagaste")
});
    totalDiv.appendChild(botonPago)
}
                                                                                               // Agregar un Boton para el alert con el nombre de finalizo compra
carritoDiv.classList.add("centradoUno")
document.body.appendChild(carritoDiv);
}

function agregarAlCarrito(producto) {
    carrito.push(producto);
    mostrarCarrito();
}

function eliminarDelCarrito(producto) {
    let index = carrito.indexOf(producto);
    if (index !== -1) {
        let productoEliminado = carrito.splice(index, 1)[0];
    }
    else {
        console.log ("no hay nada ");
    }
    mostrarCarrito();
}
                                                                                              // Funcion SetTime
async function mostrasProductoPagina (array) {
        for (const producto of array) {
            await new Promise(resolve => setTimeout(resolve,850));
            mostrarProducto(producto);
}
}

function limpiarContenido() {
  let contenedores = document.getElementsByClassName("centradoDos");
  for (let contenedor of contenedores) {
      while (contenedor.firstChild) {
          contenedor.removeChild(contenedor.firstChild);
      }
  }
}

                                                                                             // SessionStorage para el formulario
function storage () {
  let nombre = document.getElementById("nombre").value;
  let correo = document.getElementById("correo").value;
  let telefono = document.getElementById("telefono").value;

  let datosSoporte = {
    nombre: nombre,
    correo: correo,
    telefono: telefono,
  };
  
  sessionStorage.setItem("datosSoporte",JSON.stringify(datosSoporte));
  console.log("guardado con exito", datosSoporte);
  }

                                                                                              //Barra de navegacion

document.getElementById("camaras").addEventListener("click", function(event) {
    limpiarContenido()
    mostrasProductoPagina (arrayA);
    mostrarCarrito(carrito);
});

document.getElementById("redes").addEventListener("click", function(event) {
    limpiarContenido() 
    mostrasProductoPagina (arrayB);
    mostrarCarrito(carrito);
});

document.getElementById("control").addEventListener("click", function(event) {
    limpiarContenido()
    mostrasProductoPagina (arrayC);
    mostrarCarrito(carrito);
});

document.getElementById("soporte").addEventListener("click", function(event) {
  limpiarContenido()
  document.getElementById ("formulario").style.display = "block";
  document.getElementById("enviar").addEventListener("click",function(event){
    storage()
    }) 
});

/* {} `  */
