let productoSeleccionado = parseInt(
    prompt(
        "Escoge el producto que deseas comprar: 1.Mesa - 2.Silla - 3.Sillon - 4.Cama"
    )
);
let seguirComprando = true;
let totalCompra = 0;
let decision;
// Arreglo de productos
const productosArray = [];
//Clase producto

class NewProduct {
    constructor(id, name, price, stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
}
const mesa = new NewProduct(1, "Mesa", 800, 20);
productosArray.push(mesa);
const silla = new NewProduct(2, "Silla", 400, 40);
productosArray.push(silla);
const sillon = new NewProduct(3, "Sillon", 2000, 30);
productosArray.push(sillon);
const cama = new NewProduct(4, "Cama", 1000, 15);
productosArray.push(cama);

const carrito = []
while (seguirComprando === true) {

    const producto = productosArray.find(
        (prod) => prod.id === productoSeleccionado
    );
    if (producto) {
        carrito.push(producto);
    }


    decision = parseInt(prompt("Quieres seguir comprando? 1.Si - 2.No"));

    if (decision === 1) {
        productoSeleccionado = parseInt(
            prompt(
                "Escoge el producto que deseas comprar: 1.Mesa - 2.Silla - 3.Sillon - 4.Cama"
            )
        );
    } else {
        seguirComprando = false;
    }
}


totalCompra = carrito.map(producto => producto.price).reduce((a, b) => a + b)
carrito.forEach(producto => {
    totalCompra = totalCompra + producto.price
})
console.log(carrito);
console.log(totalCompra);

const totalCompraConDescuento = descuento(totalCompra)
alert(`El total de tu compra es ${totalCompraConDescuento}`)


function descuento(valor) {
    let descuento = 0;
    if (valor <= 1000) {
        descuento = 10;
    } else if (valor > 1000 && valor <= 2000) {
        descuento = 15;
    } else {
        descuento = 20;
    }
    let valorDescuento = valor * (descuento / 100);
    let valorFinal = valor - valorDescuento;
    return valorFinal;
}
