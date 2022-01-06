function printArray(number) {
  var newArray = [];

  for (var i = 1; i <= number; ) {
    newArray.push(i);
  }

  return newArray;
}

console.log(printArray(5));
