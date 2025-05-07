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
arr.insert(5);
arr.insert(5);
arr.insert(51);
arr.insert(51);
arr.insert(51);
arr.insert(51);
arr.insert(1);
arr.insert(1);
arr.insert(1);
console.log(arr.array);
