// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
function getElementsByClassName(className) {
  var elements = [];

  function getElementAt(node) {
    if (node.classList && node.classList.contains(className)) {
      elements.push(node);
    }
    
    for (var i = 0; i<node.childNodes.length; i++) {
    	getElementAt(node.childNodes[i]);
    }
  }

  getElementAt(document.body);
  return elements;
}