function deepEqual(objA, objB) {
  // If both values are exactly the same
  if (objA === objB) {
    return true;
  }

  // If one of them is not an object, they are not equal
  if (
    typeof objA !== "object" ||
    typeof objB !== "object" ||
    objA === null ||
    objB === null
  ) {
    return false;
  }

  // Get the keys of both objects
  let keysA = Object.keys(objA);
  let keysB = Object.keys(objB);

  // If they have different numbers of keys
  if (keysA.length !== keysB.length) {
    return false;
  }

  // Compare every key
  for (let i = 0; i < keysA.length; i++) {
    let key = keysA[i];

    // If objB does not have the same key
    if (!(key in objB)) {
      return false;
    }

    // If the values are objects, compare them again
    if (typeof objA[key] === "object" && objA[key] !== null) {
      if (!deepEqual(objA[key], objB[key])) {
        return false;
      }
    } else {
      // Compare normal values
      if (objA[key] !== objB[key]) {
        return false;
      }
    }
  }

  // Everything matched
  return true;
}
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })); // true
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } })); // false
console.log(deepEqual({ a: 1 }, { a: 1, b: 2 })); // false
