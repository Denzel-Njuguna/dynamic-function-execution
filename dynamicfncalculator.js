function divide(factor,...numbers){
  return numbers.map(num=> num/2);
}
function modulus(factor,...numbers){
  return numbers.map(num=>num%factor);
}
const operations = {
  divide,
  modulus,
}
function calculate(operationname,factor,...numbers){
  if (operations[operationname]){
    return operations[operationname](factor,...numbers)
  }else{
    throw new Error('operation`${operationname}` does not exist')
  }
}

console.log(modulus('divide',2,5,4,8,7,94,8));
