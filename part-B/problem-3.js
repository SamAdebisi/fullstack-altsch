function deepFreeze(obj) {
  // If it is not an object, return it
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Get all keys in the object
  let keys = Object.keys(obj);

  // Freeze nested objects first
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];

    if (typeof obj[key] === "object" && obj[key] !== null) {
      deepFreeze(obj[key]);
    }
  }

  // Freeze the current object
  Object.freeze(obj);

  return obj;
}
const config = deepFreeze({ api: { baseUrl: 'https://x.com', retries: 3 }, debug: false })
config.api.baseUrl = 'https://changed.com' // should be ignored
config.debug = true                        // should be ignored
console.log(config.api.baseUrl, config.debug) // "https://x.com" false
console.log(Object.isFrozen(config.api))       // true