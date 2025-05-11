class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insert(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }
}

const insertData = new LinkedList();
insertData.insert(1);
insertData.insert(2);
insertData.insert(5);
insertData.insert(23);
console.log(JSON.stringify(insertData, null, 2));

//* Input output mapping
// Input: data 1, 2, 5, 23 output map with head -> data -> next.... next: null, and the last inserted data tail

//* Cost break down
// Memory will be fullfill according to the inserted n size items
// Every time it will add data at the end/tail of the linked list which is O(1)

//* final asymptotic analysis
// Time complexity: O(1) space complexity O(n)

//* Suggested Optimization
// No optimization needed for this problem as it is already optimized for the given problem. But if needed then we can add a size.
