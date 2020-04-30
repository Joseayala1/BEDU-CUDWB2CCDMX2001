function calcula_signo(numero) {
  if (numero === 0) {
    var nada = "";
    return nada;
  } else if (numero > 0) {
    var positivo = "+";
    return positivo;
  } else {
    var negativo = "-";
    return negativo;
  }
}

/*
  NO MOVER ESTA LÍNEA :)
  La veremos en la siguiente sesión de todos modos.
*/
export default calcula_signo;
