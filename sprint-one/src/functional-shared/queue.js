var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var newQ = {};
  newQ.storage = {};
  newQ.total = 0;
  newQ.removed = 0;
  newQ.added = 0;
  extend(newQ, queueMethods);
  return newQ;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.added] = value;
  this.added ++;
  this.total ++;
};

queueMethods.dequeue = function() {
  if(this.total > 0){
    var removedItem = this.storage[this.removed];
    delete this.storage[this.removed];
    this.removed ++;
    this.total --;
    return removedItem;
  }
};

queueMethods.size = function() {
  return this.total;
};

