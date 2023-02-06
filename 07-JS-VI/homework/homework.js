// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  var letraEnMayus = nombre.charAt(0).toUpperCase();
  var sinPrimerLetra = nombre.slice(1);
  var palabraCompleta = letraEnMayus + sinPrimerLetra;
  return palabraCompleta;
/* var letraMayus = "";
var restoPalabra = "";
for (var i = 0; i < nombre.length; i++) {
  if (i === 0) {
    letraMayus = nombre[i].toUpperCase();
  }else restoPalabra = restoPalabra + nombre[i]
}
return letraMayus + restoPalabra; */
/* var aArray = nombre.split("");
var arrayConMayus = [];
var stringConMayus = ""
for(var i = 0; i < aArray.length; i++){
  if (i === 0) arrayConMayus.push(aArray[i].toUpperCase)
  else arrayConMayus.push(aArray[i])
}
stringConMayus = arrayConMayus.join("")
return stringConMayus; */
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  return cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1,n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  var suma = 0;
  numeros.forEach(function(elementos){suma += elementos})
  cb(suma);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  /* var arrayPasadoPorCallback = array.map(elementos => cb(elementos))
  return arrayPasadoPorCallback; */
  var nuevoArray = array.forEach(elementos => cb(elementos))
  return nuevoArray;
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  var nuevoArray = array.map(elementos => cb(elementos))
  return nuevoArray
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  var palabrasConA = array.filter(elementos => elementos.charAt(0) === "a")
  return palabrasConA;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
