var makeStack = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var newS = {};
  newS.storage = {};
  newS.total = 0;
  extend(newS, stackMethods);
  return newS;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.total] = value;
  this.total ++;

};

stackMethods.pop = function() {
  if(this.total > 0){
    var removedItem = this.storage[this.total-1];
    delete this.storage[this.total-1];
    this.total --;
    return removedItem;
  }
};

stackMethods.size = function() {
  return this.total;
};


