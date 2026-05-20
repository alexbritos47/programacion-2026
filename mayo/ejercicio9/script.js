
console.log("1------------------------------------------");

console.log('HOLA MUNDO');




console.log("2------------------------------------------");
let nombre = prompt("¿Cómo te llamas?");

console.log("Hola, " + nombre + "!");





console.log("3------------------------------------------");

let numero1 = Number(prompt("Ingresa el primer número:"));
let numero2 = Number(prompt("Ingresa el segundo número:"));
let suma = numero1 + numero2;

console.log("La suma de " + numero1 + " y " + numero2 + " es: " + suma);





console.log("4------------------------------------------");


let numero = (prompt("Ingresa SU EDAD:"));
if (numero >= 18) {
    console.log("Eres mayor de edad.");
}
else {
    console.log("Eres menor de edad.");
}






console.log("5------------------------------------------");


let numeroA = (prompt("Ingresa un número:"));
if (numeroA % 2 === 0) {
    console.log("El número es par.");
} else {
    console.log("El número es impar.");
}


console.log("6------------------------------------------");


let a = (prompt("Ingresa un número:"));
let b = (prompt("Ingresa otro número:"));
let c = (prompt("Ingresa un tercer número:"));
let mayor = Math.max(a, b, c);
console.log("El mayor es: " + mayor);



console.log("7------------------------------------------");

let nota = (prompt("Ingresa tu nota del 1 al 10:"));
if (nota === 10) {
    console.log("aprbado");
} else if (nota >= 5) {
    console.log("safas");
} else if (nota >= 1) {
    console.log("estas en la b");
}


console.log("8------------------------------------------");

for (let i = 1; i <= 10; i++) {
    console.log("Contador: " + i);
}


console.log("9------------------------------------------");

for (let i = 1; i <= 20; i++) {
    console.log(i);
}

console.log("10------------------------------------------");

let contraseña = prompt("Ingresa la contraseña:");
if (contraseña === "1234") {
    console.log("Correcta");
} else {
    console.log("Incorrecta");
}

console.log("12------------------------------------------");

let calculador = prompt("¿Qué operación deseas realizar? (suma, resta, multiplicación, división)");
let num1 = Number(prompt("Ingresa el primer número:"));
let num2 = Number(prompt("Ingresa el segundo número:"));
let resultado;


switch (calculador) {
    case "suma":
        resultado = num1 + num2;    
        break;
    case "resta":
        resultado = num1 - num2;
        break;
    case "multiplicación":
        resultado = num1 * num2;
        break;
 
}

console.log("13-------------------------------------------");

let minimenu = prompt("¿Qué deseas hacer? (saludar, despedir, preguntar)");

switch (minimenu) {
    case "saludar":
        console.log("¡Hola!");
        break;
    case "despedir":
        console.log("¡Adiós!");
        break;
    case "preguntar":
        console.log("¿Cómo estás?");    
        break;
  
}

console.log("14------------------------------------------");

let numeroDel1Al10 = Number(prompt("Ingresa un número del 1 al 10:"));
switch (numeroDel1Al10) {
    case 1: 
        console.log("Uno");
        break;
    case 2:
        console.log("Dos");
        break;
    case 3:
        console.log("Tres");
        break;
    case 4:
        console.log("Cuatro");
        break;
    case 5:
        console.log("Cinco");
        break;
    case 6:
        console.log("Seis");
        break;
    case 7:
        console.log("Siete");
        break;
    case 8:
        console.log("Ocho");
        break;
    case 9:
        console.log("Nueve");
        break;
    case 10:
        console.log("Diez");
        break;
    
}

console.log("16------------------------------------------");

let nombres = [];
for (let i = 0; i < 5; i++) {
    let nombre = prompt("Ingresa un nombre:");
    nombres.push(nombre);
}

console.log("17------------------------------------------");
 let numeroArray = [];
for (let i = 0; i < 5; i++) {
    let numero = Number(prompt("Ingresa un número:"));
    numeroArray.push(numero);
}
console.log("18------------------------------------------");
let  paroimpar
let numeros = [];
for (let i = 0; i < 5; i++) {
    let numero = Number(prompt("Ingresa un número:"));
    numeros.push(numero);
}
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log(numeros[i] + " es par.");
    } else {
        console.log(numeros[i] + " es impar.");
    }   
}

console.log("21------------------------------------------")
let array = [1, 2, 3, 4, 5];
console.log("El array tiene " + array.length + " elementos.");  
