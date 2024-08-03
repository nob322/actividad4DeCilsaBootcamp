console.log("js cargado con éxito")

//ejercicio2.html
/*estilo1*/
   document.querySelector("#estilo1").addEventListener("click", function() {
    console.log('Click recibido en el botón "estilo1" y estilos nuevos cargados con éxito.');
    //var link = document.querySelector('link[href="/assets/css/styles.css"]');//selecciona una hoja en concreto
    var link = document.querySelector('link[href^="/assets/css/"]');//En este ejemplo, el selector link[href^="/assets/css/"] seleccionará cualquier elemento <link> cuyo atributo href comience con "/assets/css/". Esto te permitirá seleccionar otras hojas de estilo que estén ubicadas en el directorio /assets/css/.
    link.href = "/assets/css/estilo1.css";
});

/*estilo alto contraste*/
  document.querySelector("#altoContraste").addEventListener("click",function(){
  console.log('Click recibido en el botón "estilo de alto contraste" y estilos nuevos cargados con éxito.');
  var link2 = document.querySelector('link[href^="/assets/css/"]');
  link2.href = "/assets/css/altoContraste.css";
})




