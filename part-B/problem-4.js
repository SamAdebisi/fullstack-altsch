function createCounter() {
  let count = 0; // private variable

  return {
    increment: function () {
      count++;
    },

    decrement: function () {
      count--;
    },

    get value() {
      return count;
    },
  };
}
const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.value); // 1
console.log(counter.count); // undefined — not directly accessible
