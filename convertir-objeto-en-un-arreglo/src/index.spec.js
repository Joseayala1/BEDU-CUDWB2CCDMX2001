/*
  NO MOVER EL CONTENIDO DE ESTE ARCHIVO, LAS PRUEBAS
  PUEDEN NO FUNCIONAR DE MANERA CORRECTA.

  Aquí estan definidas las pruebas que comprobarán
  si tu código funciona.

  Esto lo veremos en la última sesión de "Testing".
*/
import convertir_objeto from "./index";

test("Un objeto vacío se convierte en un arreglo vacío", function() {
  expect(convertir_objeto({})).toEqual([]);
});

test("Convirtiendo objetos con una sola propiedad", function() {
  expect(convertir_objeto({ a: 0 })).toEqual([["a", 0]]);
  expect(convertir_objeto({ b: Infinity })).toEqual([["b", Infinity]]);
  expect(convertir_objeto({ c: true })).toEqual([["c", true]]);
  expect(convertir_objeto({ this_value_is_nullish: null })).toEqual([
    ["this_value_is_nullish", null]
  ]);
  expect(
    convertir_objeto({
      this_is_a_very_long_property_name:
        "and this is a very very very long value, hell yeah"
    })
  ).toEqual([
    [
      "this_is_a_very_long_property_name",
      "and this is a very very very long value, hell yeah"
    ]
  ]);
});

test("Convirtiendo objetos con propiedades aleatorias", function() {
  const possible_values = [
    0,
    1,
    -1,
    "some random text",
    true,
    false,
    null,
    undefined,
    Infinity,
    NaN,
    -Infinity
  ];

  const possible_keys = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];

  let expected = [];
  let object = {};

  const random_length = Math.floor(Math.random() * 1000) + 1;

  for (let i = 0; i < random_length; i++) {
    const random_key_length = Math.floor(Math.random() * 100) + 1;
    const random_value = Math.floor(Math.random() * possible_values.length);
    let key = "";

    for (let j = 0; j < random_key_length; j++) {
      const random_letter = Math.floor(Math.random() * possible_keys.length);
      key += possible_keys[random_letter];
    }

    object[key] = possible_values[random_value];
    expected.push([key, possible_values[random_value]]);
  }

  expect(convertir_objeto(object)).toEqual(expected);
});
