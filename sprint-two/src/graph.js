var Graph = function(){
this.storage = {};
};

Graph.prototype.addNode = function(newNode, toNode){
    // console.log(newNode, toNode);
    if(_.keys(this.storage).length === 1) {
      var firstNode = _.keys(this.storage)[0];
      this.storage[newNode] = {name: newNode, relationships: [firstNode]};
      this.storage[firstNode].relationships.push(newNode);
    } else {
      this.storage[newNode] = {name: newNode, relationships: []};
    }
    if(arguments.length > 1){
      this.storage[newNode].relationships.push(toNode);
      this.storage[toNode].relationships.push(newNode);
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

  // this.storage[fromNode].relationships.push(toNode);
  // this.storage[toNode].relationships.push(fromNode);

};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(fromNode, toNode){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
