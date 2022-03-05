const squareBody = document.querySelector('.square-body')
let allBlock = document.querySelectorAll('.block')

squareBody.addEventListener('click', (e)=>{
  if (e.target.closest('.block') && e.target.closest('.arrow')) {
    let blockNumber = 0
    let direction = e.target.closest('.arrow').classList[1]

    for (let i = 0; i < allBlock.length; i++) {

      if (e.target.closest('.block') === allBlock[i]) {
        blockNumber = i
        arrowDirection(blockNumber,direction )
      }
    }

    // let blockNumber = +e.target.closest('.block').querySelector('.block-number').textContent - 1
    // arrowDirection(blockNumber,direction )
  }


})
//  направление стрелки
const arrowDirection = (index,direction) =>{


  const cloneElem = allBlock[index].cloneNode(true)

  switch(direction) {
    // нужно сохранять номер элемента а также индекс по какому номеру расположен элемент
    case 'top':
      // allBlock[index].parentNode.insertBefore(allBlock[index], allBlock[index - 5]);
      // allBlock[index - 5].parentNode.insertBefore(allBlock[index - 5], allBlock[index]);

      allBlock[index - 5].before(cloneElem)
      allBlock[index].replaceWith(allBlock[index - 5])

      allBlock = document.querySelectorAll('.block')

      break
    case 'right':

      allBlock[index + 1].before(cloneElem)
      allBlock[index].replaceWith(allBlock[index + 1])

      allBlock = document.querySelectorAll('.block')
      break
    case 'bottom':

      allBlock[index + 5].before(cloneElem)
      allBlock[index].replaceWith(allBlock[index + 5])

      allBlock = document.querySelectorAll('.block')
      break
    case 'left':

      allBlock[index - 1].before(cloneElem)
      allBlock[index].replaceWith(allBlock[index - 1])

      allBlock = document.querySelectorAll('.block')
      break
  }
  // console.dir(allBlock);
  // console.log(allBlock);
}