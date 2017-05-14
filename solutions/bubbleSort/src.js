const swap = (a, b, array) => {
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
  return array;
};

const bubbleSort = (array) => {
  while (true){
    let swaps = false;
    for (let i = 0; i < array.length - 1; i++) {
      let next = i + 1;
      if (array[i] > array[next]) {
        swaps = true;
        swap(i, next, array);
      }
    }
    if (!swaps) {
      break;
    }
  }
  return array;
};

const testArray = [3, 6, 2, 5, 1, -5];

console.log(bubbleSort(testArray));
