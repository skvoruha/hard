'use strict'

const getDataXml = (url) =>{
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, false);
  xhr.setRequestHeader('Content-Type', 'application/json; charset utf-8');

  try {
    xhr.send();
    if (xhr.status != 200) {
      alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
    } else {
      console.log(JSON.parse(xhr.response))
      return JSON.parse(xhr.response)
    }
  } catch(err) { // для отлова ошибок используем конструкцию try...catch вместо onerror
    alert("Запрос не удался");
  }
}

const sendDataXml = (url, data) =>{
  // отправим данные
  let xhr = new XMLHttpRequest();
  xhr.open("POST", url);
  xhr.setRequestHeader('Content-type', 'application/json; charset utf-8');

  xhr.upload.onerror = function() {
    alert(`Произошла ошибка во время отправки: ${xhr.status}`);
  };

  xhr.send(data);

  xhr.onload = () =>{
    console.log(JSON.parse(xhr.response))
    return JSON.parse(xhr.response)
  }

}


sendDataXml('https://jsonplaceholder.typicode.com/posts', getDataXml('db.json'))



