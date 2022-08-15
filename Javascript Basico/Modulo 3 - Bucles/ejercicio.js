// n × (n−1)

const factorialFor = () =>{
  let num = 10
  let total = 1
  for(let x=1;x<=num;x++){
    total = total * x
    console.log(total);
  }
}


const factorialWhile = () =>{
  let num = 0
  let total = 1
  while(num < 10){
    num++
    total = total * num
    console.log(total);
  }
}


const factorialWhileBreak = () =>{
  let num = 0
  let total = 1
  let arr = []
  while(num < 10){
    num++
    total = total * num
    // console.log(`${total}-${num}`);
    if(total==120) continue
    else if(num == 7) break
    arr.push(total);
  }
  console.log(arr);
}



factorialFor()
console.log('- - - - - - - - -');
factorialWhile()
console.log('- - - - - - - - -');
factorialWhileBreak()