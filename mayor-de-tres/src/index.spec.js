/*
  NO MOVER EL CONTENIDO DE ESTE ARCHIVO, LAS PRUEBAS
  PUEDEN NO FUNCIONAR DE MANERA CORRECTA.

  Aquí estan definidas las pruebas que comprobarán
  si tu código funciona.

  Esto lo veremos en la última sesión de "Testing".
*/
import mayor_de_tres from "./index";

test("Si los tres números son iguales entonces el resultado es el mismo", function() {
  expect(mayor_de_tres(0, 0, 0)).toBe(0);
  expect(mayor_de_tres(Infinity, Infinity, Infinity)).toBe(Infinity);
  expect(mayor_de_tres(-1, -1, -1)).toBe(-1);
  expect(
    mayor_de_tres(
      999999999999999999999999999999999999,
      999999999999999999999999999999999999,
      999999999999999999999999999999999999
    )
  ).toBe(999999999999999999999999999999999999);
});

test("Infinity siempre es el número mayor", function() {
  expect(
    mayor_de_tres(
      Infinity,
      999999999999999999999999999999999999,
      999999999999999999999999999999999999
    )
  ).toBe(Infinity);
  expect(
    mayor_de_tres(
      999999999999999999999999999999999999,
      Infinity,
      999999999999999999999999999999999999
    )
  ).toBe(Infinity);
  expect(
    mayor_de_tres(
      999999999999999999999999999999999999,
      999999999999999999999999999999999999,
      Infinity
    )
  ).toBe(Infinity);
  expect(mayor_de_tres(-Infinity, -Infinity, Infinity)).toBe(Infinity);
});

test("Si el primer número es el mayor entonces debería regresar ese número", function() {
  expect(mayor_de_tres(10, 1, 3)).toBe(10);
  expect(mayor_de_tres(988498209812098, 56346723123, 783978123897)).toBe(
    988498209812098
  );
});

test("Si el segundo número es el mayor entonces debería regresar ese número", function() {
  expect(mayor_de_tres(0, 133, 3)).toBe(133);
  expect(
    mayor_de_tres(988498209812098, 7777777777777777777777, 783978123897)
  ).toBe(7777777777777777777777);
});

test("Si el tercer número es el mayor entonces debería regresar ese número", function() {
  expect(mayor_de_tres(-10, 133, 666)).toBe(666);
  expect(
    mayor_de_tres(-Infinity, 7777777777777777777776, 7777777777777777777777)
  ).toBe(7777777777777777777777);
});
