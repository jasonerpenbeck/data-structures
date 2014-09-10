var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.total = 0;
  this.storage = {};
};

Stack.prototype.push = function(value){
  this.storage[this.total] = value;
  this.total ++;
};

Stack.prototype.pop = function(){
  if(this.total > 0){
    var rItem = this.storage[this.total - 1];
    delete this.storage[this.total - 1];
    this.total --;
    return rItem;
  }
};

Stack.prototype.size = function(){
  return this.total;
};
