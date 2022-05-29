function calcDistance(x, y, x1, y1) {
  return Math.sqrt((Math.pow(x1-x, 2)) + (Math.pow(y1-y, 2)))
}


console.log(calcDistance(1, 1, 2, 2));