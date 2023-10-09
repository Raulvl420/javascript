
let nombre = prompt("Bienvenido cual es su nombre");
alert(" Hola en que podemos ayudarte " + nombre);

let opcionUno = "Camaras de Seguridad"
let opcionDos = "Redes"
let opcionTres = "Control de Acceso"
let opcionCuatro = "Servicio tecnico"

function opciones(){
    alert(`Nuestros Servicios son ${opcionUno}, ${opcionDos}, ${opcionTres},${opcionCuatro}`);
}
// sumarle los arrays de cada opcion

function servicios() {
    let opcion;
do{
    opcion = parseInt(prompt( + "1. Camaras de Seguridad\n" + "2. Redes\n" + "3. Control de Accesos\n" + "4. Servicio Tecnico\n"));

switch (opcion){
    case 1:
        alert("Tenemos camaras HDCVI e IP");
        break;
    case 2:
        alert("Ofrecemos intalaciones domiciliarias y empresariales")
        break;
    case 3:
        alert("Ofrecemos sistemas de reconocimiento facial, huella, clave y tarjeta");
        break
    case 4:
        alert("Ofrecemos Soporte remoto y Visita tecnica");
        break    
    default:
        alert("opcion no valida")
}
    } while (opcion !== 4);    
} 

servicios()

let tecnico = prompt("¿Necesita Servicio Tecnico?").toLowerCase();

if(tecnico === "si"){
alert("En Breve nos comunicaremos contigo " + nombre)
}
else{alert("Gracias por su visita")}



    