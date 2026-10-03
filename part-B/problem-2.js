function diffObjects(oldObj, newObj) {
  let result = {
    added: {},
    removed: {},
    changed: {},
  };

  // Check for added and changed keys
  for (let key in newObj) {
    if (!(key in oldObj)) {
      result.added[key] = newObj[key];
    } else if (oldObj[key] !== newObj[key]) {
      result.changed[key] = {
        from: oldObj[key],
        to: newObj[key],
      };
    }
  }

  // Check for removed keys
  for (let key in oldObj) {
    if (!(key in newObj)) {
      result.removed[key] = oldObj[key];
    }
  }

  return result;
}

console.log(
  diffObjects(
    { name: "Setemi", role: "Engineer", country: "Jamaica" },
    { name: "Setemi", role: "Senior Engineer", city: "Kingston" },
  ),
);
