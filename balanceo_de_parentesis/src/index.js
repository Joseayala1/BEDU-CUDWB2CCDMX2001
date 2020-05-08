function balanceo_parentesis(secuencia) {
  let texto = secuencia;
  let i = 0;
let contador = 0;
while (i < texto.length) {
    for (i; i <= texto.length-1 ; i++) {
    if (texto[i] === ")") {
      contador++;
    } else {
      break;
    }
  }
  
  let a = 0;
  let c = 0;
  for (i; i <= texto.length-1; i++) {
    if (texto[i] === "(") {
      a++;
      
    } else {
      c++;
      
    }
    if (a === c) {
      break;
    }
  }
  i=i+1;
  
  if (a === c) {
    contador = contador;
    
  } else if (a > c) {
    contador = a - c + contador;
    
  } else {
    contador = -a + c + contador;
    
  }
  
}
return contador
}



export default balanceo_parentesis;
