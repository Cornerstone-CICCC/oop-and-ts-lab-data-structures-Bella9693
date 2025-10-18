// Create a function called isPalindrome that checks if the elements in the queue form a palindrome
// A palindrome reads the same forwards and backwards (e.g., 1 2 3 2 1)
// Make sure to implement the Queue principle (FIFO)

const Queue = require("../lib/Queue");

function isPalindrome(queue) {
  // your code here
  const arr = [];
  const size = queue.size();

  for (let i = 0; i < size; i++) {
    const value = queue.dequeue();
    arr.push(value);
    queue.enqueue(value);
  }

  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(2);
queue.enqueue(1);

console.log(isPalindrome(queue)); // true
