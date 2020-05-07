function convertir_objeto(objeto) {
  let objeto1=Object.getOwnPropertyNames(objeto);
  let objeto2=[];
  for (let i=0;i<objeto1.length;i++){
    let pare=objeto[objeto1[i]];
    objeto2.push(pare);
  }
  let objeto3 = new Array(objeto1.length);
  for(let j=0;j<objeto1.length;j++){
  objeto3[j] = new Array(2);
  }
  
  
  for(let k=0;k<objeto1.length;k++){
    objeto3[k][0]=objeto1[k];
        }
  for(let l=0;l<objeto1.length;l++){
      objeto3[l][1]=objeto2[l];
        }
    return objeto3;
  
 

  
}

let yo = {
  name: "azull",
  age: 17
};
;
//let arr=[[5,6],[7,8]];
//console.log(arr[0][1]);

console.log(convertir_objeto(yo));

export default convertir_objeto;
