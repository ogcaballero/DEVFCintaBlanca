// IIFE FUNCIÓN INMEDIATAMENTE INVOCADA CORRE EL JAVASCRIPT SÓLO CUANDO ABRE LA PÁGINA
(() => {
  //MODO ESTRICTO NOS OBLIGA A DECLARAR VARIABLES Y A HACER MÁS SEGURA LA EJECUCIÓN DE NUESTRO CÓDIGO
  'use strict';

  // Verificamos la conexión entre nuestro HTML y nuestro JS
  console.log("Hola, si ves esto, tu Javascript sirve! Yei!");

  // CREAMOS UNA FUNCIÓN QUE SE LLAME SALUDO CUYO ÚNICO ARGUMENTO SEA UN TEXTO QUE SE MUESTRE EN CONSOLA
  function saludo(texto) {
    console.log(texto);
  }

  // HACEMOS UNA PRUEBA DE LA FUNCIÓN SALUDO
  saludo("Hola desde la función saludo!");

  // LOCALIZAMOS EL BOTÓN GUARDAR EN NUESTRO HTML Y LO ALMACENAMOS EN UNA VARIABLE QUE PODEMOS USAR MEDIANTE JS
  var boton = document.getElementById("guardar");
  console.log(boton);

  boton.addEventListener("click", function() {
    saludo("Hola desde el botón!")

    // LLAMAMOS LA FUNCIÓN DESDE EL BOTÓN
    crearFila();
  })


  function crearFila() {

    // PRIMER CAPTURAMOS LOS INPUTS DEL HTML COMO VARIABLES DE JS
    var nombre = document.getElementById("nombre");
    var apellidos = document.getElementById("apellidos");
    var correo = document.getElementById("correo");
    var telefono = document.getElementById("telefono");

    // MOSTRAMOS EN CONSOLA LAS VARIABLES/ELEMENTOS CAPTURADAS
    console.log(nombre, apellidos, correo, telefono);


    var tabla = document.querySelector(".list table");
    console.log(tabla);


    //Forma 1: Construyendo el DOM desde JS concatenando etiquetas HTML y los valores capturados

// // Ya con esos datos capturados, creamos una nueva fila en código HTML como una gran cadena
// // La variable nuevaFila es una concatenación de las etiquetas HTML como cadenas y los valores que ingresa el usuario en cada input

// var nuevaFila = '<tr>'+
//                     '<td>'+nombre.value+'</td>'+
//                     '<td>'+apellidos.value+'</td>'+
//                     '<td>'+correo.value+'</td>'+
//                     '<td>'+telefono.value+'</td>'+
//                 '</tr>';
//
// // Enviamos la nuevaFila a la consola para saber cómo quedó
//
// console.log(nuevaFila);


// Insertamos nuevaFila hasta abajo de la tabla usando el método insertRow(n) donde n es la posición de la tabla

// tabla.innerHTML = tabla.innerHTML + nuevaFila;

// tabla.insertRow(-1).innerHTML = nuevaFila;


//Forma 2: Insertando el valor de cada input celda por celda

// var nuevaFila = tabla.insertRow(-1);
//
// nuevaFila.insertCell(0).innerHTML = nombre.value;
// nuevaFila.insertCell(1).innerHTML = apellidos.value;
// nuevaFila.insertCell(2).innerHTML = correo.value;
// nuevaFila.insertCell(3).innerHTML = telefono.value;


// Forma 3: Insertando cada input en las celdas a través de un ciclo FOR

var nuevaFila = tabla.insertRow(-1);

var datos = [nombre.value, apellidos.value, correo.value, telefono.value]

for (var i = 0; i < datos.length; i++) {
  nuevaFila.insertCell(i).innerHTML = datos[i];
}

    nombre.value = "";
    apellidos.value = "";
    correo.value = "";
    telefono.value = "";

  }


})();
