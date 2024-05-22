/*
20. Crea tres Promises que se resuelvan después de diferentes intervalos de tiempo y luego
utilice Promise.all() para mostrar un mensaje cuando todas se hayan resuelto.
*/

const promesaUno = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Se ha cumplido la promesa (${ms})`);
      console.log(`Promesa 1`);
    }, ms);
  });
};

const promesaDos = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Se ha cumplido la promesa (${ms})`);
      console.log(`Promesa 2`);
    }, ms);
  });
};

const promesaTres = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Se ha cumplido la promesa (${ms})`);
      console.log(`Promesa 3`);
    }, ms);
  });
};

Promise.all([promesaUno(1000), promesaDos(2000), promesaTres(3000)]).then(
  (resultado) => {
    setTimeout(() => {
      // Me retorna el resolve de cada promesa
      resultado.forEach((mensajePromesa) => {
        console.log(mensajePromesa);
      }, 2000);
    });
  }
);
