/*
25. Usar un proxy para la validación de los valores de propiedades
• Cuando declaremos que el atributo es numérico solo perimimos que ingresen
números
• Cuando declaremos que el atributo es alfanumérico solo permitimos que ingresen
letras
• Cuando declaremos que el atributo es un email, solo permitimos que ingresen
correos
• Cuando declaremos que el atributo es de tipo date, solo permitimos que ingresen
fechas
• Para todos los atributos no se puede ingresar espacios en blanco tanto al inicio como
al final de estos y se debe mostrar el error personalizado por consola
*/

// Objeto persona con propiedades inicializadas
const persona = {
  nombre: "",
  edad: 0,
  correo: "",
  fechaNacimiento: "",
};
// Objeto manejador que define comportamientos personalizados para el acceso y la asignación de las propiedades del objeto persona
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
    if (propiedad === "nombre" && !/^[a-zA-Z ]+$/.test(valor)) {
      // Si la propiedad es nombre y el valor no contiene solo letras y espacios, lanza un error
      throw new Error("El nombre solo debe contener letras");
    }
    if (propiedad === "edad" && !/^[0-9]+$/.test(valor)) {
      // Si la propiedad es edad y el valor no es un número, lanza un error
      throw new Error("La edad solo debe contener números");
    }
    if (
      propiedad === "correo" &&
      !/^[\w-.]+@[\w-.]+\.[a-zA-Z]{2,3}$/.test(valor)
    ) {
      // Si la propiedad es correo y el valor no es un correo electrónico válido, lanza un error
      throw new Error("Ingrese un correo válido");
    }
    if (propiedad === "fechaNacimiento" && !/^\d{2}-\d{2}-\d{4}$/.test(valor)) {
      // Si la propiedad es fechaNacimiento y el valor no es una fecha válida, lanza un error
      throw new Error("Ingrese un formato de fecha de nacimiento válida (DD-MM-YYYY)");
    }
    // Si todas las validaciones pasan, se establece el valor de la propiedad en el objeto objetivo
    objetivo[propiedad] = valor;
  },
};
// Creación de un objeto Proxy que envuelve al objeto persona y utiliza el objeto manejador para personalizar su comportamiento
const proxy = new Proxy(persona, manejador);
// Asignación de valores a las propiedades del objeto persona a través del objeto proxy, las cuales serán validadas por el manejador
proxy.nombre = "Tonos de Azul";
console.log(proxy.nombre); // Output: Tonos de Azul
proxy.edad = 18;
console.log(proxy.edad); // Output: 18
proxy.correo = "danielfgomezzayas@gmail.com";
console.log(proxy.correo); // Output: danielfgomezzayas@gmail.com
proxy.fechaNacimiento = "13-05-2006";
console.log(proxy.fechaNacimiento); // Output: 13-05-2006