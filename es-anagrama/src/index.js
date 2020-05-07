function es_anagrama(texto, posible_anagrama) {
  let cadena1 = texto;
  let cadena2 = posible_anagrama;
  let cadena3 = cadena1.toLowerCase();
  let cadena4 = cadena2.toLowerCase();
  let arreglo1 = [];
  let arreglo2 = [];
  for (let i = 0; i < cadena3.length; i++) {
    arreglo1.push(cadena3[i]);
  }
  for (let j = 0; j < cadena4.length; j++) {
    arreglo2.push(cadena4[j]);
  }
  for (let r = 0; r < arreglo1.length; r++) {
    let q = 0;
    while (q < arreglo1.length) {
      if (arreglo1[r] === arreglo2[q]) {
        arreglo2.splice(q, 1);
        break;
      }
      q++;
    }
  }
  let accion;
  if (arreglo2[0] === undefined) {
    accion = true;
  } else {
    accion = false;
  }
  return accion;
}

export default es_anagrama;
