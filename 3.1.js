let array1 = [1, 2, 3, 4, 5];
let sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  0);

console.log(sumWithInitial);

/**/

let array2 = [100, 101, 102];

let iniValue = 0;
let sumWithIni = array2.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  iniValue
);

console.log(sumWithIni);