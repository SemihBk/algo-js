/* EXERCICE 2.3 */

let i = 1;

/*count 1 to 100 */
/* while (i <= 100) {
  console.log(i);
  i += 1;
} */

/*even number / 3 */
/* while (i <= 100) {
  console.log(i/3);
  i += 2;
}
 */

/*odd number / 2 */
/* 
let i = 2;
while (i <= 100) {
  console.log(i/2);
  i += 2;
}
 */

for (i = 1; i <= 100; i += 1) {
  if(i%2 == 0) {
    console.log(`Le nombre pair est `+i+` et sa moitié est `+i/2);
  }
  else {
    console.log(`Le nombre impair est `+i+` et son triple est `+i*2);
  }
}


