var makeBinarySearchTree = function(value){
  var treeStack = {value: value, left: null, right: null};

treeStack.insert = function(val) {
    var leftOrRight = function(val, pos) {
        if (val > pos.value) {
            if (pos.right === null) {
                pos.right = {
                    value: val,
                    left: null,
                    right: null
                };
            } else {
                leftOrRight(val, pos.right);
            }
        } else {
            if (pos.left === null) {
                pos.left = {
                    value: val,
                    left: null,
                    right: null
                };
            } else {
                leftOrRight(val, pos.left);
            }
        }
    }
    if (treeStack === {}) {
        treeStack = {
            value: val,
            left: null,
            right: null
        }
    } else {
        leftOrRight(val, treeStack);
    }
};

treeStack.contains = function(x) {
    var contains = false;
    var containsValue = function(pos) {
        if (pos.value === x) {
            contains = true;
        } else {
            if (pos.right === null && pos.left === null) {
                // Nowhere Else to go
                return;
            } else {
                // Look Left And Right
                if (pos.left !== null) {
                    containsValue(pos.left);
                }
                if (pos.right !== null) {
                    containsValue(pos.right);
                }
            }
        }
    }
    containsValue(treeStack);
    return contains;
};

treeStack.depthFirstLog = function(callback){

  var callCallback = function(pos) {
  callback(pos.value);

  if (pos.left !== null) {
      callCallback(pos.left);
  }
  if (pos.right !== null) {
      callCallback(pos.right);
  }
}
callCallback(treeStack);

}
  return treeStack;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
