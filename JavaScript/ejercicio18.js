/*
18. Después de realizar una llamada a un archivo local en formato json, utiliza el método then()
para filtrar los datos y mostrar solo los elementos que cumplan ciertos criterios (por ejemplo,
mostrar solo los nombres que comiencen con "A").
*/

// Definición de una función flecha 'letra' que toma un parámetro 'letra'
const letra = (letra) => letra.charAt(0) === "C";
// IIFE (Immediately Invoked Function Expression) asincrónico
(async () => {
  // Realiza una solicitud para obtener el archivo JSON desde la ruta especificada
  let response = await fetch("../json/ejercicio18.json");
  // Espera a que la respuesta sea convertida en formato JSON
  let aprendiz = await response.json();
  // Imprime en consola los datos obtenidos del archivo JSON
  console.log(aprendiz);
  // Filtra los aprendices cuyos nombres comienzan con la letra "C"
  const resultado = aprendiz.aprendices.filter(letra);
  // Imprime en consola el resultado del filtro
  console.log(resultado);
})();