function isSumBigger(number1, number2, total) {
  const sum = number1 + number2;

  if (sum > total) {
    return true;
  } else {
    return false;
  }
}

console.log('isSumBigger(1, 3, 2) returns: ' + isSumBigger(1, 3, 2));
console.log('isSumBigger(1, 3, 5) returns: ' + isSumBigger(1, 3, 5));