alert ("Saludos, Bienvenido a La Pizza y el Pancho!");
// En esta variable se guarda lo que el cliente escoge.
let order = prompt("¿Qué deseas comer: pizza o pancho?");
// En estas dos variables se guarda el precio de los productos.

// Un comentario de prueba
let panchoPrice = 50;
let pizzaPrice = 75;
if (order==="pancho") {
    alert ("Usted eligió " + order + " y su precio es de: $" + panchoPrice);
}
if (order==="pizza") {
    alert ("Usted eligió " + order + " y su precio es de: $" + pizzaPrice);
}