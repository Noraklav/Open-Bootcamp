for(let x=0;x<15;x++){
  if(x == 7)continue
  console.log('Vuelta: '+x);
}


let cont = 0
let whileArr = []
while(cont <=30){
  cont++
  if(cont%2==0) continue
  if(cont == 26) break
  whileArr.push(cont);
}
console.log(whileArr);