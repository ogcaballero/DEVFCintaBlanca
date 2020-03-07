(function() {
  'use strict';


  var flags = [{
      "name": "México",
      "description": "es un país de América ubicado en la parte meridional de América del Norte con capital en la Ciudad de México Políticamente es una república representativa, democrática, federal y laica, compuesta por 32 entidades federativas (31 estados y la capital federal)",
      "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/250px-Flag_of_Mexico.svg.png",
      "see_more": "https://es.wikipedia.org/wiki/M%C3%A9xico"
    },
    {
      "name": "China",
      "description": "s un Estado soberano situado en Asia Oriental. Es el país más poblado del mundo, con 1395 millones de habitantes, y la primera potencia económica mundial por PIB, en términos de paridad de poder adquisitivo.81617 La República Popular China es un Estado unipartidista gobernado por el Partido Comunista y tiene la sede de su gobierno en la capital, Pekín.",
      "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/250px-Flag_of_the_People%27s_Republic_of_China.svg.png",
      "see_more": "https://es.wikipedia.org/wiki/Rep%C3%BAblica_Popular_China"
    },
    {
      "name": "Francia",
      "description": "es un país soberano, miembro de la Unión Europea, cuya forma de gobierno es la república semipresidencialista. Territorialmente comprende la Francia metropolitana y la Francia de ultramar, siendo a su vez el país más grande de la Unión Europea.",
      "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/250px-Flag_of_France.svg.png",
      "see_more": "https://es.wikipedia.org/wiki/Francia"
    },
    {
      "name": "Brasil",
      "description": "es un país soberano de América del Sur que comprende la mitad oriental del subcontinente y algunos grupos de pequeñas islas en el océano Atlántico.",
      "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/250px-Flag_of_Brazil.svg.png",
      "see_more": "https://es.wikipedia.org/wiki/Brasil"
    },
    {
      "name": "Estados Unidos",
      "description": "es un país soberano constituido en república federal constitucional compuesta por cincuenta estados y un distrito federal. La mayor parte del país se ubica en el medio de América del Norte —donde se encuentran sus cuarenta y ocho estados contiguos y Washington D. C",
      "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/250px-Flag_of_the_United_States.svg.png",
      "see_more": "https://es.wikipedia.org/wiki/Estados_Unidos"
    },
    {
      "name": "Alemania",
      "description": "es un país soberano centroeuropeo, miembro de la Unión Europea, constituido en Estado social y democrático de derecho y cuya forma de gobierno es la república parlamentaria y federal. ",
      "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/250px-Flag_of_Germany.svg.png",
      "see_more": "https://es.wikipedia.org/wiki/Alemania"
    },
    {
      "name": "Japón",
      "description": "es un país soberano insular del este de Asia. Situado en el océano Pacífico; tiene al oeste el mar del Japón, China, Corea del Norte, Corea del Sur y Rusia, al norte el mar de Ojotsk y al este y sur el mar de China Oriental y Taiwán. ",
      "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/250px-Flag_of_Japan.svg.png",
      "see_more": "https://es.wikipedia.org/wiki/Jap%C3%B3n"
    },
    {
      "name": "España",
      "description": "es un país transcontinental, miembro de la Unión Europea, constituido en Estado social y democrático de derecho y cuya forma de gobierno es la monarquía parlamentaria. Su territorio, con capital en Madrid,29 está organizado en diecisiete comunidades autónomas, formadas a su vez por cincuenta provincias, y dos ciudades autónomas.",
      "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/250px-Flag_of_Spain.svg.png",
      "see_more": "https://es.wikipedia.org/wiki/Espa%C3%B1a"
    },
    {
      "name": "Argentina",
      "description": "es un país soberano de América del Sur, ubicado en el extremo sur y sudeste de dicho subcontinente. Adopta la forma de gobierno republicana, democrática, representativa y federal.",
      "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/250px-Flag_of_Argentina.svg.png",
      "see_more": "https://es.wikipedia.org/wiki/Argentina"
    },
    {
      "name": "Tailandia",
      "description": "es uno de los cuarenta y nueve países que componen el continente asiático. Su capital y ciudad más poblada es Bangkok, centro de la actividad política, comercial, e industrial.",
      "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/250px-Flag_of_Thailand.svg.png",
      "see_more": "https://es.wikipedia.org/wiki/Tailandia"
    },
    {
      "name": "Suecia",
      "description": "es un país escandinavo de Europa del Norte que forma parte de la Unión Europea (UE). Limita al norte con Noruega y Finlandia, al este con Finlandia y el golfo de Botnia, al sur con el mar Báltico y al oeste con el mar del Norte y Noruega. ",
      "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/250px-Flag_of_Sweden.svg.png",
      "see_more": "https://es.wikipedia.org/wiki/Suecia"
    },
    {
      "name": "Uruguay",
      "description": "es un país de América del Sur, situado en la parte oriental del Cono Sur americano. Limita al noreste con Brasil —estado de Río Grande del Sur—, al oeste y suroeste con Argentina —provincias de Entre Ríos, Corrientes, Buenos Aires y la Ciudad Autónoma de Buenos Aires— y tiene costas en el océano Atlántico por el sur.",
      "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/250px-Flag_of_Uruguay.svg.png",
      "see_more": "https://es.wikipedia.org/wiki/Uruguay"
    },
    {
      "name": "Portugal",
      "description": " es un país soberano miembro de la Unión Europea, constituido como un estado de derecho democrático. Es un país transcontinental, su territorio, con capital en Lisboa, está situado en el suroeste de Europa, en la península ibérica. Limita al este y al norte con España, y al sur y oeste con el océano Atlántico. ",
      "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/250px-Flag_of_Portugal.svg.png",
      "see_more": "https://es.wikipedia.org/wiki/Portugal"
    },
    {
      "name": "Canadá",
      "description": "s un país soberano de América del Norte, cuya forma de gobierno es la monarquía parlamentaria federal. Su territorio está organizado en diez provincias y tres territorios. Su capital es la ciudad de Ottawa y la ciudad más poblada es Toronto.",
      "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Canada.svg/250px-Flag_of_Canada.svg.png",
      "see_more": "https://es.wikipedia.org/wiki/Canad%C3%A1"
    },
    {
      "name": "Rusia",
      "description": "es el país más extenso del mundo. La Federación de Rusia cuenta con una superficie de 17 098 242 km2,1 equivalente a la novena parte de la tierra firme del planeta, y con gran variedad de relieve y de ecosistemas. Su capital es la ciudad federal de Moscú.",
      "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/250px-Flag_of_Russia.svg.png",
      "see_more": "https://es.wikipedia.org/wiki/Rusia"
    },
    {
      "name": "Turquía",
      "description": "es un país soberano intercontinental 4 ubicado en Asia y Europa que se extiende por toda la península de Anatolia y Tracia en la zona de los Balcanes.",
      "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/250px-Flag_of_Turkey.svg.png",
      "see_more": "https://es.wikipedia.org/wiki/Turqu%C3%ADa"
    },
    {
      "name": "Egipto",
      "description": "es un país soberano de África en la parte más occidental del Máshrek. Es un país transcontinental, está ubicado mayoritariamente en el extremo noreste de África mientras que en Asia, se encuentra en la península del Sinaí. ",
      "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/250px-Flag_of_Egypt.svg.png",
      "see_more": "https://es.wikipedia.org/wiki/Egipto"
    },
    {
      "name": "Perú",
      "description": "es un país soberano ubicado al oeste de América del Sur. El océano Pacífico bordea su costa y limita con Ecuador y Colombia al norte, Brasil al este, y Bolivia y Chile al sureste. Su territorio se compone de diversos paisajes: los valles, las mesetas y las altas cumbres de los Andes se despliegan al oeste hacia la costa desértica y al este hacia la Amazonia. ",
      "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/250px-Flag_of_Peru.svg.png",
      "see_more": "https://es.wikipedia.org/wiki/Per%C3%BA"
    },
    {
      "name": "Corea del Sur",
      "description": " para distinguirla de Corea del Norte,5 es un país soberano de Asia Oriental, ubicado en la parte sur de la península de Corea. Limita al norte con la República Popular Democrática de Corea (RPDC o Corea del Norte), con la cual formó un solo país hasta 1945. ",
      "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/250px-Flag_of_South_Korea.svg.png",
      "see_more": "https://es.wikipedia.org/wiki/Corea_del_Sur"
    },
    {
      "name": "Italia",
      "description": " es un país miembro de la Unión Europea, cuya forma de gobierno es la república parlamentaria. Su territorio, con capital en Roma, se divide en veinte regiones formadas estas, a su vez, por 110 provincias.",
      "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/250px-Flag_of_Italy.svg.png",
      "see_more": "https://es.wikipedia.org/wiki/Italia"
    },
    {
      "name": "Guatemala",
      "description": "es un Estado soberano situado en América Central, en su extremo noroccidental, con una amplia cultura autóctona producto de la cultura maya y la cultura castellana durante la época virreinal española; también poseen la ciudad más grande de América Central y la más poblada siendo esta su capital Ciudad de Guatemala; es el país más poblado de América Central, con más de 17 millones de habitantes.7",
      "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Flag_of_Guatemala.svg/250px-Flag_of_Guatemala.svg.png",
      "see_more": "https://es.wikipedia.org/wiki/Guatemala"
    },
    {
      "name": "Singapur",
      "description": "es un país soberano insular de Asia, formado por sesenta y tres islas, cuya forma de gobierno es la república parlamentaria.",
      "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/250px-Flag_of_Singapore.svg.png",
      "see_more": "https://es.wikipedia.org/wiki/Singapur"
    },
    {
      "name": "Croacia",
      "description": "es una república democrática parlamentaria, miembro de la Unión Europea, ubicada entre Europa Central, Europa meridional y el mar Mediterráneo; limita al noreste con Hungría, al este con Serbia, al sureste con Bosnia-Herzegovina y Montenegro, al noroeste con Eslovenia y al suroeste con el mar Adriático; donde comparte una frontera marítima con Italia.",
      "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/250px-Flag_of_Croatia.svg.png",
      "see_more": "https://es.wikipedia.org/wiki/Croacia"
    },
    {
      "name": "Colombia",
      "description": "es un país soberano situado en la región noroccidental de América del Sur, que se constituye en un estado unitario, social y democrático de derecho cuya forma de gobierno es presidencialista.",
      "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/250px-Flag_of_Colombia.svg.png",
      "see_more": "https://es.wikipedia.org/wiki/Colombia"
    },
    {
      "name": "Cuba",
      "description": "es un país soberano insular asentado en un archipiélago del mar Caribe. El territorio está organizado en quince provincias y un municipio especial con La Habana como capital y ciudad más poblada.",
      "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_Cuba.svg/250px-Flag_of_Cuba.svg.png",
      "see_more": "https://es.wikipedia.org/wiki/Cuba"
    },
    {
      "name": "Inglaterra",
      "description": "Su territorio está formado geográficamente por la parte sur y central de Gran Bretaña, isla que comparte junto a Escocia y Gales, y cerca de 100 islas más pequeñas como las islas Sorlingas y la isla de Wight. Limita al norte con Escocia, al oeste con Gales ",
      "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/200px-Flag_of_England.svg.png",
      "see_more": "https://es.wikipedia.org/wiki/Inglaterra"
    },
  ];



  // function crearFila() {
  //
  // // PRIMER CAPTURAMOS LOS INPUTS DEL HTML COMO VARIABLES DE JS
  // var name = document.getElementById("nombre");
  // var description = document.getElementById("description");
  // var flag = document.getElementById("bandera");
  // var see_more = document.getElementById("see_more");
  //
  // console.log(flag, nombre, description see_more);

  function construirTarjeta(pais) {

    let tarjetapais = '<div class="col-lg-3 col-md-6">' +
      '<div class="card h-100">' +
      '<img src="' + pais.flag + '" alt="" class="card-img-top">' +
      '<div class="card-body">' +
      '<h4 class="card-title">' + pais.name + '</h4>' +
      '<p class="card-text">' + pais.description + '</p>' +
      '</div>' +
      '<div class="card-footer ">' +
      '<a href="' + pais.see_more + '" class="btn btn-info ">Más Info!</a>' +
      '</div>' +
      '</div>' +
      '</div>';

    return tarjetapais;
  }

  // console.log(construirTarjeta(flags[0]))

  var banderas = document.getElementById("banderas")

  for (var i = 0; i < flags.length; i++) {
    banderas.innerHTML = banderas.innerHTML + construirTarjeta(flags[i]);
  }



  //
  // var nuevaFila = tabla.insertRow(-1);
  // var datos = [nombre.value, apellidos.value, correo.value, telefono.value]
  //
  // for (var i = 0; i < datos.length; i++) {
  //   nuevaFila.insertCell(i).innerHTML = datos[i];
  // }

  //
  // function newFlag() {
  // var newdiv  = document.createElement('div');
  // newdiv.className+='item';
  //
  // var newp = document.createElement('p');
  // newp.innerHTML = "TItle";
  //
  // newdiv.appendChild(newp);
  // document.getElementById('main').appendChild(newdiv);
  // }


}());
