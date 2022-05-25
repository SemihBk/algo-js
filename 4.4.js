let array1 = [0, 2, 4, 6, 8];

function average(arr) {
  arr.reduce((a, b) => a + b, 0) / arr.length;
  return;
}

console.log(average(array1));
