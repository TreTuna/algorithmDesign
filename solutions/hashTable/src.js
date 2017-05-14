var makeHashTable = function(){
  var table = {};
  var storage = [];
  var storageLimit = 1000;

  table.insert = function(key, value){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    //retrieve a bucket or create one
    storage[index] = storage[index] || [];
    var bucket = storage[index]
    // keep track of state of finding key
    var found = false;
    // iterate over bucket to access tuples
    for(var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      // check if key exists in tuple
      if(tuple[0] === key) {
        // if key exists update, return old val, and break loop
        tuple[1] = value;
        found = true;
        return;
      }
    }
    // if key doesn't exist, insert new tuple
    if(!found) {
      bucket.push([key,value]);
    }
  };

  table.retrieve = function(key){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    // retrieve bucket
    var bucket = storage[index];
    if(bucket) {
      // iterate over bucket
      for(var i = 0; i < bucket.length; i++) {
        var tuple = bucket[i]
        // check if key exists
        if(tuple[0] === key) {
          // if key exists return value
          return tuple[1];
        }
      }
    }
    // if no tuple was found return undefined
    return undefined;
  };

  table.remove = function(key){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    // retrieve bucket
    var bucket = storage[index];
    if(bucket) {
      // iterate over bucket
      for(var i = 0; i < bucket.length; i++) {
        var tuple = bucket[i];
        // check if key exists
        if(tuple[0] === key) {
          // if key exists remove tuple & return val
          bucket.splice(i, 1);
          return tuple[1];
        }
      }
    }
    return undefined;
  }
  return table;
};
var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};
