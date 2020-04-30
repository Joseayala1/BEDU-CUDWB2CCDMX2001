// Prohibido usar Math.max, te estoy observando 👀

function mayor_de_tres(numero1, numero2, numero3) {
  if ((numero1 === numero2) === numero3) {
    return numero1;
  } else if (
    numero1 === Infinity ||
    numero2 === Infinity ||
    numero3 === Infinity
  ) {
    if (numero1 === Infinity) {
      return numero1;
    } else if (numero2 === Infinity) {
      return numero2;
    } else {
      return numero3;
    }
  } else if (numero1 > numero2 > numero3) {
    return numero1;
  } else if (numero2 > numero1 > numero3) {
    return numero2;
  } else {
    return numero3;
  }
  return null;
}

/*
  NO MOVER ESTA LÍNEA :)
  La veremos en la siguiente sesión de todos modos.
*/
export default mayor_de_tres;
