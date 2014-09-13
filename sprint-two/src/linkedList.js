var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list.previous = null;
  list.parent = null;

  list.addToTail = function(value){
    if(list.head === null){
        list.head = makeNode(value);
      }
    if(list.head.next === null && list.tail === null) {
        list.head.next = list.tail;
      } else {
         list.head.next = list.tail;
       }
    list.tail = makeNode(value);
  };

  list.addHead = function(value){
    //takes value and adds it to the end if a list
    if(list.head === null){
        list.head = makeNode(value);
      } else {
        list.previous = list.head;
        list.head = makeNode(value);
      }
  };
  
  list.removeTail = function(){
    //remove the last node from list and return the value
        var oldTail = list.tail;
        var newTail = list.tail;
        delete list.tail;
        list.tail = newTail;
        return oldTail.value;
  };

  list.removeFromParent = function(){
    //disassociates the tree with its parent (in both directions)

  };

  list.removeHead = function(){
        var oldHead = list.head;
        var newHead = list.tail;
        delete list.head;
        list.head = newHead;
        return oldHead.value; // New Code: We do need to return the value we are deleting
  };

  list.contains = function(target){

      var containsTarget = false;
      // return true if any of the values = target
      // this should be done recursively but for the moment, I'm going to check value of the head and tail
      // doing this recurseively would just tag .next to each successive link
      if(list.head.value === target) {
        containsTarget = true;
      }
      if(list.tail.value === target) {
        containsTarget = true;
      }
      return containsTarget;
  };
  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 var linkedList2 = {
  head = {val1: {val1.5: {val2: {val3: {val4: {}}}}}}
}
 */
