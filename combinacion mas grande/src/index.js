function combinacion_mas_grande(n1, n2, n3) {
  if (n1 === 0 && n2 === 0 && n3 === 0) {
    return n1;
  } else if (n1 === 0 && n2 === 0 && n3 !== 0) {
    let com = [n3, n1, n2];
    let com1 = com.join("");
    let com2 = parseInt(com1);
    return com2;
    } else if (n1 === 0 && n2 !== 0 && n3 === 0) {
      let com = [n2, n1, n3];
      let com1 = com.join("");
      let com2 = parseInt(com1);
      return com2;
  } else if (n1 !== 0 && n2 === 0 && n3 === 0) {
    let com = [n1, n2, n3];
      let com1 = com.join("");
      let com2 = parseInt(com1);
      return com2;
  } else {
    let t1;
    if (n1 > n2) {
      t1 = n1;
    } else {
      t1 = n2;
    }
    if (t1 > n3) {
      t1 = t1;
    } else {
      t1 = n3;
    }
    let t2;
    if (n2 > n1) {
      t2 = n1;
    } else {
      t2 = n2;
    }
    if (n3 > t2) {
      t2 = t2;
    } else {
      t2 = n3;
    }
    let t3;
    if (t1 !== n1 && t2 !== n1) {
      t3 = n1;
    } else if (t1 !== n2 && t2 !== n2) {
      t3 = n2;
    } else {
      t3 = n3;
    }
    let com = [t1, t3, t2];
    let com1 = com.join("");
    let com2 = parseInt(com1);
    return com2;
  }
}

console.log(combinacion_mas_grande(1, 0, 9));
/*
  NO MOVER ESTA LÍNEA :)
  La veremos en la siguiente sesión de todos modos.
*/
export default combinacion_mas_grande;
