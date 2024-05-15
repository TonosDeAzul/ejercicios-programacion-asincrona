/*
2. En el siguiente código hay una llamada programada setTimeout, luego se ejecuta un cálculo
pesado que demora más de 100 ms en finalizar.
¿Cuándo se ejecutará la función programada y por qué se ejecutará?
a) Después del bucle.
b) Antes del bucle.
c) Al comienzo del bucle.

¿Qué va a mostrar alert()?
*/

let i = 0;
setTimeout(() => alert(i), 100);
for (let j = 0; j < 100000; j++) {
  i++;
}

/*
a) Después del bucle. Debido a que se programa la ejecución de la función 
con un retraso. El bucle for se ejecuta inmediatamente.

b) Antes del bucle. La función programada no se ejecutará antes, ya que 
hay un retraso.

c) Al comienzo del bucle. La función programada no se ejecuta al comienzo 
del bucle, ya que se programa para ejecutarse después de un retraso.
*/

/*
Una vez que el bucle ha terminado de ejecutarse, la función programada por 
setTimeout se ejecuta. En este punto, el valor de i será 100.000, ya que se 
incrementó en 1 en cada iteración del bucle.
El alert va a mostrar que "i" es 100.000.
*/
