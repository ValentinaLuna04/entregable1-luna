//
const productos = document.getElementById("productos")
const carrito = document.getElementById("carrito")
const numCar = document.getElementById("cuentaCar")
const Carrito = JSON.parse(localStorage.getItem("carrito")) || []

//Array productos
const Productos = [
    {
        image: "./remeras/calavera.jpg",
        nombre: "Remera Oversize Calavera",
        precio: 15000,
    },
    {
        image: "./remeras/costillas.jpg",
        nombre: "Remera Oversize Costillas",
        precio: 13400,
    },
    {
        image: "./remeras/dragon.jpg",
        nombre: "Remera Oversize Dragon",
        precio: 16200,
    },
    {
        image: "./remeras/estrellas.jpg",
        nombre: "Remera Oversize Estrellas",
        precio: 14700,
    },
    {
        image: "./remeras/gatitos.jpg",
        nombre: "Remera Oversize Gatitos",
        precio: 15500,
    },
    {
        image: "./remeras/gatitos2.jpg",
        nombre: "Remera Oversize Washing\nKittens",
        precio: 15500,
    },
    {
        image: "./remeras/gatobolsa.jpg",
        nombre: "Remera Oversize Gatito\nembolsado",
        precio: 15800,
    },
    {
        image: "./remeras/gatobolsa2.jpg",
        nombre: "Remera Oversize Gatito\nembolsado Gris",
        precio: 15800,
    },
    {
        image: "./remeras/koi.jpg",
        nombre: "Remera Oversize Koi",
        precio: 14900,
    },
    {
        image: "./remeras/kuromirem.jpg",
        nombre: "Remera Oversize Kuromi Blanca",
        precio: 17200,
    },
    {
        image: "./remeras/kuromirem.jpg",
        nombre: "Remera Oversize Kuromi Negra",
        precio: 17200,
    },
    {
        image: "./remeras/osotoso.jpg",
        nombre: "Remera Oversize Oso",
        precio: 14000,
    },
]

//Funcionalidades
//Carrito

const sumadorCarrito = (nombre) => {
    const producto = Carrito.find(el => {
        return el.nombre === nombre
    })
    producto.cantidad += 1
    actualizador()
}

const restadorCarrito = (nombre) => {
    const producto = Carrito.find(el => {
        return el.nombre === nombre
    })
    if (producto.cantidad <= 1) {
        let arrayDeNombres = Carrito.map(el => {
            return nombre
        })
        let index = arrayDeNombres.indexOf(nombre)
        Carrito.splice(index, 1)
    } else {
    producto.cantidad -= 1        
    }
    actualizador()
}

const creadorCardsCarrito = (nombre, precio, cantidad) => {
    const container = document.createElement("div")
    const nombreCar = document.createElement("h3")
    const precioCar = document.createElement("p")
    const containerCant = document.createElement("div")
    const cantidadCar = document.createElement("p")
    const botonMas = document.createElement("button")
    const botonMenos = document.createElement("button")

    container.classList.add("contenedorCar")
    nombreCar.classList.add("nombreCar")
    precioCar.classList.add("precioCar")
    containerCant.classList.add("containerCant")
    cantidadCar.classList.add("cantidadCar")
    botonMas.classList.add("mas")
    botonMenos.classList.add("menos")


    precioCar.innerText = "$" + precio
    nombreCar.innerText = nombre
    cantidadCar.innerText = cantidad
    botonMas.innerText = "+"
    botonMenos.innerText = "-"
    

    botonMas.addEventListener("click", () => {
        sumadorCarrito(nombre)
    })
    botonMenos.addEventListener("click", () => {
        restadorCarrito(nombre)
    })

    containerCant.appendChild(botonMenos)
    containerCant.appendChild(cantidadCar)
    containerCant.appendChild(botonMas)
    
    
    container.appendChild(nombreCar)
    container.appendChild(precioCar)
    container.appendChild(containerCant)
    

    return container
}

const actualizador = () => {
    carrito.innerText = ""

    const totalCar = document.createElement("p")
    const total = Carrito.reduce((acc, el) => {
        return acc + el.cantidad * el.precio
    },0)
    totalCar.innerText = "Precio total: $" + total

    totalCar.classList.add("totalCar")
    
    const totalUnidad = document.createElement("p")
    const totalUni = Carrito.reduce((acc, el) => {
        return acc + el.cantidad
    },0)
    totalUnidad.innerText = "Unidades totales: " + totalUni

    totalUnidad.classList.add("totalUni")

    Carrito.forEach(el => {
        carrito.appendChild(creadorCardsCarrito(el.nombre, el.precio, el.cantidad))
        carrito.appendChild(totalUnidad)
        carrito.appendChild(totalCar)
    })
    numeroCar()
    localStorage.setItem("carrito", JSON.stringify(Carrito))
}

const agregarAlCarrito = (nombre, precio) => {
    const bandera = Carrito.some(el => {
        return el.nombre === nombre
    })
    if (bandera) {
        const producto = Carrito.find(el => {
            return el.nombre === nombre
        })
        producto.cantidad += 1
    } else {
        Carrito.push({
            nombre,
            precio,
            cantidad: 1
        })
    }
    actualizador()
}

//Cards
const creadorCards = (image, nombre, precio) => {
    const container = document.createElement("div")
    const imageDOM = document.createElement("img")
    const nombreDOM = document.createElement("h3")
    const precioDOM = document.createElement("p")
    const botonBuy = document.createElement("button")

    container.classList.add("contenedor")
    imageDOM.classList.add("imageDOM")
    nombreDOM.classList.add("nombreDOM")
    precioDOM.classList.add("precioDOM")
    botonBuy.classList.add("buy")

    precioDOM.innerText = "$" + precio
    nombreDOM.innerText = nombre
    imageDOM.src = image
    botonBuy.innerText = "Comprar"

    botonBuy.addEventListener("click", () =>{
        agregarAlCarrito(nombre, precio)
    })

    container.appendChild(imageDOM)
    container.appendChild(nombreDOM)
    container.appendChild(precioDOM)
    container.appendChild(botonBuy)

    return container
}

Productos.forEach (el => {
    const productosDOM = creadorCards(el.image, el.nombre, el.precio)

    productos.appendChild(productosDOM)
})

document.addEventListener("DOMContentLoaded", () => {
    actualizador()
})

const numeroCar = ()=>{
    const cuenta = Carrito.reduce((acc, el) => {
        return acc + el.cantidad
    },0)
    numCar.innerText = cuenta
}