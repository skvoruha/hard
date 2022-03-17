import getData from './getData'
import renderdbHeroes from './renderdbHeroes'
import { parameterSelect,parameterFilter } from './filters'

const filter = () =>{

  const parameter = document.getElementById('parameter')
  const selectParameter = document.getElementById('selectParameter')

  let numOption

  parameter.addEventListener('change', (e)=>{
    // получаем выбранный параметр по индексу
    numOption =  e.target.options[e.target.options.selectedIndex].value
    getData().then((data) =>{
      parameterSelect(data,numOption,selectParameter)
    })
  })
  selectParameter.addEventListener('change',(e)=>{
    getData().then((data) =>{
      const selectParameterNum =  e.target.options[e.target.options.selectedIndex].value
      renderdbHeroes(parameterFilter(data,numOption,selectParameterNum))
    })
    // parameterFilter = (heroes,numOption,selectParameter)
  })

}

export default filter