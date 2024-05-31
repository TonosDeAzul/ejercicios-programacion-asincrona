/*
16. Crea tres Promises consecutivas, donde cada una se resuelva después de 1 segundo y
devuelva un número diferente. Luego, encadena las tres Promises para sumar los resultados
y mostrar el resultado final.
*/

// Se crea una nueva promesa que se resuelve después de 1 segundo
new Promise(function (resolve, reject) {
  setTimeout(() => resolve(4), 1000);
})
// La primera promesa se resuelve, entonces se ejecuta esta función de devolución
.then(function (result) {
  console.log(result); // Se imprime el resultado de la primera promesa (4)
  // Se retorna una nueva promesa que se resuelve después de 1 segundo, agregando 4 al resultado anterior
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result + 4), 1000);
  });
})
// La segunda promesa se resuelve, entonces se ejecuta esta función de devolución
.then(function (result) {
  console.log(result); // Se imprime el resultado de la segunda promesa (8)
  // Se retorna una nueva promesa que se resuelve después de 1 segundo, agregando 7 al resultado anterior
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result + 7), 1000);
  });
})
// La tercera promesa se resuelve, entonces se ejecuta esta función de devolución
.then(function (result) {
  console.log(result); // Se imprime el resultado de la tercera promesa (15)
});