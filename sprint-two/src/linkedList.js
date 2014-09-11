var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
        // console.log("Before: ", list.head);
    if(list.head === null){
        list.head = makeNode(value);
        // console.log("After: ", list.head);
      }
    if(list.head.next === null && list.tail === null) {
        list.head.next = list.tail;
      } else {
         list.head.next = list.tail;
       }
    list.tail = makeNode(value);
    //console.log("Tail: ", list.tail);

  };

  list.removeHead = function(){
        console.log("Before: ", list.head);
        // console.log("Before(Obj): ", list);
        var oldHead = list.head;
        var newHead = list.tail;
        delete list.head;
        // console.log("NewHead: ", newHead);
        list.head = newHead;
        // console.log("After: ", list.head);
        // return oldHead;
  };

  list.contains = function(target){
    // return list.target;
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  // node.next = arguments[1] || null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 var linkedList2 = {
  head = {val1: {val1.5: {val2: {val3: {val4: {}}}}}}
}
 */
