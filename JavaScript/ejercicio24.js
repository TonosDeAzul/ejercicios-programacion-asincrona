/*
24. Crear un objeto proxy usando la clase Proxy
*/

const persona = {
  nombre: "Daniel",
  edad: 18,
};

const manejador = {
  // GET
  get(objetivo, propiedad) {
    console.log(`Obteniendo la propiedad ${propiedad}`);
    return objetivo[propiedad];
  },

  // SET
  set(objetivo, propiedad, valor) {
    if (Object.keys(objetivo).indexOf(propiedad) === -1) {
      return console.error(`La propiedad ${propiedad} no existe`);
    }
    if (propiedad === "nombre" && !/^[A-Za-z ]+$/.test(valor)) {
      throw new Error("El nombre debe contener solo letras y espacios");
    }

    if (propiedad === "edad" && isNaN(valor)) {
      throw new Error("La edad debe ser un número");
    }

    objetivo[propiedad] = valor;
  },
};

const proxy = new Proxy(persona, manejador);

proxy.nombre = "Tonos de Azul";
console.log(proxy.nombre);
