// No cambies los nombres de las funciones.

const { join } = require("@11ty/eleventy/src/TemplatePath");

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  /* var array = [];
  for (var i in objeto) {
    array.push([i, objeto[i]]);
  }
  return array; */
  
  var matriz = [];
  for (var prop in objeto) {
    matriz.push([prop, objeto[prop]])
  }
  return matriz;
 // return objeto.entries(objeto);
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  /* var objeto = {};
  for (var i = 0; i < string.length; i++){
    if (objeto.hasOwnProperty(string[i])) {
      objeto[string[i]] = objeto[string[i]] + 1;
    }else {
      objeto[string[i]] = 1
    }
  }
  return objeto; */
  var arrayDelString = string.split("");
  var arrayOrdenado = arrayDelString.sort();
  var objeto = {};
  for (var letra of arrayOrdenado) {
    if (objeto[letra]) objeto[letra] += 1 
    else objeto[letra] = 1
  }
  return objeto;
}

function capToFront(string) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  /* var otraString = "";
  var otraString1 = "";
  for (var i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) otraString += string[i]
    else otraString1 += string[i];
  }
  return otraString + otraString1;
   */
  /* var arrayDelString = string.split("");
  var mayuscula = [];
  var minuscula = [];
  for (var letra of arrayDelString){
    if (letra === letra.toUpperCase()) mayuscula.push(letra);
    else minuscula.push(letra);
  }
  return mayuscula.join("") + minuscula.join(""); */
  /* var unionDeMayusculaMinuscula = mayuscula.concat(minuscula);
  var stringOrdenado = unionDeMayusculaMinuscula.join("");
  return stringOrdenado; */
  var arrayDelString = string.split("");
  var arrayDeMinusculas = [];
  var arrayDeMayusculas = [];
  for (var letra of arrayDelString){
    if (letra === letra.toUpperCase()) arrayDeMayusculas.push(letra);
    else arrayDeMinusculas.push(letra);
  }
  var stringOrdenado = arrayDeMayusculas.join("") + arrayDeMinusculas.join("");
  return stringOrdenado;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer 
  //de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var arrayStr = str.split(" ");
  var palabrasAlRevez = "";
  for (var i = 0; i < arrayStr.length; i++) {
    if (i !== 0) palabrasAlRevez += " " + arrayStr[i].split("").reverse().join("");
    else palabrasAlRevez += arrayStr[i].split("").reverse().join("");
  }
  return palabrasAlRevez;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var deNumeroAString = String(numero);
  var array = deNumeroAString.split("");
  var alRevez = array.reverse().join("");
  if (deNumeroAString === alRevez) {
    return "Es capicua";
  }
  return "No es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
var arrayDeCadena = cadena.split("");
var nuevoArray = [];
for (let i = 0; i < arrayDeCadena.length; i++) {
  if (arrayDeCadena[i] === "a" || arrayDeCadena[i] === "b" || arrayDeCadena[i] === "c") continue;
  else nuevoArray.push(arrayDeCadena[i])
}
return nuevoArray.join("");
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || 
  //Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  return arr.sort(function(a,b){
    return a.length - b.length;
  })
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var arrelgo = [];
  for (let i = 0; i < arreglo1.length; i++) {
    for (let j = 0; j < arreglo2.length; j++) {
      if (arreglo1[i] === arreglo2[j]) arrelgo.push(arreglo1[i])
    }
  }
  return arrelgo
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

