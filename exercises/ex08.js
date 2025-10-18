// Create a function called deleteAllNodesWithValue that removes all nodes with a specific value from the DLL
// Make sure to update the size of the list as well

const DLL = require("../lib/DLL");

function deleteAllNodesWithValue(list, value) {
  // your code here
  let runner = list.getHead();

  while (runner) {
    const nextNode = runner.next;

    if (runner.data === value) {
      if (runner === list.getHead()) {
        list.setHead(runner.next);
        if (list.getHead()) {
          list.getHead().prev = null;
        } else {
          list.setTail(null);
        }
      } else if (runner === list.getTail()) {
        list.setTail(runner.prev);
        if (list.getTail()) {
          list.getTail().next = null;
        }
      } else {
        runner.prev.next = runner.next;
        runner.next.prev = runner.prev;
      }

      list.setSize(list.length() - 1);
    }

    runner = nextNode;
  }
}

const list = new DLL();
list.insertAtBack(1);
list.insertAtBack(2);
list.insertAtBack(3);
list.insertAtBack(2);
list.insertAtBack(5);

deleteAllNodesWithValue(list, 2);
console.log(list.print()); // Output: 1 <-> 3 <-> 5
