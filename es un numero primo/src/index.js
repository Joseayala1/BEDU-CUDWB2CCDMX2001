function es_primo(numero) {
  if (numero < 0) {
    return false;
  } else if (numero === 0) {
    return false;
  } else if (numero === 1) {
    return false;
  } else {
    var contador = 0;
    for (let i = 1; i <= numero; i++) {
      if (numero % i === 0) {
        contador++;
      }
    }
    if (contador <= 2) {
      return true;
    } else {
      return false;
    }
  }
}

/*
  NO MOVER ESTA LÍNEA :)
  La veremos en la siguiente sesión de todos modos.
*/
export default es_primo;
