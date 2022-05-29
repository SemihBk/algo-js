/* factorial of 5

1 * 2 * 3 * 4 * 5 = 120 */

function factorial(n){
  let fact = 1;
  for (i = 0; i <= n; i++){
  fact = fact + 1; 
  }
  return;
}

console.log(factorial(5));