function combinacion_mas_grande(digito1, digito2, digito3) {
  let numero = [digito1, digito2, digito3];
  numero.sort();
  if (numero[0] === 0 && numero[1] === 0 && numero[2] === 0) {
    return numero[0];
  } else if (numero[0] !== 0 && numero[1] === 0 && numero[2] === 0) {
    return numero[0];
  } else if (numero[0] === 0 && numero[1] !== 0 && numero[2] === 0) {
    return numero[1];
  } else if (numero[0] === 0 && numero[1] === 0 && numero[2] !== 0) {
    return numero[2];
  } else {
    var t1 = "" + numero[2] + "" + numero[1] + "" + numero[0];
    return t1;
  }

  return null;
}

combinacion_mas_grande(0, 0, 0);

/*
  NO MOVER ESTA LÍNEA :)
  La veremos en la siguiente sesión de todos modos.
*/
export default combinacion_mas_grande;
