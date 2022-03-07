const project =  alert("Укажите размеры Rabbits");
const widthSquare =  +prompt("Укажите количество квадратов в ширину");
const topSquare  = +prompt("Укажите количество квадратов высотку");
const squareBody = document.querySelector('.square-body')
//  всего квадаратов
let allSquare = widthSquare * topSquare
// создаёи элмент чтобы бы не был пустым
const btnReset = document.querySelector('.btn-reset')

// Добавление элементов
const addElem = ()=>{
  let elem = `<div class="block">
                  <div class="block-number">1</div>
                  <div class="block-btn">
                      <div class="arrow left"><img src="img/arrow-left.svg" alt=""></div>
                      <div class="arrow right"><img src="img/arrow-right.svg" alt=""></div>
                      <div class="arrow top"><img src="img/arrow-up.svg" alt=""></div>
                      <div class="arrow bottom"><img src="img/arrow-down.svg" alt=""></div>
                  </div>
              </div>`
  //  делаем цикл из количества элементов и добавляем элементы на страницу
  for (let i = 2; i <= allSquare; i++) {
    elem += `<div class="block">
                  <div class="block-number">${i}</div>
                  <div class="block-btn">
                      <div class="arrow left"><img src="img/arrow-left.svg" alt=""></div>
                      <div class="arrow right"><img src="img/arrow-right.svg" alt=""></div>
                      <div class="arrow top"><img src="img/arrow-up.svg" alt=""></div>
                      <div class="arrow bottom"><img src="img/arrow-down.svg" alt=""></div>
                  </div>
              </div>`
    squareBody.innerHTML = elem
  }
    // получаем ширину контейнкра с квадратами 2 paddind по 5 px
    const widthSquareBody = squareBody.clientWidth - 40
    // собираем все квадарты блока
    let allBlock = document.querySelectorAll('.block')
    // перебираем все квадараты для того чтобы задать ширину и высоту для их размещения
    allBlock.forEach(e => {
      // делим общую ширину на количество квадратов
      e.style.width = `${widthSquareBody / widthSquare}px`
      e.style.height = `${widthSquareBody / topSquare}px`
    });

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
        if (index > widthSquare) {
          allBlock[index - widthSquare].before(cloneElem)
          allBlock[index].replaceWith(allBlock[index - widthSquare])
          allBlock = document.querySelectorAll('.block')
        }
        break
      case 'right':
        if (index < allSquare - 1) {
          allBlock[index + 1].before(cloneElem)
          allBlock[index].replaceWith(allBlock[index + 1])
          allBlock = document.querySelectorAll('.block')
        }

        break
      case 'bottom':
        if (index < allSquare - widthSquare) {
          allBlock[index + widthSquare].before(cloneElem)
          allBlock[index].replaceWith(allBlock[index + widthSquare])
          allBlock = document.querySelectorAll('.block')
        }

        break
      case 'left':
        if (index > 0) {
          allBlock[index - 1].before(cloneElem)
          allBlock[index].replaceWith(allBlock[index - 1])
          allBlock = document.querySelectorAll('.block')
        }

        break
    }
    // console.dir(allBlock);
    // console.log(allBlock);
  }
}
addElem()

btnReset.addEventListener('click', ()=>{
  // очищаем блок squareBody
  squareBody.innerHTML = ''
  addElem()
})