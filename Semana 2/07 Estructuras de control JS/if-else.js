// Condicionales IF-ELSE
//
// Los condicionales sirven para especificar en un bloque de código en Javascript que se ejecutará si la condición se cumple o es verdadera
//
// Estructura y sintáxis básica de una declaración IF-ELSE:
//
// if(condición){
//   es true
//   hacer tarea A
// } else {
//   es false
//   hacer tarea B
// }

var edad = 19;

if (edad >= 18) {
  console.log("Eres mayor de edad porque tienes "+edad+" años")
} else {
  console.log("Eres menor de edad lol tienes "+edad+" años")
}

// IF ANIDADO
// Un if anidado es un if dentro de otro if, por lo general sirve para condicionar distintas variables

var dia = "asoleado"
var hora = 19 //24 horas

if(dia == "nublado") {
  console.log("No salgas :(")
} else {
    // Un if adentro de otro if
    if (hora >= 18){
      console.log("Corre por que vas tarde! D:")
    } else {
      console.log("Hey mi bro, estás a tiempo :)")
    }
}

// Para comparar una igualdad se utiliza doble símbolo de igual ==
// Para comparar una igualdad exacta se utilza triple símbolo igual ===

var numero = 60
var cadena = "60"
console.log(typeof(numero));
console.log(typeof(cadena));

if (numero === cadena) {
  console.log("Son iguales")
} else {
  console.log("Son diferentes")
}


// Para verificar varias condiciones a la misma variable se puede usar else if


var fruta = "limón"

if(fruta == "manzana"){
  console.log("Tu fruta es una manzana")
} else if(fruta == "pera"){
  console.log("Tu fruta es una pera")
} else if(fruta == "uva"){
  console.log("Tu fruta es una uva")
} else if(fruta == "piña"){
  console.log("Tu fruta es una piña")
} else if(fruta == "mango"){
  console.log("Tu fruta es una mango")
} else {
  console.log("Tu fruta no es ni manzana, ni pera, ni uva, ni piña ni mango, tu fruta es: "+fruta)
}

// // Ejercicio 1
// // Crea una aplicación web con JavaScript que reciba tres números digitados por el usuario, mediante prompts, y muestre en pantalla,
//  mediante un alert, cuál es el mayor de los tres números.
// //
// // Ejercicio 2
// // Crea una aplicación web con JavaScript que reciba tres números digitados por el usuario, mediante prompts, y muestre en pantalla,
// mediante un alert, la suma de los tres números.
// //
// // Ejercicio 3
// // Crea una aplicación web empleando JavaScript que permita a dos usuarios jugar una partida de piedra, papel o tijeras.
//
// // Pide al jugador1 y al jugador2 que escriban su elección mediante prompts. Compara los valores ingresados y muestra en pantalla,
//  mediante un alert, quién fue el jugador ganador.
//

// Ejercicio 1
  var numero01;
	var numero02;
  var numero03;

	numero01=parseInt(prompt("Ingrese el numero 1",""));
	numero02=parseInt(prompt("Ingrese el numero 2",""));
  numero03=parseInt(prompt("Ingrese el numero 2",""));


	if(numero01 >= numero02)
	{
        //imprime numero mayor
	document.write("El numero mayor es: " + numero01 + " ( Numero 1 )");
	}
	else if(numero01 >= numero02)
	{
       //imprime numero mayor
	document.write("El Numero mayor es : " + numero02 + " ( Numero 2 )");
	}




// Ejercicio 2

var valor1 = parseInt(prompt("Ingreso el numero 1"))
var valor2 = parseInt(prompt("Ingreso el numero 2"))
var valor3 = parseInt(prompt("Ingreso el numero 3"))

// var edad = 19;
//
// if (valor1 >= valor2 ) {
//   console.log("Eres mayor de edad porque tienes "+edad+" años")
// } else {
//   console.log("Eres menor de edad lol tienes "+edad+" años")
// }

if{maximo}
var suma = valor1 + valor2 + valor3
console.log(suma);

alert("La suma de tus tres números es "+(valor1 + valor2 + valor3))


// console.log(suma)

// var nombre = prompt("Ingresa tu nombre")
// var edad = prompt("Ingresa tu edad")
// var correo = prompt("Ingresa tu correo")
