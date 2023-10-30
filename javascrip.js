
/* function saludar() {
    let nombre = prompt("Bienvenido cual es su nombre");
    if (nombre == 5) {
        alert(" Hola en que podemos ayudarte " + nombre);   
    }   else {
        alert(`${nombre} no es valido`)
    }    
}

saludar(); // Si no escribe un nombre correcto no avanzar hacerlo con while */

let nombre = prompt ("Bienvenido cual es tu nombre")

let opcionUno = "Camaras de Seguridad"
let opcionDos = "Redes"
let opcionTres = "Control de Acceso"
let opcionCuatro = "Servicio tecnico"

function carritoPrecio(carrito){
    let total = 0;
    for (productos of carrito){
        total += productos.precio;
    }
    return total;
}

class Producto{
    constructor(tipo, modelo, precio){
      this.tipo = tipo;
      this.modelo = modelo;
      this.precio = precio;
  }
}
const producto1 = new Producto ("Camara IP", "SD10A248V-HNI-LAS", 5000)
const producto2 = new Producto ("Camara IP", "SD10A248V-HNI-LAS", 5000)
const producto3 = new Producto ("Camara IP", "SD10A248V-HNI-LAS", 5000)

const producto4 = new Producto ("Switch", "CY-S824-10G", 1500)
const producto5 = new Producto ("Switch", "CY-S824-10G", 1500) 
const producto6 = new Producto ("Switch", "CY-S824-10G", 1500)

const producto7 = new Producto ("Control de Acceso", "IMBIO460-PRO", 2000)
const producto8 = new Producto ("Control de Acceso", "IMBIO460-PRO", 2000)
const producto9 = new Producto ("Control de Acceso", "IMBIO460-PRO", 2000)

const arrayA = [producto1, producto2, producto3]
const arrayB = [producto4, producto5, producto6]
const arrayC = [ producto7, producto8, producto9]

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
}
servicios();

/* {} */

/* function opciones(){
    alert(`Nuestros Servicios son ${opcionUno}, ${opcionDos}, ${opcionTres},${opcionCuatro}`);
} */