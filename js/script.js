'use strict'

const form = document.getElementById('form')
const username = document.getElementById('username')
const pass = document.getElementById('password')

const getData = (url) =>{
  return fetch(url)
    .then(response =>response.json())
    .catch(() =>{
      console.log("Произошла ошибка при получении данных");
    })
}



const sendData = (url, data) =>{
  return fetch(url,{
    method: 'POST',
    body: data,
    headers: {
      'Content-type': 'application/json; charset utf-8',
    },
  })
    .then(response =>response.json())
    .catch(() =>{
      console.log("Произошла ошибка при отправки данных");
    })

}
// получаем данные из файла db.json
getData('db.json').then(data =>{
  console.log(data)
  sendData('https://jsonplaceholder.typicode.com/posts',JSON.stringify(data)).then(data =>{
      console.log(data);
  })
})