// Crea un archivo JS que contenga las siguientes líneas
// - Una cadena de texto con tu Nombre
let myName = 'Agustin'

// - Otra cadena de texto con tu Apellido
let mySurname = 'Di Vincenzo'

// - Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let student = `Estudiante ${myName} ${mySurname}`
console.log(`${student}`);

// - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
console.log(student.toUpperCase());

// - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
console.log(student.toLowerCase());

// - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
console.log(student.length);

// - Una variable que contenga la primera letra del Nombre
let firstLetterName = myName.charAt(0)
console.log(firstLetterName);

// - Otra variable que contenga la última letra del Apellido
let lastLetterName = mySurname.slice(-1)
console.log(lastLetterName);

// - Una cadena de texto que elimine los espacios de la variable "estudiante"
console.log(`${student.trim()}`);

// - Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
student.includes('Agustin')? console.log(true):console.log(false);