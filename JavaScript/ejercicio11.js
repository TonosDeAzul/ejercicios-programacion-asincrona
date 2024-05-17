/*
11. ¿Cuál es el resultado del código a continuación?
*/

let i = 0;
setTimeout(() => alert(i), 100);
for (let j = 0; j < 100000; j++) {
  i++;
}

/*
Después del bucle. Debido a que se programa la ejecución de la función 
con un retraso. El bucle for se ejecuta inmediatamente.
*/

/*
Una vez que el bucle ha terminado de ejecutarse, la función programada por 
setTimeout se ejecuta. En este punto, el valor de i será 100.000, ya que se 
incrementó en 1 en cada iteración del bucle.
El alert va a mostrar que "i" es 100.000.
*/
