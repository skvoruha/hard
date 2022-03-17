import getData from './getData'
import renderdbHeroes from './renderdbHeroes'
import {getParameter} from './filters'

// получаем элемент чтобы создать select из параметров
const parameter = document.getElementById('parameter')

const load = () => {
  getData().then((data) => {
    renderdbHeroes(data);
    // функция перебора паарметров для сохранения на странице
    getParameter(data,parameter);
  })
}

export default load
