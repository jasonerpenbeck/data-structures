var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newS = Object.create(stackMethods);
  newS.total = 0;
  newS.storage = {};
  return newS;
};

var stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.total] = value;
  this.total ++;
};

stackMethods.pop = function(){
  if(this.total > 0){
    var rItem = this.storage[this.total - 1];
    delete this.storage[this.total - 1];
    this.total --;
    return rItem;
  }
};

stackMethods.size = function(){
  return this.total;
};
