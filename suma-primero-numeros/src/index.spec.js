/*
  NO MOVER EL CONTENIDO DE ESTE ARCHIVO, LAS PRUEBAS
  PUEDEN NO FUNCIONAR DE MANERA CORRECTA.

  Aquí estan definidas las pruebas que comprobarán
  si tu código funciona.

  Esto lo veremos en la última sesión de "Testing".
*/
import suma_primeros_numeros from "./index";

test("La suma los primeros 0 números es 0", function() {
  expect(suma_primeros_numeros(0)).toBe(0);
});

test("Probando ejemplos concretos", function() {
  expect(suma_primeros_numeros(3)).toBe(6);
  expect(suma_primeros_numeros(100)).toBe(5050);
  expect(suma_primeros_numeros(749)).toBe(280875);
  expect(suma_primeros_numeros(1000)).toBe(500500);
  expect(suma_primeros_numeros(2947)).toBe(4343878);
});
