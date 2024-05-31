/*
24. Crear un objeto proxy usando la clase Proxy
*/

// Objeto persona con propiedades nombre y edad
const persona = {
  nombre: "Daniel",
  edad: 18,
};
// Objeto manejador que define comportamientos personalizados para el acceso a las propiedades del objeto persona
const manejador = {
  // Método get para obtener el valor de una propiedad
  get(objetivo, propiedad) {
    // Imprime un mensaje indicando que se está obteniendo la propiedad
    console.log(`Obteniendo la propiedad ${propiedad}`);
    // Retorna el valor de la propiedad del objeto objetivo
    return objetivo[propiedad];
  },
  // Método set para establecer el valor de una propiedad
  set(objetivo, propiedad, valor) {
    // Verifica si la propiedad existe en el objeto objetivo
    if (Object.keys(objetivo).indexOf(propiedad) === -1) {
      // Si la propiedad no existe, imprime un mensaje de error y retorna
      return console.error(`La propiedad ${propiedad} no existe`);
    }
    // Validaciones adicionales para propiedades específicas
    if (propiedad === "nombre" && !/^[A-Za-z ]+$/.test(valor)) {
      // Si la propiedad es nombre y el valor no contiene solo letras y espacios, lanza un error
      throw new Error("El nombre debe contener solo letras y espacios");
    }
    if (propiedad === "edad" && isNaN(valor)) {
      // Si la propiedad es edad y el valor no es un número, lanza un error
      throw new Error("La edad debe ser un número");
    }
    // Establece el valor de la propiedad en el objeto objetivo
    objetivo[propiedad] = valor;
  },
};
// Creación de un objeto Proxy que envuelve al objeto persona y utiliza el objeto manejador para personalizar su comportamiento
const proxy = new Proxy(persona, manejador);
// Intento de establecer el valor de la propiedad nombre a "Tonos de Azul"
proxy.nombre = "Tonos de Azul";
// Intento de obtener el valor de la propiedad nombre
console.log(proxy.nombre);