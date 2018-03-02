module.exports = function getZerosCount(n){
  var count=0;
  while (n){
  n=(n/5)|0;
  count+=n;
  }
  return count;
  }

  console.log(getZeroCount(10));
