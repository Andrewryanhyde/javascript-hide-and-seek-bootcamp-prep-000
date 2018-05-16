function getFirstSelector(selector) {
 return document.querySelector(selector)
  
}

function nestedTarget(target, nested) {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  let rankingList = document.getElementById('ranked-list')
  
  for (let i = 0; i < rankingList.length; i++ ) {
    rankingList[i].innerHTML = parseInt
    }
}