var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.total = 0;
  this.added = 0;
  this.removed = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value){
  this.storage[this.added] = value;
  this.added ++;
  this.total ++;
};

Queue.prototype.dequeue = function(){
  if(this.total > 0){
    var rItem = this.storage[this.removed];
    delete this.storage[this.removed];
    this.removed ++;
    this.total --;
    return rItem;
  }
};

Queue.prototype.size = function(){
  return this.total;
};
