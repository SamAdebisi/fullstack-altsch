function validateSchema(obj, schema) {
  let errors = [];

  // Check every key in the schema
  for (let key in schema) {
    // Check if the property is missing
    if (!(key in obj)) {
      errors.push(`${key}: missing property`);
    }
    // Check if the type is incorrect
    else if (typeof obj[key] !== schema[key]) {
      errors.push(`${key}: expected ${schema[key]}, got ${typeof obj[key]}`);
    }
  }

  return errors;
}
const schema = { name: "string", age: "number", isAdmin: "boolean" };
console.log(validateSchema({ name: "Ada", age: 21, isAdmin: false }, schema));
// []
console.log(validateSchema({ name: "Ada", age: "21" }, schema));
// ['age: expected number, got string', 'isAdmin: missing property']
