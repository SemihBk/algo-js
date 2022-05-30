/* Exercise 4.8 : The Supermarket Queue
There is a queue for the self-checkout tills at the supermarket. 
Your task is write a function to calculate the total time required for all the customers to check out!

input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.

Examples: */

// queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

// queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the
// queue finish before the 1st person has finished.

// queueTime([2,3,10], 2)
// should return 12




function queueTime(customers, numOfTills){

  // Shallow Clone l'array customers dans la variable tills avec numOfTills valeurs
  let tills = customers.slice(0, numOfTills)
  console.log(tills)

  const indexMin = tills.indexOf(Math.min(...tills));
  const indexMax = tills.indexOf(Math.max(...tills));
  console.log(indexMin);
  console.log(indexMax);

  // loop pour que toutes les valeurs de l'array customers (customers.length) entre dans l'array tills (à certaines conditions)
  // Commence à i = 2 parce qu'il y a déjà les 2 premières valeurs dans l'array tills
  for (i = numOfTills; i < customers.length; i++){

    // Si la valeur de tills[0] est plus grande, la prochaine valeur de customers[i] s'additionnera avec la valeur de tills[1]
    // Sinon, elle s'additionnera avec tills[0]
    if (tills[indexMax] > tills[indexMin]){
      tills[indexMin] += customers[i];
    } else {
      tills[indexMax] += customers[i];
    }
  }

  // Au bout de la loop, on prendra la plus grande valeur de l'array tills, pour connaître la queueTime finale
  if (tills[indexMax] > tills[indexMin]){
    return tills[indexMax];
  } else {
    return tills[indexMin];
  }
};

console.log(queueTime([10, 2, 36, 12, 54], 4))

//////////////////
//
// Exercise 4.8
//
//////////////////

/* const queueTime = (customers, numOfTills) => {
  const tills = Array(numOfTills).fill(0);
  // customers = [10, 5, 4, 8, 12]
  // tills = [0,0]
  // tills = [10, 5]
  tills[0] = customers[0];
  tills[1] = customers[1];
  //   tills[2] = customers[2];

  for (let i = 2; i < customers.length; i++) {
    if (tills[0] >= tills[1]) {
      tills[1] += customers[i];
    } else {
      tills[0] += customers[i];
    }
  }

  if (tills[0] > tills[1]) {
    return tills[0];
  } else {
    return tills[1];
  }
};

console.log(queueTime([18, 5, 4, 8, 12], 2)); */