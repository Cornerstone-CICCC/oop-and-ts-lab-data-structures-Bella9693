// Create a function called removeBetween that removes all elements between two unique elements
// Make sure to implement the Stack principle (LIFO)

const Stack = require("../lib/Stack");

function removeBetween(stack, a, b) {
  // your code here
  const tempStack = new Stack();
  let removing = false;

  while (!stack.isEmpty()) {
    const value = stack.pop();

    if (value === a || value === b) {
      tempStack.push(value);
      removing = !removing;
    } else if (!removing) {
      tempStack.push(value);
    }
  }

  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop());
  }
}

const fruits = new Stack();
fruits.push("Apple");
fruits.push("Banana");
fruits.push("Cherry");
fruits.push("Date");
fruits.push("Elderberry");

removeBetween(fruits, "Banana", "Elderberry");
console.log(fruits.printStack()); // Apple Banana Elderberry
