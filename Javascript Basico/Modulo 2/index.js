// Listas, Objetos y Fechas

// Objeto + Listas
const phone = {
  alto: 1920,
  ancho: 1080,
  marca: 'Motorola',
  isWhite: false,
  contactos: ['Noraklav', 'Zero', 'Crypther'],
  microSD:{
    marca: 'Sandisk',
    capacidad: 64
  }
}

console.log(phone.contactos[1]);
isNaN(phone.alto)?console.log(true):console.log(false);

// Fechas
const now = new Date()
console.log(now);

/* It's creating a new date object with the value of 10 milliseconds. */
const fecha_milis = new Date(10)
console.log(fecha_milis);

// Year, Month, Day, Hour, Minutes...
const fecha_valores = new Date(2000, 2, 16, 16, 55)
console.log(fecha_valores);