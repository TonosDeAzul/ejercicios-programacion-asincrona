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

const persona = {
  nombre: "",
  edad: 0,
  correo: "",
  fechaNacimiento: "",
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

    if (propiedad === "nombre" && !/^[a-zA-Z ]+$/.test(valor)) {
      throw new Error("El nombre solo debe ser letras");
    }

    if (propiedad === "edad" && !/^[0-9]+$/.test(valor)) {
      throw new Error("La edad solo debe ser números");
    }

    if (
      propiedad === "correo" &&
      !/^[\w-.]+@[\w-.]+\.[a-zA-Z]{2,3}$/.test(valor)
    ) {
      throw new Error("Ingrese un correo válido");
    }

    if (propiedad === "fechaNacimiento" && !/^\d{2}-\d{2}-\d{4}$/.test(valor)) {
      throw new Error("Ingrese un formato o fecha válida de nacimiento");
    }

    objetivo[propiedad] = valor;
  },
};

const proxy = new Proxy(persona, manejador);

proxy.nombre = "Tonos de Azul";
console.log(proxy.nombre);
proxy.edad = 18;
console.log(proxy.edad);
proxy.correo = "danielfgomezzayas@gmail.com";
console.log(proxy.correo);
proxy.fechaNacimiento = "13-05-2006";
console.log(proxy.fechaNacimiento);
