deepEquals = function(a, b) {
  if(a === b) {return true;}
  if(!a || !b) {return false;}
  if(a === undefined || b === undefined) {return false;}
  if(Array.isArray(a) && !Array.isArray(b)){return false;}
  if(Array.isArray(b) && !Array.isArray(a)){return false;}
  if(!(a instanceof Object) || !(b instanceof Object)) {return false;}
  if(Object.keys(a).length !== Object.keys(b).length) {return false;}
  for(key in a){
    if(!deepEquals(a[key], b[key])) {return false;}
  }
  return true;
}