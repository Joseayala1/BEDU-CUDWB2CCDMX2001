/*
  NO MOVER EL CONTENIDO DE ESTE ARCHIVO, LAS PRUEBAS
  PUEDEN NO FUNCIONAR DE MANERA CORRECTA.

  Aquí estan definidas las pruebas que comprobarán
  si tu código funciona.

  Esto lo veremos en la última sesión de "Testing".
*/
import es_anagrama from "./index";

const abecedario = [
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

const abecedario_mayusculas = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

function desordenar_aleatoriamente(array) {
  var m = array.length,
    t,
    i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

function crear_palabra_aleatoria(tipo_palabra = 0) {
  let $abecedario = abecedario.concat(abecedario_mayusculas);
  let numero_letras = Math.floor(Math.random() * 1000) + 1;
  let palabra = "";

  for (let i = 0; i < numero_letras; i++) {
    const letra_aleatoria = Math.floor(Math.random() * abecedario.length);
    palabra += $abecedario[letra_aleatoria];
  }

  return palabra;
}

test("El anagrama de la cadena vacía es la misma cadena vacía", function() {
  expect(es_anagrama("", "")).toBe(true);
});

test("Las letrás del abecedario son anagramas", function() {
  for (let i = 0; i < abecedario.length; i++) {
    expect(es_anagrama(abecedario[i], abecedario[i])).toBe(true);
  }
});

test("Las palabras iguales son anagramas", function() {
  const numero_palabras = Math.floor(Math.random() * 1000) + 1;

  for (let i = 0; i < numero_palabras; i++) {
    const palabra = crear_palabra_aleatoria();
    expect(es_anagrama(palabra, palabra)).toBe(true);
  }
});

test("No hay distinción entre mayúsculas y minúsculas", function() {
  const numero_palabras = Math.floor(Math.random() * 1000) + 1;

  for (let i = 0; i < numero_palabras; i++) {
    const palabra = crear_palabra_aleatoria();
    expect(es_anagrama(palabra, palabra.toLocaleLowerCase())).toBe(true);
    expect(es_anagrama(palabra, palabra.toUpperCase())).toBe(true);
    expect(es_anagrama(palabra.toLocaleLowerCase(), palabra)).toBe(true);
    expect(es_anagrama(palabra.toUpperCase(), palabra)).toBe(true);
    expect(
      es_anagrama(palabra.toLocaleLowerCase(), palabra.toUpperCase())
    ).toBe(true);
    expect(
      es_anagrama(palabra.toUpperCase(), palabra.toLocaleLowerCase())
    ).toBe(true);
  }
});

test("Las palabras con mismas letras pero desordenadas son anagramas", function() {
  const numero_palabras = Math.floor(Math.random() * 1000) + 1;

  for (let i = 0; i < numero_palabras; i++) {
    const palabra = crear_palabra_aleatoria();
    const palabra_desordenada = desordenar_aleatoriamente(palabra.split()).join(
      ""
    );

    expect(es_anagrama(palabra, palabra_desordenada.toLocaleLowerCase())).toBe(
      true
    );
    expect(es_anagrama(palabra, palabra_desordenada.toUpperCase())).toBe(true);
    expect(es_anagrama(palabra.toLocaleLowerCase(), palabra_desordenada)).toBe(
      true
    );
    expect(es_anagrama(palabra.toUpperCase(), palabra_desordenada)).toBe(true);
    expect(
      es_anagrama(
        palabra.toLocaleLowerCase(),
        palabra_desordenada.toUpperCase()
      )
    ).toBe(true);
    expect(
      es_anagrama(
        palabra.toUpperCase(),
        palabra_desordenada.toLocaleLowerCase()
      )
    ).toBe(true);
  }
});
