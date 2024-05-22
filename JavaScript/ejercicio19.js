/*
19. Crea una función asincrónica que realice una llamada a un archivo local en formato json y
luego manipule los datos recibidos para mostrar información específica.
*/

const adso = (adso) =>
  adso === "Tecnólogo en Análisis y Desarrollo de Software" ? adso : null;

(async () => {
  let response = await fetch("../json/ejercicio19.json");
  let programas = await response.json();
  // console.log(programas);

  const resultado = programas.programas.some(adso);
  console.log(resultado);
})();
