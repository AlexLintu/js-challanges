function destroyer(arr) {
  console.log(arr); // Returns [1, 2, 3, 1, 2, 3]
  var args = Array.prototype.slice.call(arguments);
  console.log(args); // Returns [[1, 2, 3, 1, 2, 3], 2, 3]
  for (let i=0; i < arr.length; i++) {
    for (let j=0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // Returns [1, 1]

// Arguments doc: https://forum.freecodecamp.org/t/javascript-arguments/14283
// Boolean doc: https://forum.freecodecamp.org/t/javascript-boolean/14311
