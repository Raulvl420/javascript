//Creación de las etiquetas
//1 paso
//creación de la etiqueta
// let div = document.createElement("div");

//2 paso
//agregado de contenido
// div.innerHTML = "Hola a todos";

//3 paso
//asignación de un padre
//1 opcion en el body
// document.body.append(div);

//2 opción en un contenedor
// let contenedor = document.getElementById("contenedor");
// contenedor.push(div);

// const productos = [
//   { id: 1, nombre: "pantalon", precio: 1000 },
//   { id: 2, nombre: "camisa", precio: 700 },
// ];

// localStorage.setItem("carrito", JSON.stringify(productos));

// const agregarProducto = (nombre, precio) => {
//   //traer datos del storage
//   let productosJson = localStorage.getItem("carrito");
//   let productos = JSON.parse(productosJson);

//   //administrar el arreglo
//   let producto = {
//     id: productos.length + 1,
//     nombre,
//     precio,
//   };

//   productos.push(producto);

//   //actualización del storage
//   localStorage.setItem("carrito", JSON.stringify(productos));
// };

// let nombre = prompt("Ingrese el nombre del producto");
// let precio = Number(prompt("Ingrese el precio del producto"));

// agregarProducto(nombre, precio);

//Crear una función para eliminar un producto por su id

// const eliminarProducto = (id) => {
//   let productosJson = localStorage.getItem("carrito");
//   let productos = JSON.parse(productosJson);

//   let productosFiltrados = productos.filter((item) => item.id != id);

//   localStorage.setItem("carrito", JSON.stringify(productosFiltrados));
// };

// let id = Number(prompt("Ingrese el id del producto a eliminar"));
// eliminarProducto(id);

//una función que dado el id mmodifique el precio de un producto
/* 
const modificarPrecio = (id, precio) => {};

function servicios() {
    let opcion;
    let soporte;
    let carrito = [];
do{
    opcion = parseInt(prompt("En que podemos ayudarte?\n" + "1. Camaras de Seguridad\n" + "2. Redes\n" + "3. Control de Accesos\n" + "4. Servicio Tecnico\n" + "5. Finalizar compra\n" + "6. Salir\n" ));

switch (opcion){
    case 1:
        let modelosCamara = arrayA.map(producto =>`${producto.tipo}: ${producto.modelo}, Precio: $${producto.precio}`);
        let seleccionCamara = prompt("Que modelo buscas:\n" + modelosCamara.join("\n")); // como ponerle un numero a cada producto del array?
        if (seleccionCamara >= 1 && seleccionCamara <= arrayA.length){
            carrito.push(arrayA[seleccionCamara -1]);
            alert("Producto agregado")
        }   else {
                  alert("Ingrese un modelo valido")  
        }
        break;
    case 2:
        let modelosRedes = arrayB.map(producto =>`${producto.tipo}: ${producto.modelo}, Precio: $${producto.precio}`);
        let seleccionRedes = prompt("Que modelo buscas:\n" + modelosRedes.join("\n"));
        if (seleccionRedes >= 1 && seleccionRedes <= arrayA.length){
            carrito.push(arrayB[seleccionRedes -1]);
            alert("Producto agregado")
        }   else {
                  alert("Ingrese un modelo valido")  
        }
        break;
    case 3:
        let modelosAcceso = arrayC.map(producto =>`${producto.tipo}: ${producto.modelo}, Precio: $${producto.precio}`);
        let seleccionAcceso = prompt("Que modelo buscas:\n" + modelosAcceso.join("\n"));
        if (seleccionAcceso >= 1 && seleccionAcceso <= arrayA.length){
            carrito.push(arrayC[seleccionAcceso -1]);
            alert("Producto agregado")
        }   else {
                  alert("Ingrese un modelo valido")  
        }
        break;
    case 4:
        soporte = prompt("Necesita soporte tecnico?")
        if(soporte === "si"){
            const tiempoEstimado = new Date();
            tiempoEstimado.setHours(tiempoEstimado.getHours() + 3);
            let numeroTelefono = prompt("En Breve nos comunicaremos contigo "  + nombre + " indicanos tu numero telefonico")
            alert(" Gracias por brindarnos su numero telefonico, te contactaremos el " + tiempoEstimado.toLocaleString() + ".") 
            }
            else{alert("Gracias por su visita")}
        break;
    case 5:
        const totalCarrito = carritoPrecio(carrito);
        if (carrito.length === 0) {
        alert("El carrito está vacío.");
    }   else {
        alert("Sus productos son:\n" + carrito.map(producto => `${producto.tipo}: ${producto.modelo}, Precio: $${producto.precio}`).join("\n") + "\n\nTotal a pagar: $" + totalCarrito);
    }
    break;
    case 6:
        alert("Gracias por su visita")
        break;        
    default:
        alert("opcion no valida")
}   
    } while (opcion !== 6);

 */

fetch("./productos.json")
.then(response => response.json())
.then((productos)=>console.log(productos));