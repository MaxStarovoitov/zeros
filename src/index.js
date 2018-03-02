module.exports = function getZerosCount(number) {
var count = 0;
while(number){
  number = (number/5) |0;
  count+=number;
}
return count;
}
console.log(getZerosCount(15));
