/*
  NO MOVER EL CONTENIDO DE ESTE ARCHIVO, LAS PRUEBAS
  PUEDEN NO FUNCIONAR DE MANERA CORRECTA.

  Aquí estan definidas las pruebas que comprobarán
  si tu código funciona.

  Esto lo veremos en la última sesión de "Testing".
*/
import calcula_signo from "./index";

test("El 0 no tiene signo", function() {
  expect(calcula_signo(0)).toBe("");
});

test("Números mayores a 0 son positivos", function() {
  expect(calcula_signo(Infinity)).toBe("+");
  expect(calcula_signo(1)).toBe("+");
  expect(calcula_signo(90132908132)).toBe("+");
  expect(calcula_signo(999999999999999999999999999999999999)).toBe("+");
});

test("Números menores a 0 son negativos", function() {
  expect(calcula_signo(-Infinity)).toBe("-");
  expect(calcula_signo(-1)).toBe("-");
  expect(calcula_signo(-8737832238)).toBe("-");
  expect(calcula_signo(-999999999999999999999999999999999999)).toBe("-");
});
