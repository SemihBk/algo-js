/* factorial of 5

1 * 2 * 3 * 4 * 5 = 120 */

function factorial(n){
  if (n !== 0){
    return n * factorial(n-1);
  } else {
    return 1;
  }
}

console.log(factorial(5));


