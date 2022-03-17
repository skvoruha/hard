export const getParameter = (heroes, parameter) =>{
    for (let key in heroes[0]) {
      if (!(key === 'name' || key === 'photo' || key == 'movies')) {
        const option = document.createElement('option')
        option.value = key
        option.textContent = key
        parameter.append(option)
        }
    }
}
export const parameterSelect = (heroes,numOption,selectParameter) => {
  // очищаем массив с веденными данными
  for (let i = selectParameter.children.length - 1; i > -1; i--) {
    selectParameter.children[i].remove();
  }
  // создаём пустой  массив для перебора уникальных параметров
  let uniqElem = []
  // перебор все значений heroes и сохранение как массив
  heroes.forEach((e, index) => {
    uniqElem[index] = e[numOption]
  });
  // создём элемент в котором перебирается массив и выбираются не повторющиееся элементы
  const uniqueHeroes = Array.from(new Set(uniqElem));
  uniqueHeroes.forEach(e => {
    if (e) {
      const option = document.createElement('option')
      option.value = e
      option.textContent = e
      selectParameter.append(option)
    }
  });
}

export const parameterFilter = (heroes,numOption,selectParameterNum) =>{

  return heroes.filter((heroesItem) =>{
    console.log(heroesItem[numOption] === selectParameterNum);
    return heroesItem[numOption] === selectParameterNum
  })
}

