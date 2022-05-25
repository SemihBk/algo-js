const array1 = [1,-4,7,12];

let sum = 0;

for (i = 0; i < array1.length; i++) {
  if (array1[i] >= 0) {
    sum += array1[i];
  }
}

console.log(sum);