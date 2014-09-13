var HashTable = function(){
  this._limit = 8;
  this._count = 0;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var idx = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(idx);//retrieve bucket
  if(!bucket){  //if not exists, create
    bucket = [];
    this._storage.set(idx, bucket);

  }

  var found = false;

  for(var i = 0; i < bucket.length; i++){  //iterate over the bucket
    var tuple = bucket[i];
    if(tuple[0] === k) { //if key found
      tuple[1] = v; //update it
      found = true;
      break;
    }
  }
    
   if(!found){ //if key not found
    bucket.push([k,v]); //store a new tuple 
    this._count ++;
    if(this._count > 0.75 * this._limit){
      this._resize(this._limit * 2);
    }
   }    
  this._storage.set(idx, bucket);
};

HashTable.prototype.retrieve = function(k){
  var idx = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(idx);  //retrieve bucket
  if(!bucket){  //if not exists, return
    return null;
  }
  for(var i = 0; i < bucket.length; i++){//iterate over the bucket
    var tuple = bucket[i]; //set tuple to the bucket value
    if(tuple[0] === k) { //if key found
      return tuple[1];
    }
  }
};

HashTable.prototype.remove = function(k){
  var idx = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(idx);  //retrieve bucket
  if(!bucket){  //if not exists, return
    return null;;
  }
  for(var i = 0; i < bucket.length; i++){//iterate over the bucket
    var tuple = bucket[i]; //set tuple to the bucket value
    if(tuple[0] === k) { //if key found
      bucket.splice(i, 1);
      this._count --;
      if(this._count < 0.25 * this._limit){
        this._resize(this._limit / 2);
      }
      return tuple[1];
    }
  }
};

HashTable.prototype._resize = function(newLimit) {

  var oldStorage = this._storage;
  this._limit = newLimit;
  this._count = 0;
  this._storage = makeLimitedArray(this._limit);


  oldStorage.each( function (bucket){
    for(var i = 0; i < this.length; i++){
      var tuple = this[i];
      this.insert(tuple[0], tuple[1]);
    }
});

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
