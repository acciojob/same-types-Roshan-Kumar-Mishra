function isSameType(value1, value2) {
  //your js code here
	function isSameType(value1, value2) {
  // Check if both values are NaN
  if (isNaN(value1) && isNaN(value2)) {
    return true;
  }

  // Check if the types are the same
  return typeof value1 === typeof value2;
}

// Example usage:
// console.log(isSameType(5, "hello"));  // false (number and string have different types)
// console.log(isSameType(true, false)); // true (both are boolean)
// console.log(isSameType(NaN, NaN));     // true (both are NaN)
// console.log(isSameType(42, NaN));      // false (number and NaN have different types)

}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
