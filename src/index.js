module.exports = function reverse (n) {
  let nStr = String(Math.abs(n));
  let result = ''       // empty string
  let i = 0;        

  while (i < nStr.length) {
      result = `${nStr[i]}${result}`
      i += 1
  } 
  return Number(`${result}`);
}
