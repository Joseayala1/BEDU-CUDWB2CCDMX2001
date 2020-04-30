// Prohibido usar Math.max, te estoy observando 👀

function mayor_de_tres(numero1, numero2, numero3) {
  if (
    numero1 >= numero2 &&
    numero1 >= numero3 &&
    (numero2 >= numero3 ||numero3 >= numero2)
  ) {
    return numero1;
  } else if (
    numero2 >= numero1 &&
    numero2 >= numero3 &&
    (numero1 >= numero3 || numero3 >= numero1)
  ) {
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
