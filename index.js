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
  let grandnode = document.getElementById('#grand-node')
  let deepChild = grandnode.children[0]
  
    for (var i = 0; !deepChild.children[i]; i++) {
    deepChild = deepChild.children[0]
  }
  return deepChild;
}