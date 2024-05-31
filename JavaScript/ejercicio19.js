/*
19. Crea una función asincrónica que realice una llamada a un archivo local en formato json y
luego manipule los datos recibidos para mostrar información específica.
*/

// Definición de una función flecha 'adso' que toma un parámetro 'adso'
const adso = (adso) =>
  // Retorna el título si coincide con "Tecnólogo en Análisis y Desarrollo de Software", de lo contrario retorna null
  adso === "Tecnólogo en Análisis y Desarrollo de Software" ? adso : null;
// IIFE (Immediately Invoked Function Expression) asincrónico
(async () => {
  // Realiza una solicitud para obtener el archivo JSON desde la ruta especificada
  let response = await fetch("../json/ejercicio19.json");
  // Espera a que la respuesta sea convertida en formato JSON
  let programas = await response.json();
  // Verifica si algún programa coincide con el título "Tecnólogo en Análisis y Desarrollo de Software"
  const resultado = programas.programas.some(adso);
  // Imprime en consola el resultado de la búsqueda
  console.log(resultado);
})();