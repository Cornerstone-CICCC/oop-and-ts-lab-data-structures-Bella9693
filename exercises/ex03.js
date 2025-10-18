// Create a function called insertAfterTarget that inserts a new element after a target element
// Make sure to implement the Stack principle (LIFO)

const Stack = require("../lib/Stack");

function insertAfterTarget(stack, target, newElement) {
  // your code here
  const tempStack = new Stack();

  while (!stack.isEmpty()) {
    tempStack.push(stack.pop());
  }

  const helperStack = new Stack();
  let inserted = false;

  while (!tempStack.isEmpty()) {
    const value = tempStack.pop();
    stack.push(value);

    if (value === target && !inserted) {
      stack.push(newElement);
      inserted = true;
    }
  }
}

const stack = new Stack();
stack.push("A");
stack.push("B");
stack.push("C");
stack.push("D");

insertAfterTarget(stack, "B", "X");
console.log(stack.printStack()); // A B X C D
