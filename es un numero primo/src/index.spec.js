/*
  NO MOVER EL CONTENIDO DE ESTE ARCHIVO, LAS PRUEBAS
  PUEDEN NO FUNCIONAR DE MANERA CORRECTA.

  Aquí estan definidas las pruebas que comprobarán
  si tu código funciona.

  Esto lo veremos en la última sesión de "Testing".
*/
import es_primo from "./index";

test("Cualquier número negativo no es un primo", function() {
  var negativo = -1 * Math.trunc(Math.random() * 1000000);
  expect(es_primo(negativo)).toBe(false);
});

test("El 0 no es un número primo", function() {
  expect(es_primo(0)).toBe(false);
});

test("Probando números no primos", function() {
  var no_primos = [
    1,
    4,
    6,
    8,
    9,
    10,
    12,
    14,
    15,
    16,
    18,
    20,
    21,
    22,
    24,
    25,
    26,
    27,
    28,
    30
  ];

  for (let n of no_primos) {
    expect(es_primo(n)).toBe(false);
  }
});

test("Probando números primos", function() {
  var primos = [
    2,
    3,
    5,
    7,
    11,
    13,
    17,
    19,
    23,
    29,
    31,
    37,
    41,
    43,
    47,
    53,
    59,
    61,
    67,
    71,
    73,
    79,
    83,
    89,
    97
  ];

  for (let n of primos) {
    expect(es_primo(n)).toBe(true);
  }
});
