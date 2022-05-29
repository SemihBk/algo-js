/* function queueTime([10, 2, 3, 3], 3){

  // Crée tills = [0, 0, 0];
  let tills = Array(3).fill(0);

  for (i = 0; i < 3; i++){
    tills.splice(0+i, 1, customers[a+1]);
  }
  console.log(tills)

  for (i = 3; i < customers.length; i++){
    if (tills[3] > tills[1]){
      tills[1] += customers[i];
    } else {
      tills[0] += customers[i];
    }
  }


  if (tills[0] > tills[1]){
    return tills[0]
  } else {
    return tills[1]
  }
};

console.log(queueTime([10, 2, 3, 3], 3)) */



const queueTime = (customers, numOfTills) => {
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

console.log(queueTime([18, 5, 4, 8, 12], 2));