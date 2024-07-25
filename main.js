

//Saludo
let saludo = alert("Hola! Bienvenid@ a Gabru! \nEsperamos que nuestros productos sean de tu agrado!")
let nombreUser = prompt("¿Cuál es tu nombre?")

if(nombreUser != "" && nombreUser != null){
    alert("Hola, " + nombreUser + "! \nPuedes pasar a ver nuestros productos.")
}else{
    alert("Es una lástima! Si quieres ver los productos, necesitamos tu nombre. \nAún así, gracias por visitarnos!💋")
    bandera = false
}

//Compra
let bandera = true
const productos = ["Remera", "Top", "Pantalón", "Bermuda", "Zapato"]
let total = 0
const carrito = []

const sumarTotal = (producto, precio, cantidad = 1) =>{
    total += precio * cantidad

    const carritoPalabra = producto[0].toUpperCase() + producto.slice(1)
    
    carrito.push(carritoPalabra + " x" + cantidad)
}

function productosExistentes (producto){
    let cantidad = 1
    switch(producto){
        case "remera":
            cantidad = prompt("¿Cuántas " + producto + " quieres?")
            sumarTotal(producto, 15000, cantidad)
            break
        case "top":
            cantidad = prompt("¿Cuántos " + producto + " quieres?")
            sumarTotal(producto, 12000, cantidad)
            break
        case "pantalon":
            cantidad = prompt("¿Cuántos " + producto + " quieres?")
            sumarTotal(producto, 24000, cantidad)
            break
        case "bermuda":
            cantidad = prompt("¿Cuántas " + producto + " quieres?")
            sumarTotal(producto, 20000, cantidad)
            break
        case "zapato":
            cantidad = prompt("¿Cuántos " + producto + " quieres?")
            sumarTotal(producto, 43000, cantidad)
            break
        default:
            alert("Por ahora no contamos con ese producto!")
            break
    }
}

while(bandera){
    const productoElegido = prompt("Muy bien, " + nombreUser + ". \nAhora, ¿qué desearías comprar? \n- " + productos.join("\n- ")).toLowerCase() 

    productosExistentes(productoElegido)

    bandera = confirm("¿Deseas elegir algo más?")
}

alert(nombreUser + ", elegiste estos productos: \n- " + carrito.join("\n- "))
alert("El sub total de su compra es: " + total)

//Pago
let avisoDePago = alert("Muy bien, " + nombreUser + "! \nAhora vamos a elegir el método de pago.")
const metodoDePago = ["Crédito", "Débito", "Transferencia"]
let pie = true

function pagoConInteres(metodos){
    if (metodos === "credito") {
        total = total * 1.10
        alert("El total a pagar es: " + total.toFixed(2))
    }
    pie = !confirm("¿Deseas confirmar la compra?")
}

function metodosExistentes(metodos){
    switch (metodos) {
        case "credito":
            alert("Pagar con tarjeta de crédito le agrega un 10% de interés a tu compra final.")
            pagoConInteres(metodos)
            break;
        case "debito":
            alert("No hay ningún interés! El precio a pagar sigue siendo el mismo.")
            pagoConInteres(metodos)
            break;
        case "transferencia":
            alert("No hay ningún interés! El precio a pagar sigue siendo el mismo.")
            pagoConInteres(metodos)
            break;
        default:
            alert("Debes elegir un método de pago para finalizar la compra.")
            break;
    }
}

while(pie){
    const elegirPago = prompt("Los métodos de pago con los que trabajamos son: \n- " + metodoDePago.join("\n- ")).toLowerCase()

    metodosExistentes(elegirPago)

    if(pie){
        pie = !confirm("¿Cancelar la compra?")
        pedidoDeMail = false
        userMail = false
    }
}

//Mail
let pedidoDeMail= alert("Ahora, " + nombreUser + ", te pediremos que nos ingreses un mail para poder enviarte los datos de tu compra y coordinar el envío.")
let userMail = prompt("¿Cuál es tu mail?")


if (userMail != "" && userMail != null) {
    alert("Muchas gracias por comprar con nosotros, " + nombreUser + "! \nEn poco tiempo te llegará un correo con los detalles de tu compra y un número para coordinar el envío.")
} else {
    alert("Por favor, danos tu mail para enviarte los detalles de tu compra.")
    do {
        prompt("¿Cuál es tu mail?")
    } while (userMail == "" && userMail == null);
}
