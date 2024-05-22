/*
14. Define una función asincrónica que espere 1 segundo y luego devuelva una cadena que
diga "Operación completada". Utiliza async/await.
*/

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function esperar() {
  console.log("Esperando 1 segundo...");
  await delay(1000);
  alert("Operación completada");
}

esperar();
