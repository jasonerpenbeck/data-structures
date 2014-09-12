var HashTable = function(){
  this._limit = 8;
  this.total = 0;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(i)) {
    v = [this._storage.get(i), arguments[1]];
  }
  this._storage.set(i,v);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(Array.isArray(this._storage.get(i))) {
    var value = [this.total];
    this.total ++;
    return this._storage.get(i)[value];
  }  else {
   return this._storage.get(i);
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(val, index, collection){
    if(i === index){
      collection.splice(i, 1, null);
    }
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
