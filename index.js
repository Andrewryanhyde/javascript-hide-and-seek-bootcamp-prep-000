function getFirstSelector(selector) {
 return document.querySelector(selector)
  
}

function nestedTarget(target, nested) {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  let rankingList = document.querySelectorAll('ul.ranked-list li')
  
  for (let i = 0; i < rankingList.length; i++ ) {
    rankingList[i].innerHTML = parseInt(rankingList[i].innerHTML) + n
    }
    
  return rankingList
}


function deepestChild() {
  
  let grandNode = document.querySelector("#grand-node");
  let nodes = grandNode.children
  
  if (nodes.lenth === 0) {
    return grandNode.children[0]
  }
  
  for (let i = 0; !deepNode.children[i]; i++) {
    deepNode = deepNode.children[0]
  }
  return deepNode;
}