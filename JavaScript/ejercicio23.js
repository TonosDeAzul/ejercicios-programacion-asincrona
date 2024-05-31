/*
23. Realiza una llamada a un archivo local en formato json y maneja posibles errores utilizando
try/catch para mostrar un mensaje de error en caso de fallo.
*/

(async () => {
  try {
    // Se realiza una solicitud de red para obtener el archivo JSON
    let response = await fetch("../json/ejercicio233.json");
    // En caso de que la solicitud no sea exitosa (status code diferente de 200-299)
    if (!response.ok) {
      // Se lanza un error indicando que no se pudo conectar junto con el status code de la respuesta
      throw new Error(`No se pudo conectar: ${response.status}`);
    }
    // Se obtiene el contenido del archivo JSON
    let tecnico = await response.json();
    // Se itera sobre los técnicos obtenidos del JSON y se imprimen en la consola
    tecnico.tecnicos.forEach((programa) => {
      console.log(programa);
    });
  } catch (error) {
    // Si ocurre algún error durante el proceso, se captura y se imprime en la consola
    console.error(error);
  }
})();