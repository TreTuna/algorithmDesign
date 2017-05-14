const binarySearch = (array, target) => {
  const subRt = (low, high) => {
    const mid = Math.floor((high - low) / 2) + low;
    if (array[mid] === target) {
      return mid;
    } else if (high === low) {
      return null;
    } else if (array[mid] > target) {
      return subRt(low, mid);
    } else if (low === mid) {
      return subRt(mid + 1, high);
    } else {
      return subRt(mid, high);
    }
  };
  return subRt(0, array.length - 1);
}
