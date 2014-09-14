var makeTree = function(value){
  var newTree = {};
  newTree.value = value;

//  console.log(newTree.value);
  newTree.children = undefined;
  extend(newTree, treeMethods);

//   console.log('newTree.children: ',newTree.children);


  return newTree;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value){
/*   console.log(value); */
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

treeMethods.traverse = function(callback) {
    console.log('*** Running Traverse! ***');
    console.log('this ->',this);
    // Recurse Through Tree
    // Run callback function on top of the tree and each branch
    // From each branch, check for children to run callback on
    // If there are children, jump down the tree and run callback
    // If not, stop

    var callCallBack = function(x) {
      console.log(x);
      // run callback function on the top of the tree
      callback(x);
      if(x.children === undefined)  {
        console.log('SHOULD BE UNDEFINED');
        return;
      } else {
        for(var i=0;i<x.children.length;i++) {
          console.log('RUN');
          console.log(x.children[i]);
          callCallBack(x.children[i]);
        }

      }

    }



    callCallBack(this);

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
