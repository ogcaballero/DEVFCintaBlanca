(function() {
    'use strict';

    function saludo(texto) {
      console.log(texto);
    }

    saludo("Hola desde la funcion saludo!");

    var boton = document.getElementById("guardar");
    console.log(boton);

    boton.addEventListener("click", function() {
      saludo("Hola desde el boton!")
      crearFila()
    })

    function crearFila() {
      var nombre = document.getElementById("nombre");
      var apellidos = document.getElementById("apellidos");
      var email = document.getElementById("email");
      var telefono = document.getElementById("telefono");

      console.log(nombre, apellidos, email, telefono);

      var tabla = document.querySelector(".list table")
      console.log(tabla);

      var nuevaFila = '<tr>'+
                        '<td>'+nombre.value+'</td>'+
                        '<td>'+apellidos.value+'</td>'+
                        '<td>'+email.value+'</td>'+
                        '<td>'+telefono.value+'</td>'+
                        '</tr>';



      tabla.insertRow(-1).innerHTML = nuevaFila;

      nombre.value = "";
      apellidos.value = "";
      email.value = "";
      telefono.value = "";


    }






}());

//
// condicion if else nos
