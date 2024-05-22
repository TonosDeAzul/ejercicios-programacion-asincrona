/*
18. Después de realizar una llamada a un archivo local en formato json, utiliza el método then()
para filtrar los datos y mostrar solo los elementos que cumplan ciertos criterios (por ejemplo,
mostrar solo los nombres que comiencen con "A").
*/

const letra = (letra) => letra.charAt(0) === "C";

(async () => {
  let response = await fetch("../json/ejercicio18.json");
  let aprendiz = await response.json();
  console.log(aprendiz);

  const resultado = aprendiz.aprendices.filter(letra);
  console.log(resultado);
})();
