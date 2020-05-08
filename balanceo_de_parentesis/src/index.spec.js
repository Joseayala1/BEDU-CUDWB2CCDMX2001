/*
  NO MOVER EL CONTENIDO DE ESTE ARCHIVO, LAS PRUEBAS
  PUEDEN NO FUNCIONAR DE MANERA CORRECTA.

  Aquí estan definidas las pruebas que comprobarán
  si tu código funciona.

  Esto lo veremos en la última sesión de "Testing".
*/
import balanceo_parentesis from "./index";

test("Una secuencia vacía debe dar 0", () => {
  const result = balanceo_parentesis("");
  expect(result).toEqual(0);
});

test("La secuencia '(' debería dar 1", () => {
  const result = balanceo_parentesis("(");
  expect(result).toEqual(1);
});

test("La secuencia ')' debería dar 1", () => {
  const result = balanceo_parentesis(")");
  expect(result).toEqual(1);
});

test("La secuencia ')(' debería dar 2", () => {
  const result = balanceo_parentesis(")(");
  expect(result).toEqual(2);
});

test("La secuencia '()' debería dar 0", () => {
  const result = balanceo_parentesis("()");
  expect(result).toEqual(0);
});

test("La secuencia '))(' debería dar 3", () => {
  const result = balanceo_parentesis("))(");
  expect(result).toEqual(3);
});

test("La secuencia ')))' debería dar 3", () => {
  const result = balanceo_parentesis(")))");
  expect(result).toEqual(3);
});

test("Cualquier secuencia balanceada debería dar 0", () => {
  const cases = [];
  const randomNumber = Math.floor(Math.random() * 1000) + 1;

  for (let i = 1; i <= randomNumber; i++) {
    cases.push("()");
  }

  const realCase = cases.join("");

  expect(balanceo_parentesis(realCase)).toEqual(0);
});
