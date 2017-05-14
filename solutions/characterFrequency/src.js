const characterFrequency = (string) => {
  const charCount = {};
  const result = [];

  for(let char of string){
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for(var char in charCount){
    result.push([char, charCount[char]])
  }

  result.sort(function(a, b) {
    if (a[1] > b[1]) return -1;
    else if (a[1] < b[1]) return 1;
    else if(a[0] < b[0]) return -1;
    else if(a[0] > b[0]) return 1;
  });

  return result;
}
