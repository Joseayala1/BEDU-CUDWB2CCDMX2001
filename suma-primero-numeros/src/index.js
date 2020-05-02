function suma_primeros_numeros(n) {
  if (n === 0) {
    console.log(0);
    return n;
  } else {
    var i;
    var n1 = 0;
    for (i = 0; i <= n; i++) {
      n1 = i + n1;
    }
    console.log(n1);
    return n1;
  }
}
suma_primeros_numeros(8);

/*
  NO MOVER ESTA LÍNEA :)
  La veremos en la siguiente sesión de todos modos.
*/
export default suma_primeros_numeros;
