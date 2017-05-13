/*
Binary Search Array
Given a sorted array of integers, find the index of a target value using a binary search algorithm.

  A binary search finds an item in a sorted array by repeatedly choosing a middle value and dividing the search interval in half. The initial interval includes the whole array. If the value of the target value is less than the middle value of the interval, then the next interval will be the lower half of the current interval. If the value of the target value is greater than the middle value, then the next interval will be the upper half. The search process repeats until the middle value is equal to the target value, or the search interval is empty.


  Note:
Your function should return -1 for target values not in the array.

  Do NOT use Array.prototype.indexOf in your solution. What would be the fun in that?

  Parameters:

  array (required) - an array.

target (required) - an integer value.

  Examples
Input	                        Output
array:
  [ 5 ]
target:
  4	                            -1
array:
  [ 11, 12, 13, 14, 15 ]
target:
  11	                          0
array:
  [ 11, 12, 13, 14, 15 ]
target:
  12	                          1
array:
  [ 11, 12, 13, 14, 15 ]
target:
  13	                          2
array:
  [ 11, 12, 13, 14, 15 ]
target:
  14	                          3
array:
  [ 11, 12, 13, 14, 15 ]
target:
  15	                          4
array:
  [ 11, 12, 13, 14, 15 ]
target:
  16	                          -1
*/


function binarySearch (array, target) {
  let low = 0;
  let high = array.length - 1;
  let mid;

  while (low <= high) {
    mid = Math.floor((high - low) / 2) + low;
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
};

test = [0,100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000,2100,2200,2300,2400,2500,2600,2700,2800,2900,3000,3100,3200,3300,3400,3500,3600,3700,3800,3900,4000,4100,4200,4300,4400,4500,4600,4700,4800,4900]
// ***** Solution Code

var binarySearch = function (array, target) {
  var sub = function (low, high) {
    var mid = Math.floor((high - low) / 2) + low;
    if (array[mid] === target) {
      return mid;
    } else if (high === low) { // we've gone through and haven't found it
      return -1;
    } else if (array[mid] > target) {
      return sub(low, mid);
    } else if (low === mid) { //notice this edge case - what is it saying?
      return sub(mid + 1, high);
    } else {
      return sub(mid, high);
    }
  };

  return sub(0, array.length - 1);
};

// Time complexity if O(log(n))
// What happens if you slice?
// Complexity is usually stated in upperbounds, so in a nutshell we could say it is O(nlog(n))
// Why? Consider what the limit of n + n/2 + n/4 ... is (This is not same as complexity for binary search)
// (https://en.wikipedia.org/wiki/Geometric_series)
// However to narrow down further suggest looking into Master's Theorem (but that is beyond scope at this time)