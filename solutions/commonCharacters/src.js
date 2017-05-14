commonCharacters = function(string1, string2){
  if(string1 === '' || string2 === ''){
    return '';
  }

  var results = [];

  for(var i = 0; i < string1.length; i++){
    var currentChar = string1[i]
    if(string2.includes(currentChar) && !results.includes(currentChar) && currentChar !== ' '){
      results.push(currentChar);
    }
  }

  return results.join('');
};