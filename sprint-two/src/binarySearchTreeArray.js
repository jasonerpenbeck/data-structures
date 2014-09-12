var makeBinarySearchTree = function(value){
  var left = 0;
  var right = 0;
  var treeStack = {};
  var storage = [];

  /*
.left where all values are lower than than it the current value.
.right where all values are higher than than it the current value.
  */

treeStack.insert = function(value) {
    var leftOrRight = function(value, pos) {
        if (value > pos[0]) {
            if (pos[1][1] === null) {
                pos[1][1] = [value, [null, null]];
                left = value;
            } else {
                leftOrRight(value, pos[1]);
            }
        } else {
            if (pos[1][0] === null) {
                pos[1][0] = [value, [null, null]];
                right = value;
            } else {
                leftOrRight(value, pos[0]);
            }
        }
    }
    if (storage.length === 0) {
        console.log('Top of the Tree!');
        storage.push([value, [null, null]]);
    } else {
        leftOrRight(value, storage[0]);
    }
}

treeStack.contains = function(){

}

treeStack.depthFirstLog = function(){

}
  return treeStack;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
