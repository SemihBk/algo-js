
const min = array1 => array1.reduce((x, y) => Math.min(x, y));
const max = array1 => array1.reduce((x, y) => Math.max(x, y));
 
var array1 = [ 6, 45, 2, 4, 9 ];
 
console.log("Min:", min(array1));
console.log("Max:", max(array1));
 