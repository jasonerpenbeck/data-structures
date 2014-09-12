var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
  extend(newTree, treeMethods);
  return newTree;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value){
  if(this.children === undefined){
    this.children = [];
  }
  this.children.push(makeTree(value));
};

treeMethods.contains = function(target){
  var isCont = false;
  var findValue = function(x){
    for(var i=0; i < x.length; i++){
      if(x[i].children !== undefined){
        findValue(x[i].children);
      }
      if(x[i].value === target){
          isCont = true;
      }
    }
  };
  findValue(this.children);
  return isCont;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
