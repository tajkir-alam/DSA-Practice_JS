const DEFAULT_CAPACITY = 2;

class DynamicArray {
  constructor(capacity = DEFAULT_CAPACITY) {
    this.capacity = capacity;
    this.length = 0;
    this.array = new Array(capacity);
  }

  resize() {
    this.capacity *= 2;
    const newArray = new Array(this.capacity);
    for (let i = 0; i < this.length; i++) {
      newArray[i] = this.array[i];
    }
    this.array = newArray;
  }

  insert(value) {
    if (this.length === this.capacity) {
      this.resize();
    }

    for (let i = this.length; i > 0; i--) {
      this.array[i] = this.array[i - 1];
    }
    this.array[0] = value;
    this.length++;
  }
}

const arr = new DynamicArray();
arr.insert(2);
arr.insert(5);
arr.insert(23);
arr.insert(51);
console.log(arr.array);


// -----------------------------------------------------------------
//* # Input output mapping
// In this code we are adding a value which is going to index 0. and all values are shifting to the right so the 0 index could be get free

//* Step-by-step cost break down
// If memory is full then its creating a new array which is O(n).
// As it's creating a new array the space complexity is O(n).
// The sifting is also O(n).
// So the overall time complexity is O(n) and space complexity is O(n).

//* Suggested Optimization
// I think this is the perfect optimization. No suggessions for optimization for this.