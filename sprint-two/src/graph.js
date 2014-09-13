var Graph = function(){
this.storage = {};
};

Graph.prototype.addNode = function(newNode, toNode){
    if(_.keys(this.storage).length === 1) {
      var firstNode = _.keys(this.storage)[0];
      this.storage[newNode] = {name: newNode, relationships: [firstNode]};
      this.storage[firstNode].relationships.push(newNode);
    } else {
      this.storage[newNode] = {name: newNode, relationships: []};
    }
    if(arguments.length > 1){
      this.addEdge(newNode, toNode);
    }
};

Graph.prototype.contains = function(node){
  var containsNode = false;
  for(var key in this.storage){
    if(node === key){
      containsNode = true;
    }
  }
  return containsNode;
};

Graph.prototype.removeNode = function(node){
  if(this.storage[node]){
    delete this.storage[node];
  }
};

Graph.prototype.getEdge = function(fromNode, toNode){
  if(this.storage[fromNode].relationships.indexOf(toNode) !== -1){
    return true;
  } else {
    return false;
  }
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.storage[fromNode].relationships.push(toNode);
  this.storage[toNode].relationships.push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  if(this.storage[fromNode].relationships.indexOf(toNode) !== -1){
    var index1 = this.storage[fromNode].relationships.indexOf(toNode);
    this.storage[fromNode].relationships.splice(index1,1);
    var index2 = this.storage[toNode].relationships.indexOf(fromNode);
    this.storage[toNode].relationships.splice(index2,1);
  }
  if(this.storage[fromNode].relationships.length === 0){
    this.removeNode(fromNode);
  }
  if(this.storage[toNode].relationships.length === 0){
    this.removeNode(toNode);
  }
};

Graph.prototype.forEachNode = function(fromNode, toNode){

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
