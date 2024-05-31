/*
1. Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
comenzando desde desde y terminando con hasta.
Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
• Usando setInterval.
• Usando setTimeout anidado.
*/

// Usando setInterval
function imprimirNumeros(desde, hasta) {
  // Verifica si el número inicial es mayor que el número final
  if (desde > hasta) {
    console.log("El número de inicio es mayor que el número final");
  } else {
    // Declara el intervalo para ejecutar la función repetidamente
    let interval = setInterval(() => {
      // Verifica si el número actual ha alcanzado el número final
      if (desde === hasta) {
        // Detiene la ejecución del intervalo
        clearInterval(interval);
      }
      // Imprime el número actual
      console.log(desde++);
    }, 1000);  // La función se ejecuta cada 1000 milisegundos (1 segundo)
  }
}
// imprimirNumeros(1, 4);

// Usando setTimeout anidado
function imprimirNumeros(desde, hasta) {
  // Verifica si el número inicial es mayor que el número final
  if (desde > hasta) {
    console.log("El número de inicio es mayor que el número final");
  } else {
    // Se declara el timeout en una varible para tener un idetificador
    let timeout = setTimeout(function cont() {
      // Planifica la siguiente llamada al final de la actual
      // Actualiza el valor del timeout con una nueva llamada a setTimeout, así la función cont se sigue ejecutando
      timeout = setTimeout(cont, 1000);
      // Se verifica si el número ya llego hasta el final
      if (desde === hasta) {
        // Detiene la ejecución del timeout
        clearTimeout(timeout);
      }
      // Imprime los números
      console.log(desde++);
    }, 1000);
  }
}

// imprimirNumeros(1, 4);
