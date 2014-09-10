var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQ = Object.create(queueMethods);
  newQ.total = 0;
  newQ.added = 0;
  newQ.removed = 0;
  newQ.storage = {};
  return newQ;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.added] = value;
  this.added ++;
  this.total ++;
};

queueMethods.dequeue = function(){
  if(this.total > 0){
    var rItem = this.storage[this.removed];
    delete this.storage[this.removed];
    this.removed ++;
    this.total --;
    return rItem;
  }
};

queueMethods.size = function(){
  return this.total;
};
