/*
17. Realiza una llamada a un archivo local Muestra en formato json, luego muestre los datos
obtenidos en la consola.
*/

// Realiza una solicitud HTTP GET para recuperar el archivo JSON desde la ruta especificada
fetch("../JSON/ejercicio17.json")
  // Cuando se recibe la respuesta, la convierte en formato JSON
  .then((response) => response.json())
  // Después de que los datos se convierten correctamente, se ejecuta esta función de devolución
  .then((data) => console.log(data));