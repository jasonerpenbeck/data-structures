var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var removed = 0;
  var added = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[added] = value;
    size ++;
    added ++;
  };

  someInstance.dequeue = function(){
    if(size > 0){
      var removedItem = storage[removed]; //store item removing
      delete storage[removed]; // remove item
      removed ++; // increment removed items counter
      size --; // decrease size counter
      return removedItem;
    }
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
