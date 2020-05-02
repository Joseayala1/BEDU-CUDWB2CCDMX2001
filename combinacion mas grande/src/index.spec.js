/*
  NO MOVER EL CONTENIDO DE ESTE ARCHIVO, LAS PRUEBAS
  PUEDEN NO FUNCIONAR DE MANERA CORRECTA.

  Aquí estan definidas las pruebas que comprobarán
  si tu código funciona.

  Esto lo veremos en la última sesión de "Testing".
*/
import combinacion_mas_grande from "./index";

test("Si todos los dígitos son 0, la combinación más grande es 0", function() {
  expect(combinacion_mas_grande(0, 0, 0)).toBe(0);
});

test("Si dos de los dígitos son 0 entonces la combinación más grande es el único dígito por cien", function() {
  var test1 = Math.trunc(Math.random() * 10);
  var test2 = Math.trunc(Math.random() * 10);
  var test3 = Math.trunc(Math.random() * 10);
  expect(combinacion_mas_grande(test1, 0, 0)).toBe(test1 * 100);
  expect(combinacion_mas_grande(0, test2, 0)).toBe(test2 * 100);
  expect(combinacion_mas_grande(0, 0, test3)).toBe(test3 * 100);
});

test("Probando ejemplos correctos", function() {
  expect(combinacion_mas_grande(1, 2, 3)).toBe(321);
  expect(combinacion_mas_grande(5, 5, 5)).toBe(555);
  expect(combinacion_mas_grande(1, 0, 9)).toBe(901);
  expect(combinacion_mas_grande(0, 2, 1)).toBe(210);
});
