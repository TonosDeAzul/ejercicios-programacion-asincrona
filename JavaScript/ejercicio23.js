/*
23. Realiza una llamada a un archivo local en formato json y maneja posibles errores utilizando
try/catch para mostrar un mensaje de error en caso de fallo.
*/

(async () => {
  try {
    let response = await fetch("../json/ejercicio233.json");

    // En caso que no se pueda conectar
    if (!response.ok) {
      throw new Error(`No se pudo conectar: ${response.status}`);
    }

    let tecnico = await response.json();

    tecnico.tecnicos.forEach((programa) => {
      console.log(programa);
    });
  } catch (error) {
    console.error(error);
  }
})();
