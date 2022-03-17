const getData = () => {
  return fetch('../db/dbHeroes.json')
  .then((responce) =>{
    return responce.json()
  })
}

export default getData