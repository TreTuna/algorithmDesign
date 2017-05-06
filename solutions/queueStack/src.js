// Write a stack. Once you're done, implement a queue using two stacks. Do not create a storage array for your queue.

var Stack = function() {
  var storage = [];
  var count = 0;

  this.push = function(value){
    storage[count] = value;
    count += 1;
  };

  this.pop = function(){
    var value = storage[count -= 1];
    delete storage[count];
    return value;
  };

  this.size = function(){
    return count;
  };
};

var Queue = function() {

  var inbox = new Stack();
  var outbox = new Stack();

  this.enqueue = function(value){
    inbox.push(value);
  };

  this.dequeue = function(){
    if(outbox.size() === 0) {
      var inToOut = function() {
        if(inbox.size() === 0) {
          return;
        } else if(inbox.size() > 0) {
          outbox.push(inbox.pop());
          inToOut();
        }
      }
      inToOut();
    }
    return outbox.pop();
  };

  this.size = function(){
    return inbox.size() + outbox.size();
  };
};

/*
Given Code:

var Stack = function() {
  var storage = [];

  this.push = function(){

  };

  this.pop = function(){

  };

  this.size = function(){

  };
};

var Queue = function() {

  var inbox = new Stack();
  var outbox = new Stack();

  this.enqueue = function(){

  };

  this.dequeue = function(){

  };

  this.size = function(){

  };
};*/
